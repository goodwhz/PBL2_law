<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 to-blue-700 text-white py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">关于我们</h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">
          专业的劳动法智能咨询平台，致力于为每一位劳动者提供准确、及时的法律咨询服务
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Mission -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">我们的使命</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              我们相信，每一位劳动者都应该了解自己的合法权益。通过AI技术，我们致力于让专业的法律咨询服务变得更加普及和便捷。
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              我们的平台基于最新的法律法规，结合人工智能技术，为您提供准确、可靠的法律解答，帮助您在工作生活中更好地维护自己的权益。
            </p>
          </div>

          <!-- Features -->
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">AI智能技术</h3>
                <p class="text-gray-600">基于先进的AI模型，提供准确的法律问题解答</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">专业可靠</h3>
                <p class="text-gray-600">基于最新法律法规，确保咨询内容的准确性和权威性</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">快速响应</h3>
                <p class="text-gray-600">7×24小时在线服务，随时随地获取专业法律建议</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">技术团队</h2>
          <p class="text-xl text-gray-600">由专业的技术和法律团队共同打造</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-24 h-24 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl font-bold text-white">AI</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">AI技术团队</h3>
            <p class="text-gray-600">负责AI模型的优化和对话系统的开发</p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl font-bold text-white">法</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">法律专家团队</h3>
            <p class="text-gray-600">负责法律知识的整理和内容审核</p>
          </div>

          <div class="text-center">
            <div class="w-24 h-24 bg-gradient-to-r from-primary-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span class="text-2xl font-bold text-white">技</span>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">前端开发团队</h3>
            <p class="text-gray-600">负责用户体验和界面设计</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">联系我们</h2>
        <p class="text-xl text-gray-600 mb-8">如有任何问题或建议，欢迎与我们联系</p>
        
        <div class="max-w-md mx-auto">
          <div class="grid grid-cols-1 gap-6 text-left">
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span class="text-gray-700">support@labourlaw.com</span>
            </div>
            
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span class="text-gray-700">400-123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// About page logic
</script>