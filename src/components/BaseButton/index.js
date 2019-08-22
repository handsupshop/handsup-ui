import BaseButton from './index.vue'

/* istanbul ignore next */
BaseButton.install = function (Vue) {
  Vue.component(BaseButton.name, BaseButton)
}

export default BaseButton
