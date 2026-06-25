export const projects = [
  {
    title: {
      en: 'ADS-B Aircraft Monitoring and Prediction System',
      zh: 'ADS-B 飞机监控与预测系统',
    },
    description: {
      en: "My Master's capstone project, a web application that allows users to monitor and predict aircraft movements using ADS-B data. Built with React, Node.js, and TypeScript. Won 2025 Best in Field award at the University of Melbourne Endeavour Exhibition (link not available yet)",
      zh: '硕士毕业设计项目：基于 ADS-B 数据的飞机监控与轨迹预测 Web 应用，使用 React、Node.js 与 TypeScript 构建。荣获 2025 年墨尔本大学 Endeavour 展览 Best in Field 奖（链接暂未公开）。',
    },
    tags: ['React', 'Node.js', 'TypeScript', 'Machine Learning', 'Natural Language Processing', 'Artificial Intelligence'],
    link: 'https://github.com/kaiizzz/SkyView',
    live: null,
    featured: true,
  },
  {
    title: {
      en: 'Flounder',
      zh: 'Flounder',
    },
    description: {
      en: 'The social social media platform. Made for you to meet offline. Coming soon to the App Store and Google Play.',
      zh: '真正的社交社交平台，为线下相遇而设计。即将登陆 App Store 与 Google Play。',
    },
    tags: [],
    link: 'https://flounder.it',
    live: null,
    featured: true,
  },
  {
    title: {
      en: 'AI desktop assistant',
      zh: 'AI 桌面助手',
    },
    description: {
      en: 'AI agent that can help you with your daily tasks and answer your questions.',
      zh: '可协助日常事务、回答问题的 AI 智能助手。',
    },
    tags: ['Python', 'Automation', 'AI', 'Natural Language Processing', 'Artificial Intelligence'],
    link: 'https://github.com/kaiizzz/Assistant_AI',
    live: null,
    featured: true,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
