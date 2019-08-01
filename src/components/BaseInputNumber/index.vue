<script>
export default {
  inheritAttrs: false,
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
    isError: {
      type: Boolean,
      default: false
    },
    errorMessage: {
      type: String,
      default: '填寫錯誤'
    },
    controlsPosition: {
      type: String,
      default: 'between'
    },
    value: {
      type: Number
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: Infinity
    }

  },
  name: 'baseInputNumber',
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
      if (this.size === 'sm') return ['py-1']
      if (this.size === 'lg') return ['py-3']
      return ['py-2']
    },
    exportTxtSize () {
      if (this.size === 'sm') return ['text-xs']
      if (this.size === 'lg') return ['text-base']
      return ['text-sm']
    },
    exportDisplay () {
      if (this.inline) return ['inline-block', 'my-1', 'mr-1']
      return ['block', 'w-full']
    },
    exportError () {
      if (this.isError) return 'text-black border-danger hover:border-danger focus:border-danger'
      return {}
    },
    exportControlsPosition () {
      if (this.controlsPosition === 'right') return 'baseInputNumber-right'
      return 'baseInputNumber-between'
    },
    isMaxDisabled () {
      if (this.value >= this.max) return true
      return false
    },
    isMinDisabled () {
      if (this.value <= this.min) return true
      return false
    }
  },
  methods: {
    increase () {
      if (this.value < this.max) {
        this.$emit('input', this.value + 1)
      } else {
        this.$emit('input', this.max)
      }
    },
    decrease () {
      if (this.value > this.min) {
        this.$emit('input', this.value - 1)
      } else {
        this.$emit('input', this.min)
      }
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
