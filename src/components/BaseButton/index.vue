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

    // 純底色     >> fill
    // 純框線     >> outline
    // 有線＋底色  >> flat
    // 純文字     >> text
    pattern: {
      type: String,
      default: 'fill'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  name: 'BaseButton',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    exportClass () {
      switch (this.pattern) {
        // 有線＋底色
        case 'flat':
          if (this.color === 'basic') {
            return [
              'text-gray-900',
              'bg-gray-400',
              'border-gray-600'
            ]
          } else {
            return [
              `text-${this.color}-dark`,
              `bg-${this.color}-vr-light`,
              `border-${this.color}-light`
            ]
          }
        // 純框線
        case 'outline':
          if (this.color === 'basic') {
            return [
              'text-black',
              'bg-white',
              'border-gray-600'
            ]
          } else {
            return [
              'text-black',
              'bg-white',
              `border-${this.color}`
            ]
          }
        // 純文字
        case 'text':
          if (this.color === 'basic') {
            return [
              'text-black',
              'border-transparent'
            ]
          } else {
            return [
              `text-${this.color}-dark`,
              'border-transparent'
            ]
          }
        // 純底色
        default:
          if (this.color === 'basic') {
            return [
              'text-gray-900',
              'bg-gray-400',
              'border-gray-400'
            ]
          } else {
            return [
              'text-white',
              `bg-${this.color}`,
              `border-${this.color}`
            ]
          }
      }
    },
    exportSize () {
      // 純文字不加 padding、min-width
      if (this.pattern === 'text') {
        switch (this.size) {
          case 'sm':
            return ['text-xs']

          case 'lg':
            return ['text-base']

          default:
            return ['text-sm']
        }
      } else {
        switch (this.size) {
          case 'sm':
            return ['py-2', 'px-4', 'text-xs', 'leading-tight', 'min-w-sm']

          case 'lg':
            return ['py-3', 'px-4', 'text-base', 'leading-none', 'min-w-lg']

          default:
            return ['py-2', 'px-4', 'text-sm', 'leading-tight', 'min-w-md']
        }
      }
    },
    exportDisplay () {
      // 純文字不加 margin
      if (this.pattern === 'text') {
        return this.block ? ['block', 'w-full'] : ['inline-block']
      } else {
        return this.block ? ['block', 'w-full'] : ['inline-block', 'my-1', 'mr-1']
      }
    },
    exportHover () {
      let arry = []
      if (this.disabled || this.loading) {
        // disabled 樣式
        arry.push('disabled:opacity-50', 'disabled:cursor-not-allowed')
      } else {
        // 非 disabled 的才要加上 hover 樣式
        switch (this.pattern) {
          // 有線＋底色
          case 'flat':
            if (this.color === 'basic') {
              arry.push(
                'hover:text-gray-900',
                'hover:bg-primary-vr-light',
                'hover:border-primary-light'
              )
            } else {
              arry.push(
                'hover:text-white',
                `hover:bg-${this.color}`,
                `hover:border-${this.color}`
              )
            }
            break
          // 純框線
          case 'outline':
            if (this.color === 'basic') {
              arry.push(
                'hover:text-primary-dark',
                'hover:bg-primary-vr-light',
                'hover:border-primary-light'
              )
            } else {
              arry.push(
                `hover:text-${this.color}-dark`,
                `hover:bg-${this.color}-vr-light`,
                `hover:border-${this.color}-light`
              )
            }
            break
          // 純文字
          case 'text':
            if (this.color === 'basic') {
              arry.push('hover:text-gray-900')
            } else {
              arry.push(`hover:text-${this.color}-light`)
            }
            break
          // 純底色
          default:
            if (this.color === 'basic') {
              arry.push(
                'hover:text-white',
                'hover:bg-primary',
                'hover:border-primary'
              )
            } else {
              arry.push(
                'hover:text-white',
                `hover:bg-${this.color}-dark`,
                `hover:border-${this.color}-dark`
              )
            }
            break
        }
      }
      return arry
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
