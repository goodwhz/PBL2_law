<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary-600 via-blue-600 to-indigo-700 text-white py-20">
      <div class="absolute inset-0 bg-black bg-opacity-20"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          劳动法智能咨询平台
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in" style="animation-delay: 0.2s">
          专业的AI法律助手，为您提供准确、及时的劳动法咨询服务
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style="animation-delay: 0.4s">
          <router-link to="/chat" class="btn-primary text-lg px-8 py-4">
            开始咨询
          </router-link>
          <button class="btn-secondary bg-white bg-opacity-20 hover:bg-opacity-30 text-white text-lg px-8 py-4">
            了解更多
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">核心功能</h2>
          <p class="text-xl text-gray-600">我们为您提供全方位的劳动法咨询服务</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card text-center animate-slide-up">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">智能问答</h3>
            <p class="text-gray-600">基于AI技术的智能法律问答，快速解答您的劳动法疑问</p>
          </div>

          <div class="card text-center animate-slide-up" style="animation-delay: 0.1s">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">专业可靠</h3>
            <p class="text-gray-600">基于最新法律法规，确保咨询内容的准确性和权威性</p>
          </div>

          <div class="card text-center animate-slide-up" style="animation-delay: 0.2s">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">快速响应</h3>
            <p class="text-gray-600">7×24小时在线服务，随时随地获取专业法律建议</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary-500 to-blue-600 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">立即开始您的法律咨询</h2>
        <p class="text-xl mb-8 text-blue-100">保护您的合法权益，从专业咨询开始</p>
        <router-link to="/chat" class="btn-primary bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4">
          免费咨询
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page logic
</script>