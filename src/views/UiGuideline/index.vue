<script>
import DialogSm from './DialogSm/index.vue'

export default {
  skipMiddleware: ['getAuth', 'checkAuth'],
  name: 'uiGuideline',
  components: {
    DialogSm
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
      SampleDialogVisibleSM: false,
      SampleDialogVisibleMD: false,
      SampleDialogVisibleLG: false,
      SampleDialogVisibleClear: false,
      SampleDialogVisibleLong: false,
      SampleDialogVisibleMask: false,
      SampleDialogVisibleModal: false,
      SampleDialogVisibleClose: false
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
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
