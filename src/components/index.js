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

// Vue 安裝 Plugin 時 ( Vue.use ) 會叫用 install 函式，在此時註冊元件
// export function install (Vue) {
//   if (install.installed) return
//   install.installed = true

//   Components.forEach(component => {
//     Vue.component(component.name, component)
//   })
// }

const install = function (Vue, opts = {}) {
  Components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 建立 Plugin 物件
const plugin = {
  install
}

// 如果使用全域 Vue 物件 (例如 <script> 載入) 時直接使用 Plugin
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

// 在 Local 引入時要直接使用元件
export default {
  install
}
