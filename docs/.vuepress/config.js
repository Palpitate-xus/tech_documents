module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/blog/',
    themeConfig: {
      nav: [
          { text: '首页', link: '/' },
          { 
              text: 'Palpitate\'s Blog', 
              items: [
                  { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                  { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
              ]
          }
      ]
  }
  }