import { Construct } from "constructs";
import { App, TerraformStack } from "cdktf";
import { AwsProvider } from "@cdktf/provider-aws";
import { Artifactory } from "./.gen/modules/JamesWoolfenden/aws/artifactory";
import { Vpc } from "./.gen/modules/terraform-aws-modules/aws/vpc";
import { PrivateKey, SelfSignedCert, TlsProvider } from "@cdktf/provider-tls";
import { AcmCertificate } from "@cdktf/provider-aws/lib/acm";
import { KmsKey } from "@cdktf/provider-aws/lib/kms";

const REGION = "eu-central-1";

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, "aws", {
      region: REGION,
    });
    new TlsProvider(this, "tls");

    const vpc = new Vpc(this, "vpc", {
      // We use the name of the stack
      name,
      // We tag every resource with the same set of tags to easily identify the resources
      cidr: "10.0.0.0/16",
      // We want to run on three availability zones
      azs: ["a", "b", "c"].map((i) => `${REGION}${i}`),
      // We need three CIDR blocks as we have three availability zones
      privateSubnets: ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"],
      publicSubnets: ["10.0.101.0/24", "10.0.102.0/24", "10.0.103.0/24"],
      databaseSubnets: ["10.0.201.0/24", "10.0.202.0/24", "10.0.203.0/24"],
      createDatabaseSubnetGroup: true,
      enableNatGateway: true,
      // Using a single NAT Gateway will save us some money, coming with the cost of less redundancy
      singleNatGateway: true,
    });

    const tlsPrivateKey = new PrivateKey(this, "privateKey", {
      algorithm: "RSA",
    });
    const tlsSelfSignedCert = new SelfSignedCert(this, "cert", {
      allowedUses: ["key_encipherment", "digital_signature", "server_auth"],
      keyAlgorithm: "RSA",
      privateKeyPem: tlsPrivateKey.privateKeyPem,
      subject: [
        {
          commonName: "danielmschmidt.de",
          organization: "Daniel Schmidt",
        },
      ],
      validityPeriodHours: 12,
    });

    const sslCert = new AcmCertificate(this, "cert", {
      certificateBody: tlsSelfSignedCert.certPem,
      privateKey: tlsPrivateKey.privateKeyPem,
    });

    const kmsKey = new KmsKey(this, "kmsKey", {
      enableKeyRotation: true,
    });

    // https://registry.terraform.io/modules/JamesWoolfenden/artifactory/aws/latest
    // How do I get a valid record?
    // Is the cert ok?
    new Artifactory(this, "artifactory", {
      subnetIds: vpc.publicSubnets as any[],
      vpcId: vpc.vpcIdOutput,
      sslCertificateId: sslCert.id,
      vpcCidr: [vpc.cidr],
      bucketName: "danielmschmidt-artifactory",
      instanceType: "m4.xlarge",
      accessCidr: ["module.ip.cidr"],
      sshAccess: ["module.ip.cidr"],
      dbPassword: "password",
      kmsKey: kmsKey,
    });
  }
}

const app = new App();
new MyStack(app, "infrastructure");
app.synth();
