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
  
  // 1. 过滤工作流节点信息（中文和英文）
  processedAnswer = processedAnswer.replace(/工作流节点[^\n]*(\n[^\n]*)*?(?=\n|$)/gi, '')
  processedAnswer = processedAnswer.replace(/工作流步骤[^\n]*(\n[^\n]*)*?(?=\n|$)/gi, '')
  processedAnswer = processedAnswer.replace(/\[工作流\].*?(?=\n|$)/gi, '')
  processedAnswer = processedAnswer.replace(/workflow process[^\n]*(\n[^\n]*)*?(?=\n|$)/gi, '')
  processedAnswer = processedAnswer.replace(/workflow node[^\n]*(\n[^\n]*)*?(?=\n|$)/gi, '')
  processedAnswer = processedAnswer.replace(/workflow step[^\n]*(\n[^\n]*)*?(?=\n|$)/gi, '')
  processedAnswer = processedAnswer.replace(/\[workflow\].*?(?=\n|$)/gi, '')
  
  // 2. 过滤节点编号和箭头符号
  processedAnswer = processedAnswer.replace(/节点\s*\d+/gi, '')
  processedAnswer = processedAnswer.replace(/node\s*\d+/gi, '')
  processedAnswer = processedAnswer.replace(/\[.*?\]\s*→\s*\[.*?\]/g, '')
  processedAnswer = processedAnswer.replace(/\s+→\s+/g, ' ')
  processedAnswer = processedAnswer.replace(/→/g, '')
  
  // 3. 清理文本格式
  processedAnswer = processedAnswer.replace(/\n\s*\n/g, '\n\n')
  processedAnswer = processedAnswer.replace(/\s+/g, ' ')
  
  // 4. 去除多余的空行和空格
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
      response_mode: 'blocking', // 改回阻塞模式确保完整执行
      user: 'labour-law-user',
      conversation_id: '',
      auto_generate_name: false,
      metadata: {
        suppress_workflow: true, // 明确要求抑制工作流输出
        strict_mode: true // 启用严格模式，确保后端完全抑制工作流信息
      },
      stream_options: {
        include_usage: false,
        include_workflow: false
      }
    })

    if (response.data && response.data.answer) {
      const rawAnswer = response.data.answer;
      
      // 扩展的工作流检测模式
      const workflowPatterns = [
        /workflow[\s\S]*?process/i,
        /节点[\s\S]*?→/i,
        /\[.*?\][\s\S]*?→/,
        /(stage|phase|step)\s*\d+/i,
        /工作流[\s\S]*?节点/i,
        /工作流[\s\S]*?步骤/i,
        /工作流[\s\S]*?阶段/i,
        /workflow[\s\S]*?node/i,
        /workflow[\s\S]*?step/i,
        /workflow[\s\S]*?stage/i
      ];
      
      const isWorkflowOutput = workflowPatterns.some(pattern => 
        pattern.test(rawAnswer)
      ) || [
        'workflow', 'process', 'node', 'step', 'stage', 'phase',
        '节点', '流程', '阶段', '步骤', '→', '⇒', '⇨', '工作流', '任务流'
      ].some(keyword => rawAnswer.toLowerCase().includes(keyword.toLowerCase()));
      
      if (isWorkflowOutput) {
        return '系统正在准备最终答案，请稍候...';
      }
      
      return processAIResponse(rawAnswer);
    } else {
      throw new Error('API返回数据格式错误: ' + JSON.stringify(response.data));
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