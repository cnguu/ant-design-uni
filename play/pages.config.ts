import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  easycom: {
    autoscan: false,
  },
  globalStyle: {
    'navigationStyle': 'custom',
    'navigationBarTextStyle': 'black',
    'enablePullDownRefresh': false,
    'app-plus': {
      bounce: 'none',
    },
  },
  tabBar: {
    list: [
      {
        visible: false,
        pagePath: 'page/home/index-page',
        text: '首页',
      },
    ],
  },
})
