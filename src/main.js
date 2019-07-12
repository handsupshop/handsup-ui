import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Base Component
import BaseButton from '@/components/BaseButton/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseSelect from '@/components/BaseSelect/index.vue'
import BaseTextarea from '@/components/BaseTextarea/index.vue'
import BaseRadio from '@/components/BaseRadio/index.vue'
import BaseCheckbox from '@/components/BaseCheckbox/index.vue'
// App Component
import AppDialog from '@/components/AppDialog/index.vue'

Vue.config.productionTip = false
Vue.component('BaseButton', BaseButton)
Vue.component('BaseInput', BaseInput)
Vue.component('BaseSelect', BaseSelect)
Vue.component('BaseTextarea', BaseTextarea)
Vue.component('BaseRadio', BaseRadio)
Vue.component('BaseCheckbox', BaseCheckbox)
Vue.component('AppDialog', AppDialog)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
