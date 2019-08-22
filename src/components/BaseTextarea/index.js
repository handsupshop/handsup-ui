import BaseTextarea from './index.vue'

/* istanbul ignore next */
BaseTextarea.install = function (Vue) {
  Vue.component(BaseTextarea.name, BaseTextarea)
}

export default BaseTextarea
