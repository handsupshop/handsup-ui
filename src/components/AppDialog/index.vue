<script>
export default {
  props: {
    // 標題
    title: {
      type: String,
      default: ''
    },
    // 是否需要遮罩
    mask: {
      type: Boolean,
      default: true
    },
    // 是否可以點 modal 時關閉 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: false
    },
    // 是否顯示叉叉按鈕
    showClose: {
      type: Boolean,
      default: true
    },
    // 跳窗寬度 (sm/md/lg)
    size: {
      type: String,
      default: 'md'
    },
    dialogVisible: {
      type: Boolean,
      default: true
    }
  },
  name: 'appDialog',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    exportSize () {
      return `appDialog-${this.size}`
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
