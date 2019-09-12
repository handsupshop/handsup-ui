<script>
import { styleMapping } from './style'
import Emitter from '@/mixins/emitter'

export default {
  name: 'BaseCheckbox',

  mixins: [Emitter],

  props: {
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    button: Boolean,
    name: String,
    flexWidth: String
  },

  data () {
    return {
      selfModel: false,
      checkboxGroup: null,
      hover: false,
      isLimitExceeded: false
    }
  },

  computed: {
    model: {
      get () {
        return this.isGroup
          ? this.store : this.value !== undefined
            ? this.value : this.selfModel
      },
      set (val) {
        if (this.isGroup) {
          this.isLimitExceeded = false

          if (this.checkboxGroup.min !== undefined &&
            val.length < this.checkboxGroup.min) {
            this.isLimitExceeded = true
          }

          if (this.checkboxGroup.max !== undefined &&
              val.length > this.checkboxGroup.max) {
            this.isLimitExceeded = true
          }
          this.isLimitExceeded === false && this.dispatch('BaseCheckboxGroup', 'input', [val])
        } else {
          this.$emit('input', val)
          this.selfModel = val
        }
      }
    },

    isChecked () {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.label
      }
      return false
    },

    isGroup () {
      let parent = this.$parent
      while (parent) {
        if (parent.$options.name !== 'BaseCheckboxGroup') {
          parent = parent.$parent
        } else {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.checkboxGroup = parent
          return true
        }
      }
      return false
    },

    isLimitDisabled () {
      const { max, min } = this.checkboxGroup
      return !!(max || min) && ((this.model.length >= max && !this.isChecked) || (this.model.length <= min && this.isChecked))
    },

    isDisabled () {
      return this.isGroup
        ? this.checkboxGroup.disabled || this.disabled || this.isLimitDisabled
        : this.disabled
    },

    store () {
      return this.checkboxGroup ? this.checkboxGroup.value : this.value
    },
    computedWidth () {
      return { 'flex': this.flexWidth, 'max-width': this.flexWidth }
    }
  },

  methods: {
    getStyle (item) {
      return styleMapping[item]
    },
    addToStore () {
      if (
        Array.isArray(this.model) &&
          this.model.indexOf(this.label) === -1
      ) {
        this.model.push(this.label)
      } else {
        this.model = true
      }
    },

    handleChange (ev) {
      let value
      if (ev.target.checked) {
        value = true
      } else {
        value = false
      }
      this.$emit('change', value, ev)
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch('BaseCheckboxGroup', 'change', [this.checkboxGroup.value])
        }
      })
    }

  },

  created () {
    this.checked && this.addToStore()
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
