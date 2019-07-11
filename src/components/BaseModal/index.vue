<script>
export default {
  props: {
    // 是否需要遮罩
    mask: {
      type: Boolean,
      default: true
    },
    // 是否可以點 modal 時關閉 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    // 是否顯示叉叉按鈕
    showClose: {
      type: Boolean,
      default: true
    },
    // 跳窗寬度
    size: {
      type: String,
      default: 'md'
    }
  },
  name: 'baseModal',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    exportSize () {
      return `baseModal-${this.size}`
    }
  },
  methods: {
    handleWrapperClick () {
      if (this.closeOnClickModal) this.handleClose()
    },
    handleClose () {
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
