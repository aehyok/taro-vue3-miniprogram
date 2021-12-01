export default {
  pages: [
    'pages/home/index',
    'pages/loveVillage/index',
    'pages/loveFamily/index',
    'pages/mine/index',
    'pages/test/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
        // 未点击时显示的图片
        // iconPath:"pages/images/btn_wawj.png",
        // 点击后显示的图片
        // selectedIconPath:"pages/images/btn_wawj.png"
      },
      {
        pagePath: 'pages/loveVillage/index',
        text: '我i村'
      },
      {
        pagePath: 'pages/loveFamily/index',
        text: '我i家'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
