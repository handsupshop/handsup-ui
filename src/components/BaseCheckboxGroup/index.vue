<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      default: () => []
    },
    isError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: '填寫錯誤'
    }
  },
  name: 'BaseCheckboxGroup',
  components: {},
  data () {
    return {
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
