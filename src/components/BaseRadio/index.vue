<script>
export default {
  // props: ['name', 'label', 'value', 'block'],
  props: {
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },
  name: 'BaseRadio',
  components: {},
  data () {
    return {
    }
  },
  computed: {
    picked: {
      get: function () {
        return this.value
      },
      set: function () {
        this.$emit('change', this.value)
        // this.$emit('change', this.label)
      }
    },
    exportDisabled () {
      if (this.disabled) return ['opacity-50', 'cursor-not-allowed']
      return {}
    },
    exportDisplay () {
      if (this.block) return ['block', 'my-1']
      return ['inline-block', 'mr-4', 'mb-1']
    }
  }

}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
