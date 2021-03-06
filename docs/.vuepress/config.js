// 导航
const nav = [
  {
    text: '指南',
    link: '/guide/',
  },
  {
    text: '更多',
    items: [
      {
        text: 'HTML',
        link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
      },
      {
        text: 'HTML 5',
        link: 'https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5',
      },
      {
        text: 'CSS',
        link: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
      },
      {
        text: 'JavaScript',
        link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
      },
    ],
  },
];

//侧边栏
const sidebar = {
  '/guide/': [
    {
      title: '指南',
      collapsable: false,
      children: [
        ['', '介绍'],
        'preparation',
        'dev',
        'struct',
        'component',
        'link',
      ],
    },
  ],
};

module.exports = {
  base: '/docs/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '文档',
      description: '开发文档',
    },
  },
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.png',
    smoothScroll: true,
    locales: {
      '/': {
        nav,
        sidebar,
        lastUpdated: '更新时间'
      },
    },
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).fromNow();
        },
      },
    ],
  ],
};
