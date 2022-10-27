module.exports = {
    title: 'Palpitate\'s Blog',
    description: 'Just playing around',
    base: '/blog/',
    theme: 'reco',
    themeConfig: {
      subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    },
    themeConfig: {
      nav: [
          { text: '首页', link: '/' },
          { text: '笔记', link: '/notes/index' },
          { 
              text: 'Link', 
              items: [
                  { text: 'Github', link: 'https://github.com/Pola-ris' },
              ]
          }
      ]
  }
  }