export const copy = {
  en: {
    site: {
      title: 'Kailiang Zhu',
      name: 'Kailiang (Bill) Zhu',
      tagline: {
        line1: { prefix: 'Co-founder of  ', company: '  Floundery', suffix: '' },
        line2: 'I do software stuff.',
      },
      bio: [
        "Hi, I'm Kailiang (Bill) Zhu — I'm a software engineer who loves crafting clean user interfaces and solving interesting problems. This is where I share my work and what I'm learning along the way.",
        "I'm also the co-founder of Floundery PTY LTD., a software company that specialises in genuine human connections outside of software.",
        'Currently pursuing a PhD.',
      ],
      location: 'Melbourne, Australia',
    },
    nav: [
      { label: 'Home', to: '/#hero' },
      { label: 'About', to: '/#about' },
      { label: 'Work', to: '/#portfolio' },
      { label: 'Education', to: '/education' },
      { label: 'Contact', to: '/#contact' },
    ],
    hero: {
      eyebrow: 'Portfolio',
      greeting: "Hi, I'm",
      viewWork: 'View my work',
      getInTouch: 'Get in touch',
      scroll: 'Scroll',
    },
    about: {
      label: 'About',
      title: 'A bit about me',
      technologies: 'Technologies',
      photoAlt: 'Portrait of Kailiang (Bill) Zhu',
    },
    portfolio: {
      label: 'Work',
      title: 'Selected projects',
      viewAll: 'View all',
    },
    contact: {
      label: 'Contact',
      title: "Let's connect",
      text: "Have a project in mind or just want to say hi? I'd love to hear from you.",
      email: 'Email',
    },
    educationPage: {
      back: 'Back home',
      label: 'Education',
      title: "Where I've studied",
      intro:
        'My academic background and the institutions that shaped how I think about software and research.',
    },
    projectsPage: {
      back: 'Back home',
      label: 'Work',
      title: 'All projects',
      intro: "Everything I've built — from research tools and apps to experiments along the way.",
    },
    projectCard: {
      liveDemo: 'Live demo',
    },
    footer: {
      builtWith: 'Built with React & Vite. Partly hallucinated by ChatGPT.',
    },
    themeToggle: {
      ariaLabel: 'Switch to vermillion theme and Chinese',
      hint: '中文',
    },
    menu: {
      open: 'Open menu',
      close: 'Close menu',
    },
  },
  zh: {
    site: {
      title: '朱锴亮',
      name: '朱锴亮（Bill）',
      tagline: {
        line1: { prefix: '', company: '  Floundery', suffix: ' 联合创始人' },
        line2: '我做软件相关的事。',
      },
      bio: [
        '你好，我是朱锴亮（Bill）—— 一名热爱打造简洁界面、解决有趣问题的软件工程师。这里分享我的作品与学习心得。',
        '我也是 Floundery PTY LTD. 的联合创始人，一家专注于软件之外真诚人际连接的软件公司。',
        '目前正在攻读博士学位。',
      ],
      location: '墨尔本，澳大利亚',
    },
    nav: [
      { label: '首页', to: '/#hero' },
      { label: '关于', to: '/#about' },
      { label: '作品', to: '/#portfolio' },
      { label: '教育', to: '/education' },
      { label: '联系', to: '/#contact' },
    ],
    hero: {
      eyebrow: '作品集',
      greeting: '你好，我是',
      viewWork: '查看作品',
      getInTouch: '联系我',
      scroll: '下滑',
    },
    about: {
      label: '关于',
      title: '关于我',
      technologies: '技术栈',
      photoAlt: '朱锴亮肖像照',
    },
    portfolio: {
      label: '作品',
      title: '精选项目',
      viewAll: '查看全部',
    },
    contact: {
      label: '联系',
      title: '保持联系',
      text: '有项目想法，或只是想打个招呼？欢迎联系我。',
      email: '邮箱',
    },
    educationPage: {
      back: '返回首页',
      label: '教育',
      title: '求学经历',
      intro: '我的学术背景，以及塑造我软件与研究思维的教育经历。',
    },
    projectsPage: {
      back: '返回首页',
      label: '作品',
      title: '全部项目',
      intro: '从研究工具、应用到一路上的实验——这里是我做过的全部项目。',
    },
    projectCard: {
      liveDemo: '在线演示',
    },
    footer: {
      builtWith: '使用 React 与 Vite 构建。部分内容由 ChatGPT 协助完成。',
    },
    themeToggle: {
      ariaLabel: '切换至墨色主题与英文',
      hint: 'EN',
    },
    menu: {
      open: '打开菜单',
      close: '关闭菜单',
    },
  },
}

export function localeForTheme(theme) {
  return theme === 'zhu' ? 'zh' : 'en'
}

export function pickLocalized(value, locale) {
  if (value == null) return ''
  if (typeof value === 'string') return value
  return value[locale] ?? value.en ?? ''
}
