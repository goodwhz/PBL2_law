import axios from 'axios'

// API配置 - 使用环境变量
const API_URL = import.meta.env.VITE_API_URL || 'https://dify.aipfuture.com/v1'
const APP_ID = import.meta.env.VITE_APP_ID || 'd6393d63-bfa1-4716-af18-6b5c0939c297'
const API_KEY = import.meta.env.VITE_API_KEY || 'app-y5rIJA5AAq86u5H6mrcK6bBg'

// 创建axios实例
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`
  }
})

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    console.log('发送API请求:', config.url)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('API请求错误:', error)
    if (error.response) {
      // 服务器返回错误状态码
      switch (error.response.status) {
        case 401:
          throw new Error('API密钥无效，请检查配置')
        case 403:
          throw new Error('访问被拒绝，请检查权限')
        case 404:
          throw new Error('API端点不存在')
        case 500:
          throw new Error('服务器内部错误')
        case 502:
          throw new Error('网关错误，请稍后重试')
        case 503:
          throw new Error('服务暂时不可用')
        default:
          throw new Error(`请求失败: ${error.response.status}`)
      }
    } else if (error.request) {
      // 请求已发送但没有收到响应
      throw new Error('网络连接错误，请检查网络连接')
    } else {
      // 请求配置错误
      throw new Error('请求配置错误')
    }
  }
)

// 处理AI回复内容 - 统一处理函数
export const processAIResponse = (answer) => {
  if (!answer) return answer
  
  let processedAnswer = answer
  
  // 1. 去除</think>输出以及夹在其中的内容
  processedAnswer = processedAnswer.replace(/</think>.*?</think>/gs, '')
  processedAnswer = processedAnswer.replace(/</think>.*?</think>/gs, '')
  processedAnswer = processedAnswer.replace(/</think>/g, '')
  processedAnswer = processedAnswer.replace(/</think>/g, '')
  
  // 2. 去除思考过程等调试信息 - 使用更兼容的方式
  // 匹配"思考："开头直到下一个空行或文本结束
  processedAnswer = processedAnswer.replace(/思考：[^\n]*(\n[^\n]*)*?(?=\n\s*\n|$)/g, '')
  
  // 3. 去除工作流节点信息 - 使用更兼容的方式
  processedAnswer = processedAnswer.replace(/\[.*?\]\s*→\s*\[.*?\]/g, '')
  processedAnswer = processedAnswer.replace(/节点\s*\d+/g, '')
  processedAnswer = processedAnswer.replace(/工作流步骤[^\n]*(\n[^\n]*)*?(?=\n|$)/g, '')
  processedAnswer = processedAnswer.replace(/\s+→\s+/g, ' ')
  
  // 4. 清理文本格式 - 使用更兼容的方式
  processedAnswer = processedAnswer.replace(/\n\s*\n/g, '\n\n')
  processedAnswer = processedAnswer.replace(/\s+/g, ' ')
  
  // 5. 去除多余的空行和空格
  processedAnswer = processedAnswer.replace(/^\s*\n/gm, '')
  processedAnswer = processedAnswer.replace(/\n{3,}/g, '\n\n')
  
  return processedAnswer.trim()
}

// 发送聊天消息
export const sendChatMessage = async (message) => {
  try {
    const response = await apiClient.post('/chat-messages', {
      inputs: {},
      query: message,
      response_mode: 'blocking',
      user: 'labour-law-user'
    })

    if (response.data && response.data.answer) {
      // 处理AI回复内容
      return processAIResponse(response.data.answer)
    } else {
      throw new Error('API返回数据格式错误')
    }
  } catch (error) {
    console.error('发送聊天消息失败:', error)
    
    // 降级回复
    if (error.message.includes('网络连接错误') || error.message.includes('服务暂时不可用')) {
      return '抱歉，当前服务暂时不可用。您可以尝试以下常见问题的解答：\n\n1. 劳动合同应包含工作内容、工作地点、劳动报酬等基本条款\n2. 加班工资按平时工资的150%计算，节假日为300%\n3. 试用期最长不超过6个月\n请稍后重试或联系人工客服。'
    }
    
    throw error
  }
}

// 测试API连接
export const testApiConnection = async () => {
  try {
    const response = await apiClient.get('/parameters')
    return {
      success: true,
      message: 'API连接正常',
      data: response.data
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      error: error
    }
  }
}

// 获取应用信息
export const getAppInfo = async () => {
  try {
    const response = await apiClient.get(`/apps/${APP_ID}`)
    return response.data
  } catch (error) {
    console.error('获取应用信息失败:', error)
    return null
  }
}