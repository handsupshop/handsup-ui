import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Base Component
import BaseButton from '@/components/BaseButton/index.vue'
import BaseImage from '@/components/BaseImage/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseInputNumber from '@/components/BaseInputNumber/index.vue'
import BaseSelect from '@/components/BaseSelect/index.vue'
import BaseTextarea from '@/components/BaseTextarea/index.vue'
import BaseRadio from '@/components/BaseRadio/index.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup/index.vue'
import BaseCheckbox from '@/components/BaseCheckbox/index.vue'
import BaseCheckboxGroup from '@/components/BaseCheckboxGroup/index.vue'
// App Component
import AppDialog from '@/components/AppDialog/index.vue'
import AppAlert from '@/components/AppAlert/index.vue'
import AppSteps from '@/components/AppSteps/index.vue'
import AppSelectList from '@/components/AppSelectList/index.vue'
import AppSelectListItem from '@/components/AppSelectListItem/index.vue'

import Message from '@/components/Message/index.vue'

Vue.config.productionTip = false
Vue.component('BaseButton', BaseButton)
Vue.component('BaseImage', BaseImage)
Vue.component('BaseInput', BaseInput)
Vue.component('BaseInputNumber', BaseInputNumber)
Vue.component('BaseSelect', BaseSelect)
Vue.component('BaseTextarea', BaseTextarea)
Vue.component('BaseRadio', BaseRadio)
Vue.component('BaseRadioGroup', BaseRadioGroup)
Vue.component('BaseCheckbox', BaseCheckbox)
Vue.component('BaseCheckboxGroup', BaseCheckboxGroup)
Vue.component('AppDialog', AppDialog)
Vue.component('AppAlert', AppAlert)
Vue.component('Message', Message)
Vue.component('AppSteps', AppSteps)
Vue.component('AppSelectList', AppSelectList)
Vue.component('AppSelectListItem', AppSelectListItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
