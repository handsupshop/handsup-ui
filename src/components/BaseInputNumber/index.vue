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
      currentValue: this.value
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
    },
    decrease () {
      if (this.currentValue > this.min) {
        this.currentValue -= 1
        // this.$emit('input', this.currentValue - 1)
      } else {
        this.currentValue = this.min
        // this.$emit('input', this.min)
      }
      this.$emit('input', this.currentValue)
    },
    handleChange (e) {
      // console.log(e)
      const oldValue = this.currentValue
      let newValue = e.target.value === '' ? undefined : Number(e.target.value)
      console.log('target before change: ' + e.target.value)
      console.log('oldValue: ' + oldValue)
      console.log('newValue: ' + newValue)

      if (!isNaN(newValue) || newValue === '') {
        this.currentValue = newValue
        // this.$emit('input', newValue)
      } else {
        this.currentValue = oldValue
        console.log('else')
        // this.currentValue = 0
        // this.$emit('input', 0)
      }
      e.target.value = this.currentValue
      this.$emit('input', this.currentValue)
      // this.$emit('change', newValue, oldValue)
      console.log('currentValue: ' + this.currentValue)
      console.log('this.value: ' + this.value)
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
