<script>
export default {
  name: 'AppSelectListItem',
  components: {},
  props: {
    active: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  computed: {
    computedClass () {
      return {
        'active': this.active,
        'disabled': this.disabled
      }
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
