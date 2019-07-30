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
    error: {
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
      if (this.size === 'sm') return ['py-1', 'text-xs']
      if (this.size === 'lg') return ['py-3', 'text-base']
      return ['py-2', 'text-sm']
    },
    exportDisplay () {
      if (this.inline) return ['inline-block', 'my-1', 'mr-1']
      return ['block', 'w-full']
    },
    exportError () {
      if (this.error) return 'text-black border-danger hover:border-danger focus:border-danger'
      return {}
    },
    exportControlsPosition () {
      if (this.controlsPosition === 'right') return 'baseInputNumber-right'
      return 'baseInputNumber-between'
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
