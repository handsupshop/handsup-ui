<script>
import DialogSm from './DialogSm/index.vue'
import DialogMd from './DialogMd/index.vue'
import DialogLg from './DialogLg/index.vue'
import DialogClear from './DialogClear/index.vue'
import DialogLong from './DialogLong/index.vue'
import DialogHiddenMask from './DialogHiddenMask/index.vue'
import DialogNotAllowClickModal from './DialogNotAllowClickModal/index.vue'
import DialogHiddenClose from './DialogHiddenClose/index.vue'

export default {
  skipMiddleware: ['getAuth', 'checkAuth'],
  name: 'uiGuideline',
  components: {
    DialogSm,
    DialogMd,
    DialogLg,
    DialogClear,
    DialogLong,
    DialogHiddenMask,
    DialogNotAllowClickModal,
    DialogHiddenClose
  },
  data () {
    return {
      selectOptionTemp: [
        { label: '請選擇', value: '' }
      ],
      selectOptions: [
        { label: 111, value: 'AAA' },
        { label: 222, value: 'BBB' },
        { label: 333, value: 'CCC' },
        { label: 444, value: 'DDD' }
      ],
      radioOptions: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
        { label: '不明', value: 'unknow', disabled: true }
      ],
      checkboxOptions: [
        { label: '男', value: 'male' },
        { label: '女', value: 'female' },
        { label: '不明', value: 'unknow', disabled: true }
      ],
      SampleDialogVisibleSM: false,
      SampleDialogVisibleMD: false,
      SampleDialogVisibleLG: false,
      SampleDialogVisibleClear: false,
      SampleDialogVisibleLong: false,
      SampleDialogVisibleMask: false,
      SampleDialogVisibleModal: false,
      SampleDialogVisibleClose: false,
      alertError: false
    }
  },
  methods: {
    handleSelectChange (e) {
      console.log(e)
    },
    changeGender (e) {
    },
    changeValue (e) {
    },
    changeCheckbox (e) {
    },
    // sampleModal () {
    //   this.$refs.toggle(true)
    //   // this.deleteShippingItem = item
    //   // this.$refs.confirmDelete.toggle(true)
    // }
    testClick (e) {
      console.log('click')
    },
    testHover () {
      console.log('hover')
    },
    toggleError () {
      this.alertError = !this.alertError
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
