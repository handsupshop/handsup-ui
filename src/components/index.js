import AppDialog from './AppDialog/index.js'
import BaseButton from './BaseButton/index.js'
import BaseCheckbox from './BaseCheckbox/index.js'
import BaseCheckboxGroup from './BaseCheckboxGroup/index.js'
import BaseImage from './BaseImage/index.js'
import BaseInput from './BaseInput/index.js'
import BaseInputNumber from './BaseInputNumber/index.js'
import BaseRadio from './BaseRadio/index.js'
import BaseRadioGroup from './BaseRadioGroup/index.js'
import BaseSelect from './BaseSelect/index.js'
import BaseTextarea from './BaseTextarea/index.js'
import Message from './Message/index.js'

const Components = [
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
  Message
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
  install,
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
  Message
}
