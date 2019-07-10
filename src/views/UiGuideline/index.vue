<script>
// Base Component
import BaseButton from '@/components/BaseButton/index.vue'
import BaseInput from '@/components/BaseInput/index.vue'
import BaseSelect from '@/components/BaseSelect/index.vue'
import BaseTextarea from '@/components/BaseTextarea/index.vue'
import BaseRadio from '@/components/BaseRadio/index.vue'
import BaseCheckbox from '@/components/BaseCheckbox/index.vue'
import BaseModal from '@/components/BaseModal/index.vue'

export default {
  skipMiddleware: ['getAuth', 'checkAuth'],
  name: 'uiGuideline',
  components: {
    BaseButton,
    BaseInput,
    BaseSelect,
    BaseTextarea,
    BaseRadio,
    BaseCheckbox,
    BaseModal
  },
  data () {
    return {
      selectOptionTemp: [
        { label: '請選擇', value: '' }
      ],
      selectOptions: [
        { label: 111, value: 'AAA' },
        { label: 222, value: 'BBB' },
        { label: 333, value: 'CCC' },
        { label: 444, value: 'DDD' }
      ]
      // gender: '男'
      // radioValue: '111'
    }
  },
  methods: {
    hadleSelectChange (e) {
      console.log(e)
    },
    changeGender (e) {
    },
    changeValue (e) {
    },
    changeCheckbox (e) {
    }
  }
}
</script>

<template lang="pug" src="./template.pug"></template>
<style lang="scss" src="./style.scss" scoped></style>
