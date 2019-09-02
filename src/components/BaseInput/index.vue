<script>
export default {
  inheritAttrs: false,
  name: 'BaseInput',
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
    iconClass: {
      type: [String, Boolean],
      default: ''
    },
    iconPosition: {
      type: String,
      default: 'left'
    }
  },

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
      return ['block', 'w-full']
    },
    exportError () {
      if (this.isError) return 'text-black border-danger hover:border-danger focus:border-danger'
      return ''
    },
    exportIcon () {
      if (this.iconPosition === 'right') return 'right-0'
      return 'left-0'
    },
    exportPadding () {
      if (this.iconClass === '') {
        return 'px-3'
      } else {
        if (this.iconPosition === 'right') return 'pl-3 pr-10'
        return 'pl-10 pr-3'
      }
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
