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
              `border-${this.color}-light`
            ]
          } else {
            return [
              'text-gray-900',
              'bg-gray-400',
              'border-gray-600'
            ]
          }
          break

        // 純框線
        case true:
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
          break

        // 純底色
        default:
          if (this.color !== 'basic') {
            return [
              'text-white',
              `bg-${this.color}`,
              `border-${this.color}`
            ]
          } else {
            return [
              'text-gray-900',
              'bg-gray-400',
              'border-gray-400'
            ]
          }
          break
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
    },
    exportHover () {
      let arry = []
      if (this.disabled || this.loading) {
        // disabled 樣式
        arry.push('disabled:opacity-50', 'disabled:cursor-not-allowed')
      }else{
        // 非 disabled 的才要加上 hover 樣式
        switch (this.outline) {
          // 有線＋底色
          case 'flat':
            if (this.color !== 'basic') {
              arry.push(
                'hover:text-white',
                `hover:bg-${this.color}`,
                `hover:border-${this.color}`
              )
            } else {
              arry.push(
                'hover:text-gray-900',
                'hover:bg-primary-vr-light',
                'hover:border-primary-light'
              )
            }
          break

          // 純框線
          case true:
            if (this.color === 'basic') {
              arry.push('hover:border-primary')
            } else {
              arry.push(
                'hover:text-white',
                `hover:bg-${this.color}`,
                `hover:border-${this.color}`
              )
            }
          break

          // 純底色
          default:
            if (this.color !== 'basic') {
              arry.push(
                'hover:text-white',
                `hover:bg-${this.color}-dark`,
                `hover:border-${this.color}-dark`
              )
            } else {
              arry.push(
                'hover:text-white',
                'hover:bg-primary',
                'hover:border-primary'
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
