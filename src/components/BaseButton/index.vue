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
    block: {
      type: Boolean,
      default: false
    },

    // 有線＋底色 >> outline="flat"
    // 純框線     >> outline
    // 純底色     >> 都不用加
    outline: {
      type: [Boolean, String],
      default: false
    }
  },
  name: 'baseButton',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    exportClass () {
      switch (this.outline) {
        // 有線＋底色
        case 'flat':
          if (this.color !== 'basic') {
            return [
              `text-${this.color}-dark`,
              `bg-${this.color}-vr-light`,
              `border-${this.color}-light`,
              'hover:text-white',
              `hover:bg-${this.color}`,
              `hover:border-${this.color}`
            ]
          } else {
            return [
              'text-gray-900',
              'bg-gray-400',
              'border-gray-600',
              `hover:text-${this.color}`,
              'hover:bg-primary-vr-light',
              'hover:border-primary-light'
            ]
          }

        // 純框線
        case true:
          if (this.color === 'basic') {
            return [
              'text-black',
              'bg-white',
              'border-gray-600',
              'hover:text-white',
              'hover:bg-primary',
              'hover:border-primary'
            ]
          } else {
            return [
              'text-black',
              'bg-white',
              `border-${this.color}`,
              'hover:text-white',
              `hover:bg-${this.color}`,
              `hover:border-${this.color}`
            ]
          }

        // 純底色
        default:
          if (this.color !== 'basic') {
            return [
              'text-white',
              `bg-${this.color}`,
              `border-${this.color}`,
              'hover:text-white',
              `hover:bg-${this.color}-dark`,
              `hover:border-${this.color}-dark`
            ]
          } else {
            return [
              'text-gray-900',
              'bg-gray-400',
              'border-gray-400',
              'hover:text-white',
              'hover:bg-primary',
              'hover:border-primary'
            ]
          }
      }
    },
    exportSize () {
      if (this.size === 'sm') return ['py-1', 'px-2', 'text-xs']
      if (this.size === 'lg') return ['p-3', 'text-base']
      return ['py-2', 'px-3', 'text-sm']
    },
    exportDisplay () {
      if (this.block) return ['block', 'w-full']
      return ['inline-block', 'my-1', 'mr-1']
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
