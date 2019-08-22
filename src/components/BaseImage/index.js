import BaseImage from './index.vue'

/* istanbul ignore next */
BaseImage.install = function (Vue) {
  Vue.component(BaseImage.name, BaseImage)
}

export default BaseImage
