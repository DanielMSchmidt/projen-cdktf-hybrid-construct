import * as os from "os";
import * as path from "path";
import * as fs from "fs-extra";
import { glob } from "glob";
import { Project } from "projen";

export interface SynthOutput {
  [filePath: string]: any;
}

/**
 * Creates a snapshot of the files generated by a project. Ignores any non-text
 * files so that the snapshots are human readable.
 */
export function synthSnapshot(project: Project): SynthOutput {
  // defensive: verify that "outdir" is actually in a temporary directory
  if (
    !path.resolve(project.outdir).startsWith(os.tmpdir()) &&
    !project.outdir.includes("project-temp-dir")
  ) {
    throw new Error(
      "Trying to capture a snapshot of a project outside of tmpdir, which implies this test might corrupt an existing project"
    );
  }

  const synthed = Symbol.for("synthed");
  if (synthed in project) {
    throw new Error("duplicate synth()");
  }

  (project as any)[synthed] = true;

  const ENV_PROJEN_DISABLE_POST = process.env.PROJEN_DISABLE_POST;
  try {
    process.env.PROJEN_DISABLE_POST = "true";
    project.synth();
    const ignoreExts = ["png", "ico"];
    return directorySnapshot(project.outdir, {
      excludeGlobs: ignoreExts.map((ext) => `**/*.${ext}`),
    });
  } finally {
    fs.removeSync(project.outdir);

    // values assigned to process.env.XYZ are automatically converted to strings
    if (ENV_PROJEN_DISABLE_POST === undefined) {
      delete process.env.PROJEN_DISABLE_POST;
    } else {
      process.env.PROJEN_DISABLE_POST = ENV_PROJEN_DISABLE_POST;
    }
  }
}

export interface DirectorySnapshotOptions {
  /**
   * Globs of files to exclude.
   * @default [] include all files
   */
  readonly excludeGlobs?: string[];

  /**
   * Only snapshot the names of files and not their contents.
   * The value for a path will be `true` if it exists.
   *
   * @default false include file content
   */
  readonly onlyFileNames?: boolean;
}

export function directorySnapshot(
  root: string,
  options: DirectorySnapshotOptions = {}
) {
  const output: SynthOutput = {};

  const files = glob.sync("**", {
    ignore: [".git/**", ...(options.excludeGlobs ?? [])],
    cwd: root,
    nodir: true,
    dot: true,
  }); // returns relative file paths with POSIX separators

  for (const file of files) {
    const filePath = path.join(root, file);

    let content;
    if (!options.onlyFileNames) {
      if (path.extname(filePath) === ".json") {
        content = fs.readJsonSync(filePath);
      } else {
        content = fs.readFileSync(filePath, "utf-8");
      }
    } else {
      content = true;
    }

    output[file] = content;
  }

  return output;
}
