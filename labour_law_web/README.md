# 劳动法智能咨询平台

专业的劳动法智能咨询平台，基于Vue 3 + Vite + Tailwind CSS构建，提供美观、流畅的AI法律咨询服务。

## 功能特性

- 🎯 **智能问答** - 基于AI技术的智能法律问答
- 🛡️ **专业可靠** - 基于最新法律法规，确保咨询准确性
- ⚡ **快速响应** - 7×24小时在线服务
- 📱 **响应式设计** - 完美适配各种设备
- 🎨 **精美界面** - 现代化设计，优秀用户体验

## 技术栈

- **前端框架**: Vue 3 + Composition API
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **路由管理**: Vue Router
- **状态管理**: Pinia
- **HTTP客户端**: Axios
- **图标库**: Heroicons

## 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env` 并配置您的API信息：

```bash
cp .env.example .env
```

编辑 `.env` 文件：

```env
# Dify API配置
VITE_API_URL=https://dify.aipfuture.com/v1
VITE_APP_ID=d6393d63-bfa1-4716-af18-6b5c0939c297
VITE_API_KEY=app-y5rIJA5AAq86u5H6mrcK6bBg

# 应用配置
VITE_APP_NAME=劳动法智能咨询平台
VITE_APP_DESCRIPTION=专业的AI法律助手
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

### 4. 构建生产版本

```bash
npm run build
```

## Vercel部署

### 环境变量配置

在Vercel平台配置以下环境变量：

- `VITE_API_URL`: https://dify.aipfuture.com/v1
- `VITE_APP_ID`: d6393d63-bfa1-4716-af18-6b5c0939c297
- `VITE_API_KEY`: app-y5rIJA5AAq86u5H6mrcK6bBg

### 部署步骤

1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 配置环境变量
4. 部署完成

## 项目结构

```
src/
├── components/          # 公共组件
│   ├── NavBar.vue      # 导航栏
│   └── Footer.vue     # 页脚
├── views/              # 页面组件
│   ├── Home.vue        # 首页
│   ├── Chat.vue        # 聊天页面
│   └── About.vue       # 关于页面
├── services/           # API服务
│   └── api.js         # API配置和请求
├── App.vue            # 根组件
├── main.js            # 入口文件
└── style.css          # 全局样式
```

## API配置

本项目使用Dify AI平台作为后端服务，支持以下功能：

- 智能对话
- 法律知识问答
- 实时响应

## 开发指南

### 添加新页面

1. 在 `src/views/` 目录下创建新的Vue组件
2. 在 `src/main.js` 中添加路由配置
3. 在导航栏中添加对应的链接

### 自定义样式

项目使用Tailwind CSS，您可以通过以下方式自定义样式：

1. 修改 `tailwind.config.js` 中的主题配置
2. 在 `src/style.css` 中添加自定义样式
3. 使用Tailwind的实用类进行样式调整

## 许可证

MIT License

## 联系方式

- 邮箱: support@labourlaw.com
- 电话: 400-123-4567