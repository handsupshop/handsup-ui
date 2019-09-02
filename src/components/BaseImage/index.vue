<script>
export default {
  name: 'BaseImage',
  components: {},
  props: {
    type: {
      type: String,
      default: 'product'
    },
    src: {
      type: String,
      default: ''
    }
  },
  computed: {
    defaultImage () {
      switch (this.type) {
        case 'product':
          return require('@/assets/icon-default-product.png')
        case 'user':
          return require('@/assets/icon-default-user-md.png')
        case 'channel':
          return require('@/assets/icon-default-channel.png')
        default:
          return require('@/assets/icon-default-product.png')
      }
    },
    computedSrc () {
      if (!this.src) {
        return this.defaultImage
      } else {
        return this.src
      }
    }
  },
  methods: {
    onError (e) {
      e.target.src = this.defaultImage
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss"></style>
