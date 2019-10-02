<script>
export default {
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  name: 'appIntroduce',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    computedClass () {
      let newClass = `bg-${this.type}-vr-light border-${this.type}`
      if (this.type !== 'danger') return newClass + ` text-gray-900`
      return newClass + ` text-${this.type}`
    },
    computedIconClass () {
      return `text-${this.type}`
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
