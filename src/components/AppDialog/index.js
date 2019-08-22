import AppDialog from './index.vue'

/* istanbul ignore next */
AppDialog.install = function (Vue) {
  Vue.component(AppDialog.name, AppDialog)
}

export default AppDialog
