import Vue from 'vue'
import Router from 'vue-router'
import UiGuideline from './views/UiGuideline/index.vue'
import BaseInput from './views/BaseInput.vue'
import BaseCheckbox from './views/BaseCheckbox.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UiGuideline',
      component: UiGuideline
    },
    {
      path: '/base-input',
      name: 'baseInput',
      component: BaseInput
    },
    {
      path: '/base-checkbox',
      name: 'BaseCheckbox',
      component: BaseCheckbox
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ './views/About.vue')
    // },
    // {
    //   path: '/uiguideline',
    //   name: 'UiGuideline',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(
    //       /* webpackChunkName: "uiguideline" */ './views/UiGuideline/index.vue'
    //     )
    // }
  ]
})
