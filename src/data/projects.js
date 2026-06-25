export const projects = [
  {
    title: 'ADS-B Aircraft Monitoring and Prediction System',
    description:
      "My Master's capstone project, a web application that allows users to monitor and predict aircraft movements using ADS-B data. Built with React, Node.js, and TypeScript. (link not available yet)",
    tags: ['React', 'Node.js', 'TypeScript', 'Machine Learning', 'Natural Language Processing', 'Artificial Intelligence'],
    link: 'https://github.com/kaiizzz/SkyView',
    live: null,
    featured: true,
  },
  {
    title: 'Flounder',
    description:
      'The social social media platform. Made for you to meet offline. Coming soon to the App Store and Google Play.',
    tags: [],
    link: 'https://flounder.it',
    live: null,
    featured: true,
  },
  {
    title: 'AI desktop assistant',
    description:
      'AI agent that can help you with your daily tasks and answer your questions.',
    tags: ['Python', 'Automation', 'AI', 'Natural Language Processing', 'Artificial Intelligence'],
    link: 'https://github.com/kaiizzz/Assistant_AI',
    live: null,
    featured: true,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)
