<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <div class="flex justify-between items-center mb-4">
          <div></div> <!-- 占位元素 -->
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900">智能法律咨询</h1>
          <button 
            @click="clearMessages" 
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2"
            title="清空聊天记录"
            v-if="messages.length > 0"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
            <span>清空记录</span>
          </button>
        </div>
        <p class="text-lg text-gray-600">请输入您的劳动法相关问题，AI助手将为您提供专业解答</p>
      </div>

      <!-- Chat Container -->
      <div class="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <!-- Messages Area -->
        <div ref="messagesContainer" class="h-96 overflow-y-auto p-6 space-y-4">
          <!-- Welcome Message -->
          <div v-if="messages.length === 0" class="text-center py-8">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">欢迎使用劳动法智能咨询</h3>
            <p class="text-gray-600">请在下方的输入框中输入您的问题，我将为您提供专业的法律解答。</p>
          </div>

          <!-- Messages -->
          <div v-for="(message, index) in messages" :key="index" 
               :class="['flex', message.role === 'user' ? 'justify-end' : 'justify-start', 'mb-4']">
            <div :class="[
              'max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl',
              message.role === 'user' 
                ? 'bg-primary-500 text-white rounded-br-none text-base' 
                : 'bg-gray-100 text-gray-900 rounded-bl-none text-xl font-semibold'
            ]">
              <div class="whitespace-pre-wrap leading-relaxed">{{ message.content }}</div>
            </div>
          </div>

          <!-- Loading Indicator -->
          <div v-if="isLoading" class="flex justify-start">
            <div class="bg-gray-100 text-gray-900 px-4 py-3 rounded-2xl rounded-bl-none max-w-xs md:max-w-md lg:max-w-lg">
              <div class="flex items-center space-x-2">
                <div class="flex space-x-1">
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                  <div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
                </div>
                <span class="text-sm">AI正在思考...</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Input Area -->
        <div class="border-t border-gray-200 p-4 bg-gray-50">
          <form @submit.prevent="sendMessage" class="flex space-x-4">
            <div class="flex-1">
              <textarea
                v-model="inputMessage"
                ref="messageInput"
                placeholder="请输入您的劳动法问题..."
                class="input-field resize-none"
                rows="2"
                :disabled="isLoading"
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="!inputMessage.trim() || isLoading"
              :class="[
                'btn-primary self-end px-6 py-3',
                (!inputMessage.trim() || isLoading) && 'opacity-50 cursor-not-allowed'
              ]"
            >
              <svg v-if="isLoading" class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              <span v-else>发送</span>
            </button>
          </form>
        </div>
      </div>

      <!-- Quick Questions -->
      <div class="mt-8">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">常见问题示例</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
          <button
            v-for="(question, index) in quickQuestions"
            :key="index"
            @click="setQuickQuestion(question)"
            class="text-left p-3 bg-white border border-gray-200 rounded-lg hover:border-primary-300 hover:shadow-sm transition-all duration-200 text-sm text-gray-700"
            :disabled="isLoading"
          >
            {{ question }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { sendChatMessage, processAIResponse } from '../services/api'

const messages = ref([])
const inputMessage = ref('')
const isLoading = ref(false)
const messagesContainer = ref(null)
const messageInput = ref(null)

const quickQuestions = [
  '劳动合同应该包含哪些内容？',
  '加班工资如何计算？',
  '试用期最长可以多久？',
  '被辞退可以获得哪些补偿？',
  '年假应该怎么休？',
  '工伤认定需要哪些材料？'
]



// 删除所有咨询记录
const clearMessages = () => {
  // 保留欢迎消息，只删除咨询记录
  if (messages.value.length > 0) {
    messages.value = [] // 清空所有消息
  }
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const setQuickQuestion = (question) => {
  inputMessage.value = question
  messageInput.value?.focus()
}

const sendMessage = async () => {
  if (!inputMessage.value.trim() || isLoading.value) return

  const userMessage = inputMessage.value.trim()
  inputMessage.value = ''
  
  // Add user message
  messages.value.push({
    role: 'user',
    content: userMessage
  })

  isLoading.value = true
  scrollToBottom()

  try {
    const response = await sendChatMessage(userMessage)
    // 处理AI回复内容
    const processedResponse = processAIResponse(response)
    
    // Add AI response
    messages.value.push({
      role: 'assistant',
      content: processedResponse
    })
  } catch (error) {
    console.error('发送消息失败:', error)
    messages.value.push({
      role: 'assistant',
      content: '抱歉，暂时无法处理您的请求。请稍后再试。'
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>