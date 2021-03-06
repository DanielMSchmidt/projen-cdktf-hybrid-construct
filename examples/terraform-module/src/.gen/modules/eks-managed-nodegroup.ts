// generated by cdktf get
// terraform-aws-modules/eks/aws//modules/eks-managed-node-group
import { TerraformModule } from 'cdktf';
import { Construct } from 'constructs';
export interface EksManagedNodegroupOptions {
  /**
   * The AMI from which to launch the instance. If not supplied, EKS will use its own default image
   */
  readonly amiId?: string;
  /**
   * AMI version of the EKS Node Group. Defaults to latest version for Kubernetes version
   */
  readonly amiReleaseVersion?: string;
  /**
   * Type of Amazon Machine Image (AMI) associated with the EKS Node Group. Valid values are `AL2_x86_64`, `AL2_x86_64_GPU`, `AL2_ARM_64`, `CUSTOM`, `BOTTLEROCKET_ARM_64`, `BOTTLEROCKET_x86_64`
   */
  readonly amiType?: string;
  /**
   * Specify volumes to attach to the instance besides the volumes specified by the AMI
   * @default [object Object]
   */
  readonly blockDeviceMappings?: any;
  /**
   * Additional arguments passed to the bootstrap script. When `platform` = `bottlerocket`; these are additional [settings](https://github.com/bottlerocket-os/bottlerocket#settings) that are provided to the Bottlerocket user data
   */
  readonly bootstrapExtraArgs?: string;
  /**
   * Targeting for EC2 capacity reservations
   */
  readonly capacityReservationSpecification?: any;
  /**
   * Type of capacity associated with the EKS Node Group. Valid values: `ON_DEMAND`, `SPOT`
   * @default ON_DEMAND
   */
  readonly capacityType?: string;
  /**
   * Base64 encoded CA of associated EKS cluster
   */
  readonly clusterAuthBase64?: string;
  /**
   * Endpoint of associated EKS cluster
   */
  readonly clusterEndpoint?: string;
  /**
   * The IP family used to assign Kubernetes pod and service addresses. Valid values are `ipv4` (default) and `ipv6`
   */
  readonly clusterIpFamily?: string;
  /**
   * Name of associated EKS cluster
   */
  readonly clusterName?: string;
  /**
   * The ID of the EKS cluster primary security group to associate with the instance(s). This is the security group that is automatically created by the EKS service
   */
  readonly clusterPrimarySecurityGroupId?: string;
  /**
   * Cluster control plane security group ID
   */
  readonly clusterSecurityGroupId?: string;
  /**
   * The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks
   */
  readonly clusterServiceIpv4Cidr?: string;
  /**
   * Kubernetes version. Defaults to EKS Cluster Kubernetes version
   */
  readonly clusterVersion?: string;
  /**
   * The CPU options for the instance
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly cpuOptions?: { [key: string]: string };
  /**
   * Determines whether to create EKS managed node group or not
   * @default true
   */
  readonly create?: boolean;
  /**
   * Determines whether an IAM role is created or to use an existing IAM role
   * @default true
   */
  readonly createIamRole?: boolean;
  /**
   * Determines whether to create a launch template or not. If set to `false`, EKS will use its own default launch template
   * @default true
   */
  readonly createLaunchTemplate?: boolean;
  /**
   * Determines whether to create a security group
   * @default true
   */
  readonly createSecurityGroup?: boolean;
  /**
   * Customize the credit specification of the instance
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly creditSpecification?: { [key: string]: string };
  /**
   * Desired number of instances/nodes
   * @default 1
   */
  readonly desiredSize?: number;
  /**
   * If true, enables EC2 instance termination protection
   */
  readonly disableApiTermination?: boolean;
  /**
   * Disk size in GiB for nodes. Defaults to `20`
   */
  readonly diskSize?: number;
  /**
   * If true, the launched EC2 instance(s) will be EBS-optimized
   */
  readonly ebsOptimized?: boolean;
  /**
   * The elastic GPU to attach to the instance
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly elasticGpuSpecifications?: { [key: string]: string };
  /**
   * Configuration block containing an Elastic Inference Accelerator to attach to the instance
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly elasticInferenceAccelerator?: { [key: string]: string };
  /**
   * Determines whether the bootstrap configurations are populated within the user data template
   */
  readonly enableBootstrapUserData?: boolean;
  /**
   * Enables/disables detailed monitoring
   * @default true
   */
  readonly enableMonitoring?: boolean;
  /**
   * Enable Nitro Enclaves on launched instances
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly enclaveOptions?: { [key: string]: string };
  /**
   * Force version update if existing pods are unable to be drained due to a pod disruption budget issue
   */
  readonly forceUpdateVersion?: boolean;
  /**
   * Additional policies to be added to the IAM role
   * @default 
   */
  readonly iamRoleAdditionalPolicies?: string[];
  /**
   * Existing IAM role ARN for the node group. Required if `create_iam_role` is set to `false`
   */
  readonly iamRoleArn?: string;
  /**
   * Whether to attach the `AmazonEKS_CNI_Policy`/`AmazonEKS_CNI_IPv6_Policy` IAM policy to the IAM IAM role. WARNING: If set `false` the permissions must be assigned to the `aws-node` DaemonSet pods via another method or nodes will not be able to join the cluster
   * @default true
   */
  readonly iamRoleAttachCniPolicy?: boolean;
  /**
   * Description of the role
   */
  readonly iamRoleDescription?: string;
  /**
   * Name to use on IAM role created
   */
  readonly iamRoleName?: string;
  /**
   * IAM role path
   */
  readonly iamRolePath?: string;
  /**
   * ARN of the policy that is used to set the permissions boundary for the IAM role
   */
  readonly iamRolePermissionsBoundary?: string;
  /**
   * A map of additional tags to add to the IAM role created
   * @default [object Object]
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly iamRoleTags?: { [key: string]: string };
  /**
   * Determines whether the IAM role name (`iam_role_name`) is used as a prefix
   * @default true
   */
  readonly iamRoleUseNamePrefix?: boolean;
  /**
   * The market (purchasing) option for the instance
   */
  readonly instanceMarketOptions?: any;
  /**
   * Set of instance types associated with the EKS Node Group. Defaults to `["t3.medium"]`
   */
  readonly instanceTypes?: string[];
  /**
   * The kernel ID
   */
  readonly kernelId?: string;
  /**
   * The key name that should be used for the instance(s)
   */
  readonly keyName?: string;
  /**
   * Key-value map of Kubernetes labels. Only labels that are applied with the EKS API are managed by this argument. Other Kubernetes labels applied to the EKS Node Group will not be managed
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly labels?: { [key: string]: string };
  /**
   * Default version of the launch template
   */
  readonly launchTemplateDefaultVersion?: string;
  /**
   * Description of the launch template
   */
  readonly launchTemplateDescription?: string;
  /**
   * Launch template name - either to be created (`var.create_launch_template` = `true`) or existing (`var.create_launch_template` = `false`)
   */
  readonly launchTemplateName?: string;
  /**
   * A map of additional tags to add to the tag_specifications of launch template created
   * @default [object Object]
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly launchTemplateTags?: { [key: string]: string };
  /**
   * Determines whether to use `launch_template_name` as is or create a unique name beginning with the `launch_template_name` as the prefix
   * @default true
   */
  readonly launchTemplateUseNamePrefix?: boolean;
  /**
   * Launch template version number. The default is `$Default`
   */
  readonly launchTemplateVersion?: string;
  /**
   * A list of license specifications to associate with
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly licenseSpecifications?: { [key: string]: string };
  /**
   * Maximum number of instances/nodes
   * @default 3
   */
  readonly maxSize?: number;
  /**
   * Customize the metadata options for the instance
   * @default [object Object]
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly metadataOptions?: { [key: string]: string };
  /**
   * Minimum number of instances/nodes
   */
  readonly minSize?: number;
  /**
   * Name of the EKS managed node group
   */
  readonly name?: string;
  /**
   * Customize network interfaces to be attached at instance boot time
   * @default 
   */
  readonly networkInterfaces?: any[];
  /**
   * The placement of the instance
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly placement?: { [key: string]: string };
  /**
   * Identifies if the OS platform is `bottlerocket` or `linux` based; `windows` is not supported
   * @default linux
   */
  readonly platform?: string;
  /**
   * User data that is appended to the user data script after of the EKS bootstrap script. Not used when `platform` = `bottlerocket`
   */
  readonly postBootstrapUserData?: string;
  /**
   * User data that is injected into the user data script ahead of the EKS bootstrap script. Not used when `platform` = `bottlerocket`
   */
  readonly preBootstrapUserData?: string;
  /**
   * The ID of the ram disk
   */
  readonly ramDiskId?: string;
  /**
   * Configuration block with remote access settings
   * @default [object Object]
   */
  readonly remoteAccess?: any;
  /**
   * Description for the security group created
   * @default EKS managed node group security group
   */
  readonly securityGroupDescription?: string;
  /**
   * Name to use on security group created
   */
  readonly securityGroupName?: string;
  /**
   * List of security group rules to add to the security group created
   * @default [object Object]
   */
  readonly securityGroupRules?: any;
  /**
   * A map of additional tags to add to the security group created
   * @default [object Object]
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly securityGroupTags?: { [key: string]: string };
  /**
   * Determines whether the security group name (`security_group_name`) is used as a prefix
   * @default true
   */
  readonly securityGroupUseNamePrefix?: string;
  /**
   * Identifiers of EC2 Subnets to associate with the EKS Node Group. These subnets must have the following resource tag: `kubernetes.io/cluster/CLUSTER_NAME`
   */
  readonly subnetIds?: string[];
  /**
   * A map of tags to add to all resources
   * @default [object Object]
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly tags?: { [key: string]: string };
  /**
   * The Kubernetes taints to be applied to the nodes in the node group. Maximum of 50 taints per node group
   * @default [object Object]
   */
  readonly taints?: any;
  /**
   * Create, update, and delete timeout configurations for the node group
   * @default [object Object]
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly timeouts?: { [key: string]: string };
  /**
   * Configuration block of settings for max unavailable resources during node group updates
   * @default [object Object]
   * The property type contains a map, they have special handling, please see {@link cdk.tf/module-map-inputs the docs}
   */
  readonly updateConfig?: { [key: string]: string };
  /**
   * Whether to update the launch templates default version on each update. Conflicts with `launch_template_default_version`
   * @default true
   */
  readonly updateLaunchTemplateDefaultVersion?: boolean;
  /**
   * Determines whether to use `name` as is or create a unique name beginning with the `name` as the prefix
   * @default true
   */
  readonly useNamePrefix?: boolean;
  /**
   * Path to a local, custom user data template file to use when rendering user data
   */
  readonly userDataTemplatePath?: string;
  /**
   * ID of the VPC where the security group/nodes will be provisioned
   */
  readonly vpcId?: string;
  /**
   * A list of security group IDs to associate
   * @default 
   */
  readonly vpcSecurityGroupIds?: string[];
}
export class EksManagedNodegroup extends TerraformModule {
  private readonly inputs: { [name: string]: any } = { }
  public constructor(scope: Construct, id: string, options: EksManagedNodegroupOptions = {}) {
    super(scope, id, {
      source: 'terraform-aws-modules/eks/aws//modules/eks-managed-node-group',
      version: '~> 18.0',
    });
    this.amiId = options.amiId;
    this.amiReleaseVersion = options.amiReleaseVersion;
    this.amiType = options.amiType;
    this.blockDeviceMappings = options.blockDeviceMappings;
    this.bootstrapExtraArgs = options.bootstrapExtraArgs;
    this.capacityReservationSpecification = options.capacityReservationSpecification;
    this.capacityType = options.capacityType;
    this.clusterAuthBase64 = options.clusterAuthBase64;
    this.clusterEndpoint = options.clusterEndpoint;
    this.clusterIpFamily = options.clusterIpFamily;
    this.clusterName = options.clusterName;
    this.clusterPrimarySecurityGroupId = options.clusterPrimarySecurityGroupId;
    this.clusterSecurityGroupId = options.clusterSecurityGroupId;
    this.clusterServiceIpv4Cidr = options.clusterServiceIpv4Cidr;
    this.clusterVersion = options.clusterVersion;
    this.cpuOptions = options.cpuOptions;
    this.create = options.create;
    this.createIamRole = options.createIamRole;
    this.createLaunchTemplate = options.createLaunchTemplate;
    this.createSecurityGroup = options.createSecurityGroup;
    this.creditSpecification = options.creditSpecification;
    this.desiredSize = options.desiredSize;
    this.disableApiTermination = options.disableApiTermination;
    this.diskSize = options.diskSize;
    this.ebsOptimized = options.ebsOptimized;
    this.elasticGpuSpecifications = options.elasticGpuSpecifications;
    this.elasticInferenceAccelerator = options.elasticInferenceAccelerator;
    this.enableBootstrapUserData = options.enableBootstrapUserData;
    this.enableMonitoring = options.enableMonitoring;
    this.enclaveOptions = options.enclaveOptions;
    this.forceUpdateVersion = options.forceUpdateVersion;
    this.iamRoleAdditionalPolicies = options.iamRoleAdditionalPolicies;
    this.iamRoleArn = options.iamRoleArn;
    this.iamRoleAttachCniPolicy = options.iamRoleAttachCniPolicy;
    this.iamRoleDescription = options.iamRoleDescription;
    this.iamRoleName = options.iamRoleName;
    this.iamRolePath = options.iamRolePath;
    this.iamRolePermissionsBoundary = options.iamRolePermissionsBoundary;
    this.iamRoleTags = options.iamRoleTags;
    this.iamRoleUseNamePrefix = options.iamRoleUseNamePrefix;
    this.instanceMarketOptions = options.instanceMarketOptions;
    this.instanceTypes = options.instanceTypes;
    this.kernelId = options.kernelId;
    this.keyName = options.keyName;
    this.labels = options.labels;
    this.launchTemplateDefaultVersion = options.launchTemplateDefaultVersion;
    this.launchTemplateDescription = options.launchTemplateDescription;
    this.launchTemplateName = options.launchTemplateName;
    this.launchTemplateTags = options.launchTemplateTags;
    this.launchTemplateUseNamePrefix = options.launchTemplateUseNamePrefix;
    this.launchTemplateVersion = options.launchTemplateVersion;
    this.licenseSpecifications = options.licenseSpecifications;
    this.maxSize = options.maxSize;
    this.metadataOptions = options.metadataOptions;
    this.minSize = options.minSize;
    this.name = options.name;
    this.networkInterfaces = options.networkInterfaces;
    this.placement = options.placement;
    this.platform = options.platform;
    this.postBootstrapUserData = options.postBootstrapUserData;
    this.preBootstrapUserData = options.preBootstrapUserData;
    this.ramDiskId = options.ramDiskId;
    this.remoteAccess = options.remoteAccess;
    this.securityGroupDescription = options.securityGroupDescription;
    this.securityGroupName = options.securityGroupName;
    this.securityGroupRules = options.securityGroupRules;
    this.securityGroupTags = options.securityGroupTags;
    this.securityGroupUseNamePrefix = options.securityGroupUseNamePrefix;
    this.subnetIds = options.subnetIds;
    this.tags = options.tags;
    this.taints = options.taints;
    this.timeouts = options.timeouts;
    this.updateConfig = options.updateConfig;
    this.updateLaunchTemplateDefaultVersion = options.updateLaunchTemplateDefaultVersion;
    this.useNamePrefix = options.useNamePrefix;
    this.userDataTemplatePath = options.userDataTemplatePath;
    this.vpcId = options.vpcId;
    this.vpcSecurityGroupIds = options.vpcSecurityGroupIds;
  }
  public get amiId(): string | undefined {
    return this.inputs['ami_id'] as string | undefined;
  }
  public set amiId(value: string | undefined) {
    this.inputs['ami_id'] = value;
  }
  public get amiReleaseVersion(): string | undefined {
    return this.inputs['ami_release_version'] as string | undefined;
  }
  public set amiReleaseVersion(value: string | undefined) {
    this.inputs['ami_release_version'] = value;
  }
  public get amiType(): string | undefined {
    return this.inputs['ami_type'] as string | undefined;
  }
  public set amiType(value: string | undefined) {
    this.inputs['ami_type'] = value;
  }
  public get blockDeviceMappings(): any | undefined {
    return this.inputs['block_device_mappings'] as any | undefined;
  }
  public set blockDeviceMappings(value: any | undefined) {
    this.inputs['block_device_mappings'] = value;
  }
  public get bootstrapExtraArgs(): string | undefined {
    return this.inputs['bootstrap_extra_args'] as string | undefined;
  }
  public set bootstrapExtraArgs(value: string | undefined) {
    this.inputs['bootstrap_extra_args'] = value;
  }
  public get capacityReservationSpecification(): any | undefined {
    return this.inputs['capacity_reservation_specification'] as any | undefined;
  }
  public set capacityReservationSpecification(value: any | undefined) {
    this.inputs['capacity_reservation_specification'] = value;
  }
  public get capacityType(): string | undefined {
    return this.inputs['capacity_type'] as string | undefined;
  }
  public set capacityType(value: string | undefined) {
    this.inputs['capacity_type'] = value;
  }
  public get clusterAuthBase64(): string | undefined {
    return this.inputs['cluster_auth_base64'] as string | undefined;
  }
  public set clusterAuthBase64(value: string | undefined) {
    this.inputs['cluster_auth_base64'] = value;
  }
  public get clusterEndpoint(): string | undefined {
    return this.inputs['cluster_endpoint'] as string | undefined;
  }
  public set clusterEndpoint(value: string | undefined) {
    this.inputs['cluster_endpoint'] = value;
  }
  public get clusterIpFamily(): string | undefined {
    return this.inputs['cluster_ip_family'] as string | undefined;
  }
  public set clusterIpFamily(value: string | undefined) {
    this.inputs['cluster_ip_family'] = value;
  }
  public get clusterName(): string | undefined {
    return this.inputs['cluster_name'] as string | undefined;
  }
  public set clusterName(value: string | undefined) {
    this.inputs['cluster_name'] = value;
  }
  public get clusterPrimarySecurityGroupId(): string | undefined {
    return this.inputs['cluster_primary_security_group_id'] as string | undefined;
  }
  public set clusterPrimarySecurityGroupId(value: string | undefined) {
    this.inputs['cluster_primary_security_group_id'] = value;
  }
  public get clusterSecurityGroupId(): string | undefined {
    return this.inputs['cluster_security_group_id'] as string | undefined;
  }
  public set clusterSecurityGroupId(value: string | undefined) {
    this.inputs['cluster_security_group_id'] = value;
  }
  public get clusterServiceIpv4Cidr(): string | undefined {
    return this.inputs['cluster_service_ipv4_cidr'] as string | undefined;
  }
  public set clusterServiceIpv4Cidr(value: string | undefined) {
    this.inputs['cluster_service_ipv4_cidr'] = value;
  }
  public get clusterVersion(): string | undefined {
    return this.inputs['cluster_version'] as string | undefined;
  }
  public set clusterVersion(value: string | undefined) {
    this.inputs['cluster_version'] = value;
  }
  public get cpuOptions(): { [key: string]: string } | undefined {
    return this.inputs['cpu_options'] as { [key: string]: string } | undefined;
  }
  public set cpuOptions(value: { [key: string]: string } | undefined) {
    this.inputs['cpu_options'] = value;
  }
  public get create(): boolean | undefined {
    return this.inputs['create'] as boolean | undefined;
  }
  public set create(value: boolean | undefined) {
    this.inputs['create'] = value;
  }
  public get createIamRole(): boolean | undefined {
    return this.inputs['create_iam_role'] as boolean | undefined;
  }
  public set createIamRole(value: boolean | undefined) {
    this.inputs['create_iam_role'] = value;
  }
  public get createLaunchTemplate(): boolean | undefined {
    return this.inputs['create_launch_template'] as boolean | undefined;
  }
  public set createLaunchTemplate(value: boolean | undefined) {
    this.inputs['create_launch_template'] = value;
  }
  public get createSecurityGroup(): boolean | undefined {
    return this.inputs['create_security_group'] as boolean | undefined;
  }
  public set createSecurityGroup(value: boolean | undefined) {
    this.inputs['create_security_group'] = value;
  }
  public get creditSpecification(): { [key: string]: string } | undefined {
    return this.inputs['credit_specification'] as { [key: string]: string } | undefined;
  }
  public set creditSpecification(value: { [key: string]: string } | undefined) {
    this.inputs['credit_specification'] = value;
  }
  public get desiredSize(): number | undefined {
    return this.inputs['desired_size'] as number | undefined;
  }
  public set desiredSize(value: number | undefined) {
    this.inputs['desired_size'] = value;
  }
  public get disableApiTermination(): boolean | undefined {
    return this.inputs['disable_api_termination'] as boolean | undefined;
  }
  public set disableApiTermination(value: boolean | undefined) {
    this.inputs['disable_api_termination'] = value;
  }
  public get diskSize(): number | undefined {
    return this.inputs['disk_size'] as number | undefined;
  }
  public set diskSize(value: number | undefined) {
    this.inputs['disk_size'] = value;
  }
  public get ebsOptimized(): boolean | undefined {
    return this.inputs['ebs_optimized'] as boolean | undefined;
  }
  public set ebsOptimized(value: boolean | undefined) {
    this.inputs['ebs_optimized'] = value;
  }
  public get elasticGpuSpecifications(): { [key: string]: string } | undefined {
    return this.inputs['elastic_gpu_specifications'] as { [key: string]: string } | undefined;
  }
  public set elasticGpuSpecifications(value: { [key: string]: string } | undefined) {
    this.inputs['elastic_gpu_specifications'] = value;
  }
  public get elasticInferenceAccelerator(): { [key: string]: string } | undefined {
    return this.inputs['elastic_inference_accelerator'] as { [key: string]: string } | undefined;
  }
  public set elasticInferenceAccelerator(value: { [key: string]: string } | undefined) {
    this.inputs['elastic_inference_accelerator'] = value;
  }
  public get enableBootstrapUserData(): boolean | undefined {
    return this.inputs['enable_bootstrap_user_data'] as boolean | undefined;
  }
  public set enableBootstrapUserData(value: boolean | undefined) {
    this.inputs['enable_bootstrap_user_data'] = value;
  }
  public get enableMonitoring(): boolean | undefined {
    return this.inputs['enable_monitoring'] as boolean | undefined;
  }
  public set enableMonitoring(value: boolean | undefined) {
    this.inputs['enable_monitoring'] = value;
  }
  public get enclaveOptions(): { [key: string]: string } | undefined {
    return this.inputs['enclave_options'] as { [key: string]: string } | undefined;
  }
  public set enclaveOptions(value: { [key: string]: string } | undefined) {
    this.inputs['enclave_options'] = value;
  }
  public get forceUpdateVersion(): boolean | undefined {
    return this.inputs['force_update_version'] as boolean | undefined;
  }
  public set forceUpdateVersion(value: boolean | undefined) {
    this.inputs['force_update_version'] = value;
  }
  public get iamRoleAdditionalPolicies(): string[] | undefined {
    return this.inputs['iam_role_additional_policies'] as string[] | undefined;
  }
  public set iamRoleAdditionalPolicies(value: string[] | undefined) {
    this.inputs['iam_role_additional_policies'] = value;
  }
  public get iamRoleArn(): string | undefined {
    return this.inputs['iam_role_arn'] as string | undefined;
  }
  public set iamRoleArn(value: string | undefined) {
    this.inputs['iam_role_arn'] = value;
  }
  public get iamRoleAttachCniPolicy(): boolean | undefined {
    return this.inputs['iam_role_attach_cni_policy'] as boolean | undefined;
  }
  public set iamRoleAttachCniPolicy(value: boolean | undefined) {
    this.inputs['iam_role_attach_cni_policy'] = value;
  }
  public get iamRoleDescription(): string | undefined {
    return this.inputs['iam_role_description'] as string | undefined;
  }
  public set iamRoleDescription(value: string | undefined) {
    this.inputs['iam_role_description'] = value;
  }
  public get iamRoleName(): string | undefined {
    return this.inputs['iam_role_name'] as string | undefined;
  }
  public set iamRoleName(value: string | undefined) {
    this.inputs['iam_role_name'] = value;
  }
  public get iamRolePath(): string | undefined {
    return this.inputs['iam_role_path'] as string | undefined;
  }
  public set iamRolePath(value: string | undefined) {
    this.inputs['iam_role_path'] = value;
  }
  public get iamRolePermissionsBoundary(): string | undefined {
    return this.inputs['iam_role_permissions_boundary'] as string | undefined;
  }
  public set iamRolePermissionsBoundary(value: string | undefined) {
    this.inputs['iam_role_permissions_boundary'] = value;
  }
  public get iamRoleTags(): { [key: string]: string } | undefined {
    return this.inputs['iam_role_tags'] as { [key: string]: string } | undefined;
  }
  public set iamRoleTags(value: { [key: string]: string } | undefined) {
    this.inputs['iam_role_tags'] = value;
  }
  public get iamRoleUseNamePrefix(): boolean | undefined {
    return this.inputs['iam_role_use_name_prefix'] as boolean | undefined;
  }
  public set iamRoleUseNamePrefix(value: boolean | undefined) {
    this.inputs['iam_role_use_name_prefix'] = value;
  }
  public get instanceMarketOptions(): any | undefined {
    return this.inputs['instance_market_options'] as any | undefined;
  }
  public set instanceMarketOptions(value: any | undefined) {
    this.inputs['instance_market_options'] = value;
  }
  public get instanceTypes(): string[] | undefined {
    return this.inputs['instance_types'] as string[] | undefined;
  }
  public set instanceTypes(value: string[] | undefined) {
    this.inputs['instance_types'] = value;
  }
  public get kernelId(): string | undefined {
    return this.inputs['kernel_id'] as string | undefined;
  }
  public set kernelId(value: string | undefined) {
    this.inputs['kernel_id'] = value;
  }
  public get keyName(): string | undefined {
    return this.inputs['key_name'] as string | undefined;
  }
  public set keyName(value: string | undefined) {
    this.inputs['key_name'] = value;
  }
  public get labels(): { [key: string]: string } | undefined {
    return this.inputs['labels'] as { [key: string]: string } | undefined;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this.inputs['labels'] = value;
  }
  public get launchTemplateDefaultVersion(): string | undefined {
    return this.inputs['launch_template_default_version'] as string | undefined;
  }
  public set launchTemplateDefaultVersion(value: string | undefined) {
    this.inputs['launch_template_default_version'] = value;
  }
  public get launchTemplateDescription(): string | undefined {
    return this.inputs['launch_template_description'] as string | undefined;
  }
  public set launchTemplateDescription(value: string | undefined) {
    this.inputs['launch_template_description'] = value;
  }
  public get launchTemplateName(): string | undefined {
    return this.inputs['launch_template_name'] as string | undefined;
  }
  public set launchTemplateName(value: string | undefined) {
    this.inputs['launch_template_name'] = value;
  }
  public get launchTemplateTags(): { [key: string]: string } | undefined {
    return this.inputs['launch_template_tags'] as { [key: string]: string } | undefined;
  }
  public set launchTemplateTags(value: { [key: string]: string } | undefined) {
    this.inputs['launch_template_tags'] = value;
  }
  public get launchTemplateUseNamePrefix(): boolean | undefined {
    return this.inputs['launch_template_use_name_prefix'] as boolean | undefined;
  }
  public set launchTemplateUseNamePrefix(value: boolean | undefined) {
    this.inputs['launch_template_use_name_prefix'] = value;
  }
  public get launchTemplateVersion(): string | undefined {
    return this.inputs['launch_template_version'] as string | undefined;
  }
  public set launchTemplateVersion(value: string | undefined) {
    this.inputs['launch_template_version'] = value;
  }
  public get licenseSpecifications(): { [key: string]: string } | undefined {
    return this.inputs['license_specifications'] as { [key: string]: string } | undefined;
  }
  public set licenseSpecifications(value: { [key: string]: string } | undefined) {
    this.inputs['license_specifications'] = value;
  }
  public get maxSize(): number | undefined {
    return this.inputs['max_size'] as number | undefined;
  }
  public set maxSize(value: number | undefined) {
    this.inputs['max_size'] = value;
  }
  public get metadataOptions(): { [key: string]: string } | undefined {
    return this.inputs['metadata_options'] as { [key: string]: string } | undefined;
  }
  public set metadataOptions(value: { [key: string]: string } | undefined) {
    this.inputs['metadata_options'] = value;
  }
  public get minSize(): number | undefined {
    return this.inputs['min_size'] as number | undefined;
  }
  public set minSize(value: number | undefined) {
    this.inputs['min_size'] = value;
  }
  public get name(): string | undefined {
    return this.inputs['name'] as string | undefined;
  }
  public set name(value: string | undefined) {
    this.inputs['name'] = value;
  }
  public get networkInterfaces(): any[] | undefined {
    return this.inputs['network_interfaces'] as any[] | undefined;
  }
  public set networkInterfaces(value: any[] | undefined) {
    this.inputs['network_interfaces'] = value;
  }
  public get placement(): { [key: string]: string } | undefined {
    return this.inputs['placement'] as { [key: string]: string } | undefined;
  }
  public set placement(value: { [key: string]: string } | undefined) {
    this.inputs['placement'] = value;
  }
  public get platform(): string | undefined {
    return this.inputs['platform'] as string | undefined;
  }
  public set platform(value: string | undefined) {
    this.inputs['platform'] = value;
  }
  public get postBootstrapUserData(): string | undefined {
    return this.inputs['post_bootstrap_user_data'] as string | undefined;
  }
  public set postBootstrapUserData(value: string | undefined) {
    this.inputs['post_bootstrap_user_data'] = value;
  }
  public get preBootstrapUserData(): string | undefined {
    return this.inputs['pre_bootstrap_user_data'] as string | undefined;
  }
  public set preBootstrapUserData(value: string | undefined) {
    this.inputs['pre_bootstrap_user_data'] = value;
  }
  public get ramDiskId(): string | undefined {
    return this.inputs['ram_disk_id'] as string | undefined;
  }
  public set ramDiskId(value: string | undefined) {
    this.inputs['ram_disk_id'] = value;
  }
  public get remoteAccess(): any | undefined {
    return this.inputs['remote_access'] as any | undefined;
  }
  public set remoteAccess(value: any | undefined) {
    this.inputs['remote_access'] = value;
  }
  public get securityGroupDescription(): string | undefined {
    return this.inputs['security_group_description'] as string | undefined;
  }
  public set securityGroupDescription(value: string | undefined) {
    this.inputs['security_group_description'] = value;
  }
  public get securityGroupName(): string | undefined {
    return this.inputs['security_group_name'] as string | undefined;
  }
  public set securityGroupName(value: string | undefined) {
    this.inputs['security_group_name'] = value;
  }
  public get securityGroupRules(): any | undefined {
    return this.inputs['security_group_rules'] as any | undefined;
  }
  public set securityGroupRules(value: any | undefined) {
    this.inputs['security_group_rules'] = value;
  }
  public get securityGroupTags(): { [key: string]: string } | undefined {
    return this.inputs['security_group_tags'] as { [key: string]: string } | undefined;
  }
  public set securityGroupTags(value: { [key: string]: string } | undefined) {
    this.inputs['security_group_tags'] = value;
  }
  public get securityGroupUseNamePrefix(): string | undefined {
    return this.inputs['security_group_use_name_prefix'] as string | undefined;
  }
  public set securityGroupUseNamePrefix(value: string | undefined) {
    this.inputs['security_group_use_name_prefix'] = value;
  }
  public get subnetIds(): string[] | undefined {
    return this.inputs['subnet_ids'] as string[] | undefined;
  }
  public set subnetIds(value: string[] | undefined) {
    this.inputs['subnet_ids'] = value;
  }
  public get tags(): { [key: string]: string } | undefined {
    return this.inputs['tags'] as { [key: string]: string } | undefined;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this.inputs['tags'] = value;
  }
  public get taints(): any | undefined {
    return this.inputs['taints'] as any | undefined;
  }
  public set taints(value: any | undefined) {
    this.inputs['taints'] = value;
  }
  public get timeouts(): { [key: string]: string } | undefined {
    return this.inputs['timeouts'] as { [key: string]: string } | undefined;
  }
  public set timeouts(value: { [key: string]: string } | undefined) {
    this.inputs['timeouts'] = value;
  }
  public get updateConfig(): { [key: string]: string } | undefined {
    return this.inputs['update_config'] as { [key: string]: string } | undefined;
  }
  public set updateConfig(value: { [key: string]: string } | undefined) {
    this.inputs['update_config'] = value;
  }
  public get updateLaunchTemplateDefaultVersion(): boolean | undefined {
    return this.inputs['update_launch_template_default_version'] as boolean | undefined;
  }
  public set updateLaunchTemplateDefaultVersion(value: boolean | undefined) {
    this.inputs['update_launch_template_default_version'] = value;
  }
  public get useNamePrefix(): boolean | undefined {
    return this.inputs['use_name_prefix'] as boolean | undefined;
  }
  public set useNamePrefix(value: boolean | undefined) {
    this.inputs['use_name_prefix'] = value;
  }
  public get userDataTemplatePath(): string | undefined {
    return this.inputs['user_data_template_path'] as string | undefined;
  }
  public set userDataTemplatePath(value: string | undefined) {
    this.inputs['user_data_template_path'] = value;
  }
  public get vpcId(): string | undefined {
    return this.inputs['vpc_id'] as string | undefined;
  }
  public set vpcId(value: string | undefined) {
    this.inputs['vpc_id'] = value;
  }
  public get vpcSecurityGroupIds(): string[] | undefined {
    return this.inputs['vpc_security_group_ids'] as string[] | undefined;
  }
  public set vpcSecurityGroupIds(value: string[] | undefined) {
    this.inputs['vpc_security_group_ids'] = value;
  }
  public get iamRoleArnOutput() {
    return this.getString('iam_role_arn')
  }
  public get iamRoleNameOutput() {
    return this.getString('iam_role_name')
  }
  public get iamRoleUniqueIdOutput() {
    return this.getString('iam_role_unique_id')
  }
  public get launchTemplateArnOutput() {
    return this.getString('launch_template_arn')
  }
  public get launchTemplateIdOutput() {
    return this.getString('launch_template_id')
  }
  public get launchTemplateLatestVersionOutput() {
    return this.getString('launch_template_latest_version')
  }
  public get nodeGroupArnOutput() {
    return this.getString('node_group_arn')
  }
  public get nodeGroupAutoscalingGroupNamesOutput() {
    return this.getString('node_group_autoscaling_group_names')
  }
  public get nodeGroupIdOutput() {
    return this.getString('node_group_id')
  }
  public get nodeGroupResourcesOutput() {
    return this.getString('node_group_resources')
  }
  public get nodeGroupStatusOutput() {
    return this.getString('node_group_status')
  }
  public get securityGroupArnOutput() {
    return this.getString('security_group_arn')
  }
  public get securityGroupIdOutput() {
    return this.getString('security_group_id')
  }
  protected synthesizeAttributes() {
    return this.inputs;
  }
}
