<script>
import { styleMapping } from './style'

export default {
  name: 'BaseInput',
  inheritAttrs: false,

  data () {
    return {
      hovering: false,
      focused: false,
      isComposing: false
    }
  },

  props: {
    value: [String, Number],
    size: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    showWordLimit: {
      type: Boolean,
      default: false
    },
    tabindex: String,
    isError: {
      type: Boolean,
      default: false
    },
    errorMsg: String
  },

  computed: {
    inputSize () {
      return this.size
    },
    inputDisabled () {
      return this.disabled || (this.elForm || {}).disabled
    },
    nativeInputValue () {
      return this.value === null || this.value === undefined ? '' : String(this.value)
    },
    isWordLimitVisible () {
      return this.showWordLimit &&
          this.$attrs.maxlength &&
          (this.type === 'text' || this.type === 'textarea') &&
          !this.inputDisabled
    },
    upperLimit () {
      return Number(this.$attrs.maxlength)
    },
    textLength () {
      if (typeof this.value === 'number') {
        return String(this.value).length
      }

      return (this.value || '').length
    },
    inputExceed () {
      // show exceed style if length of initial value greater then maxlength
      return this.isWordLimitVisible && (this.textLength > this.upperLimit)
    },
    inputFulled () {
      return this.isWordLimitVisible && (this.textLength === this.upperLimit)
    },
    hasPrefix () {
      return !!(this.$slots.prefix || this.prefixIcon)
    }
  },

  watch: {
    // native input value is set explicitly
    // do not use v-model / :value in template
    // see: https://github.com/ElemeFE/element/issues/14521
    nativeInputValue () {
      this.setNativeInputValue()
    },
    // when change between <input> and <textarea>,
    // update DOM dependent value and styles
    // https://github.com/ElemeFE/element/issues/14857
    type () {
      this.$nextTick(() => {
        this.setNativeInputValue()
      })
    }
  },

  methods: {
    getStyle (item) {
      return styleMapping[item]
    },
    focus () {
      this.getInput().focus()
    },
    blur () {
      this.getInput().blur()
    },
    handleBlur (event) {
      this.focused = false
      this.$emit('blur', event)
    },
    select () {
      this.getInput().select()
    },
    setNativeInputValue () {
      const input = this.getInput()
      if (!input) return
      if (input.value === this.nativeInputValue) return
      input.value = this.nativeInputValue
    },
    handleFocus (event) {
      this.focused = true
      this.$emit('focus', event)
    },
    handleCompositionStart () {
      this.isComposing = true
    },
    handleCompositionEnd (event) {
      this.isComposing = false
      this.handleInput(event)
    },
    handleInput (event) {
      // should not emit input during composition
      // see: https://github.com/ElemeFE/element/issues/10516
      if (this.isComposing) return

      // hack for https://github.com/ElemeFE/element/issues/8548
      // should remove the following line when we don't support IE
      if (event.target.value === this.nativeInputValue) return

      this.$emit('input', event.target.value)

      // ensure native input value is controlled
      // see: https://github.com/ElemeFE/element/issues/12850
      this.$nextTick(this.setNativeInputValue)
    },
    handleChange (event) {
      this.$emit('change', event.target.value)
    },
    getInput () {
      return this.$refs.input || this.$refs.textarea
    },
    getSuffixVisible () {
      return this.$slots.suffix ||
          this.suffixIcon ||
          this.showClear ||
          this.isWordLimitVisible ||
          (this.validateState && this.needStatusIcon)
    },
    calcCountPadding () {
      const input = this.type !== 'textarea' ? this.$refs.textarea : this.$refs.input
      input.style.paddingRight = (this.$refs.inputCount.clientWidth + 8 + 16) + 'px'
    }
  },

  created () {
    this.$on('inputSelect', this.select)
  },

  mounted () {
    this.setNativeInputValue()
    if (this.showWordLimit) {
      this.calcCountPadding()
    }
  },

  updated () {
    if (this.showWordLimit) {
      this.calcCountPadding()
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
