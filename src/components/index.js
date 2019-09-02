import AppAlert from './AppAlert/index.vue'
import AppDialog from './AppDialog/index.vue'
import BaseButton from './BaseButton/index.vue'
import BaseCheckbox from './BaseCheckbox/index.vue'
import BaseCheckboxGroup from './BaseCheckboxGroup/index.vue'
import BaseImage from './BaseImage/index.vue'
import BaseInput from './BaseInput/index.vue'
import BaseInputNumber from './BaseInputNumber/index.vue'
import BaseRadio from './BaseRadio/index.vue'
import BaseRadioGroup from './BaseRadioGroup/index.vue'
import BaseSelect from './BaseSelect/index.vue'
import BaseTextarea from './BaseTextarea/index.vue'
import Message from './Message/index.vue'
import AppSteps from './AppSteps/index.vue'

const Components = [
  AppAlert,
  AppDialog,
  BaseButton,
  BaseCheckbox,
  BaseCheckboxGroup,
  BaseImage,
  BaseInput,
  BaseInputNumber,
  BaseRadio,
  BaseRadioGroup,
  BaseSelect,
  BaseTextarea,
  Message,
  AppSteps
]

const install = function (Vue, opts = {}) {
  Components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 在 Local 引入時要直接使用元件
export default {
  install
}
