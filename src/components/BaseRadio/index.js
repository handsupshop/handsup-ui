import BaseRadio from './index.vue'

/* istanbul ignore next */
BaseRadio.install = function (Vue) {
  Vue.component(BaseRadio.name, BaseRadio)
}

export default BaseRadio
