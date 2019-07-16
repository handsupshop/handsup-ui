<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default: () => []
    },
    error: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: '填寫錯誤'
    }
  },
  name: 'baseRadioGroup',
  components: {},
  data () {
    return {
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
