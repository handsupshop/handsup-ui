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
      type: Boolean
    },
    outline: {
      type: Boolean
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
      if (!this.outline) {
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
            'text-gray-600',
            'bg-gray-200',
            'border-gray-200',
            'hover:text-white',
            'hover:bg-primary',
            'hover:border-primary'
          ]
        }
      } else {
        if (this.color === 'basic') {
          return [
            'text-gray-700',
            'bg-white',
            'border-gray-300',
            'hover:text-white',
            'hover:bg-primary',
            'hover:border-primary'
          ]
        } else {
          return [
            'text-gray-700',
            'bg-white',
            `border-${this.color}`,
            'hover:text-white',
            `hover:bg-${this.color}`,
            `hover:border-${this.color}`
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
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
