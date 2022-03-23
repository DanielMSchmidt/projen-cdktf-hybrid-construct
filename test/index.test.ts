import { HybridModule } from "../src/index";
import { synthSnapshot } from "./helper";

describe("HybridModule", () => {
  it("snapshot", () => {
    const project = new HybridModule({
      name: "my-module",
      author: "Daniel Schmidt",
      repository: "github.com/DanielMSchmidt/my-module",
      defaultReleaseBranch: "main",
      authorAddress: "danielmschmidt92@gmail.com",
      repositoryUrl: "github.com/DanielMSchmidt/my-module",
    });

    const out = synthSnapshot(project);

    Object.entries(out).forEach(([path, content]) => {
      expect(content).toMatchSnapshot(path);
    });
  });
});