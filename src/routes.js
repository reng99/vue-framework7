export default [
  {
      path: '/message/',
      component: require('./pages/message.vue')
  },
  {
      path: '/trade_union/',
      component: require('./pages/trade_union.vue')
  },
 {
      path: '/game/',
      component: require('./pages/game.vue')
  },
  {
      path: '/televise_live/',
      component: require('./pages/televise_live.vue')
  },
  {
      path: '/profile/',
      component: require('./pages/profile.vue')
  },
  {
      path: '/profile/diamond/',//红钻
      component: require('./pages/profile/red_diamond.vue')
  },
  {
      path:"/diamond/record/",//红钻的兑换记录页面
      component:require("./pages/profile/diamond/exchange-record-page.vue")
  }
//   {
//       path: '/dynamic-route/blog/:blogId/post/:postId/',
//       component: require('./pages/dynamic-route.vue')
//   }
]