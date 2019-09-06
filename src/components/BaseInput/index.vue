<script>
const basicClass = []

const error = ['text-black', 'border-danger', 'hover:border-danger', 'focus:border-danger']
const sizeSm = ['py-2', 'text-xs', 'h-8']
const sizeMd = ['py-2', 'text-sm', 'h-9']
const sizeLg = ['p-3', 'text-base', 'h-10']

const displayInline = ['inline-block', 'my-1', 'mr-1']
const displayBlock = ['block', 'w-full']

export default {
  name: 'BaseInput',
  inheritAttrs: false,
  props: {
    value: [String, Number],
    disabled: Boolean,
    color: {
      type: String,
      default: 'basic'
    },
    size: {
      type: String,
      default: ''
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
    },
    showWordLimit: {
      type: Boolean,
      default: false
    }
  },

  mounted () {
    if (this.showWordLimit) {
      this.calcCountPadding()
    }
  },

  updated () {
    if (this.showWordLimit) {
      this.$nextTick(this.calcCountPadding)
    }
  },

  computed: {
    exportInputClass () {
      return [
        ...(this.color === 'basic' ? basicClass : [`border-${this.color}`,
          'disabled:bg-gray-200',
          'disabled:opacity-50']),
        ...(this.inline ? displayInline : displayBlock),
        ...this.computedSize,
        ...(this.isError ? error : '')
      ]
    },
    computedSize () {
      if (this.size === 'sm') return sizeSm
      if (this.size === 'lg') return sizeLg
      return sizeMd
    },
    exportClass () {
      if (this.inline) return ['inline-block', 'my-1', 'mr-1']
      return ['block', 'w-full']
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
    },
    upperLimit () {
      console.log(this.$attrs)

      return this.$attrs.maxlength
    },
    textLength () {
      if (typeof this.value === 'number') {
        return String(this.value).length
      }

      return (this.value || '').length
    },
    inputExceed () {
      // show exceed style if length of initial value greater then maxlength
      return this.showWordLimit &&
          (this.textLength > this.upperLimit)
    },
    inputDisabled () {
      return this.disabled
    }
  },
  methods: {
    handleInput (event) {
      this.$emit('input', event.target.value)
      console.log(event.target.value)
      console.log('input value', this.$refs.input.value)
      console.log('props value', this.value)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    },
    calcCountPadding () {
      this.$refs.input.style.paddingRight = (this.$refs.inputCount.clientWidth + 8) + 'px'
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
