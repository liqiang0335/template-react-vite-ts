/**
 * 缓存的key
 */
export const CacheKey = {
  cost: ["cost"], // 今日消费
  chats: (roleId?: string) => ["chat-list", roleId], // GPT列表
  detail: (id: string) => ["detail", id], // GPT详情
  modelList: ["model-list"], // 模型列表
  roleList: ["role-list"], //  角色列表
  roleListSystem: ["role-list-system"], //  系统角色列表
  userInfo: ["user-info"], // 用户信息
  examples: ["examples"], // 示例列表
  examplesNames: ["examples", "names"], // 示例名称列表
  exampleDetail: (id: string) => ["example-detail", id], // 示例详情
};
