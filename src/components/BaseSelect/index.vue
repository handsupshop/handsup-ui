<script>
export default {
  props: {
    color: {
      type: String,
      default: 'basic'
    },
    size: {
      type: String,
      default: 'md'
    },
    inline: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: '填寫錯誤'
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  name: 'BaseSelect',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    exportClass () {
      if (this.color === 'basic') {
        return [
          'border-gray-600',
          'hover:border-gray-700',
          'focus:border-primary',
          'disabled:bg-gray-100',
          'disabled:border-gray-600',
          'disabled:text-gray-700']
      } else {
        return [
          // `text-${this.color}`,
          `border-${this.color}`,
          'disabled:bg-gray-200',
          'disabled:opacity-50']
      }
    },
    exportSize () {
      if (this.size === 'sm') return ['py-1', 'text-xs']
      if (this.size === 'lg') return ['p-3', 'text-base']
      return ['py-2', 'text-sm']
    },
    exportDisplay () {
      if (this.inline) return ['inline-block', 'my-1', 'mr-1']
      return ['block']
    },
    exportDisabled () {
      if (this.disabled) return 'disabled'
      return false
    },
    exportError () {
      if (this.isError) return 'text-black border-danger hover:border-danger focus:border-danger'
      return {}
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
