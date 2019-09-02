<script>
export default {
  name: 'AppSteps',
  props: {
    steps: {
      type: Array
    },
    active: {
      type: Number
    }
  },
  computed: {
    displaySteps () {
      return this.steps.map((step, index) => {
        let status
        if (index < this.active) {
          status = 'completed'
        } else if (index === this.active) {
          status = 'active'
        } else {
          status = 'wait'
        }
        return {
          ...step,
          status
        }
      })
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
