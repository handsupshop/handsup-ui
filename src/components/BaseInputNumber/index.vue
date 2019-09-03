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
  name: 'BaseInputNumber',
  components: {},
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        let newVal = value === undefined ? value : Number(value)
        if (newVal >= this.max) newVal = this.max
        if (newVal <= this.min) newVal = this.min
        this.currentValue = newVal
        this.$emit('input', newVal)
      }
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
      if (this.currentValue >= this.max) return true
      return false
    },
    isMinDisabled () {
      if (this.currentValue <= this.min) return true
      return false
    }
  },
  methods: {
    stopClickPropagation () { },
    increase () {
      if (this.currentValue < this.max) {
        this.currentValue += 1
      } else {
        this.currentValue = this.max
      }
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    },
    decrease () {
      if (this.currentValue > this.min) {
        this.currentValue -= 1
      } else {
        this.currentValue = this.min
      }
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    },
    handleChange (e) {
      const oldValue = this.currentValue
      let newValue = e.target.value === '' ? undefined : Number(e.target.value)

      if (!isNaN(newValue) || newValue === '') {
        this.currentValue = newValue
      } else {
        this.currentValue = oldValue
      }
      if (newValue >= this.max) this.currentValue = this.max
      if (newValue <= this.min) this.currentValue = this.min

      e.target.value = this.currentValue
      this.$emit('input', this.currentValue)
      this.$emit('change', this.currentValue)
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
