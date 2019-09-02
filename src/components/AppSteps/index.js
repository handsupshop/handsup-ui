import AppSteps from './index.vue'

/* istanbul ignore next */
AppSteps.install = function (Vue) {
  Vue.component(AppSteps.name, AppSteps)
}

export default AppSteps
