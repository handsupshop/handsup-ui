<script>
import { setTimeout } from 'timers';
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    showClose: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 300
    }
  },
  name: 'message',
  components: {},
  data () {
    return {
      timer: null,
      closed: false,
    }
  },
  computed: {
    exportClass () {
      return[
        `text-${this.color}-dark`,
        `border-${this.color}-light`,
        `bg-${this.color}-vr-light`
      ]
    }, 
    exportIcon () {
      switch (this.color) {
        // 成功
        case 'success':
          return 'fa-check-circle'
          break
        // 警告
        case 'warning':
          return 'fa-exclamation-circle'
          break
        // 錯誤
        case 'danger':
          return 'fa-times-circle'
          break
        default:
          return 'fa-info-circle'
      }
    }
  },
  mounted() {
    // this.startTimer()
  },
  methods: {
    // startTimer() {
    //   const vm = this
    //   if (vm.duration > 0) {
    //       vm.timer = setTimeout( function () {
            
    //       }, vm.duration)
    //   }
    // }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
