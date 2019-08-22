import BaseSelect from './index.vue'

/* istanbul ignore next */
BaseSelect.install = function (Vue) {
  Vue.component(BaseSelect.name, BaseSelect)
}

export default BaseSelect
