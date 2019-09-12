<script>
import { styleMapping } from './style'

export default {
  name: 'BaseCheckboxGroup',
  componentName: 'BaseCheckboxGroup',
  inheritAttrs: false,
  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    isError: {
      type: Boolean,
      default: false
    },
    errorMsg: {
      type: String,
      default: '填寫錯誤'
    }
  },
  methods: {
    getStyle (item) {
      return styleMapping[item]
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
