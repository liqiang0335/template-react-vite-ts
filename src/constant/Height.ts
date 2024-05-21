// 整体布局
export const HeightHeader = "30px"; // 头部高度
export const HeightFooter = "30px"; // 底部高度
export const HeightBody = `calc(100vh - ${HeightHeader} - ${HeightFooter} )`; // 主体高度

// 聊天区域
export const HeightInputbar = "200px"; // 输入框高度
export const HeightChatList = `calc(100% - ${HeightInputbar})`; // 聊天列表高度

// 侧边栏
export const HeightSideAction = "35px"; // 角色列表高度
export const HeightSideContent = `calc(100% - ${HeightSideAction})`; // 角色列表内容高度
