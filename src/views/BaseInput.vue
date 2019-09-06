<template lang="pug">
	.container.m-auto

		:markdown-it
			# BaseInput
			## 基礎用法

		BaseInput(v-model="value1" placeholder="請輸入內容")

		highlight-code(lang="javascript").
			BaseInput(v-model="value1" placeholder="請輸入內容")

			data() {
				return {
					value1: ''
				}
			}

		:markdown-it
			## 🈲️️用狀態

			> 通过 disabled 属性指定是否禁用 input 组件

		BaseInput(v-model="value2" placeholder="請輸入內容" disabled)

		highlight-code(lang="javascript").
			BaseInput(v-model="value2" placeholder="請輸入內容" disabled)

		:markdown-it
			## size
			> 有 `sm` `md` `lg` 三種尺寸，預設是 `md`。
		.flex.items-center
			BaseInput.mr-2(v-model="value3" placeholder="請輸入內容" size="sm")
			BaseInput.mr-2(v-model="value4" placeholder="請輸入內容" size="md")
			BaseInput(v-model="value5" placeholder="請輸入內容" size="lg")
		highlight-code(lang="javascript").
			BaseInput(v-model="value3" placeholder="請輸入內容" size="sm")
			BaseInput(v-model="value4" placeholder="請輸入內容" size="md")
			BaseInput(v-model="value5" placeholder="請輸入內容" size="lg")

		:markdown-it
			## 狀態
			> success error

		BaseInput(v-model="value6" placeholder="請輸入內容" isError)
		BaseInput(v-model="value7" placeholder="請輸入內容" isError error-message="必填")
		highlight-code(lang="javascript").
			BaseInput(v-model="value6" placeholder="請輸入內容" isError)
			BaseInput(v-model="value7" placeholder="請輸入內容" isError error-message="必填")

		:markdown-it
			## 帶 Icon
			> success error

		BaseInput(v-model="value8" placeholder="請輸入內容" iconClass="fal fa-calendar-alt")
		BaseInput(v-model="value9" placeholder="請輸入內容" iconClass="fal fa-search" iconPosition="right")
		highlight-code(lang="javascript").
			BaseInput(v-model="value8" placeholder="請輸入內容" iconClass="fal fa-calendar-alt")
			BaseInput(v-model="value9" placeholder="請輸入內容" iconClass="fal fa-search" iconPosition="right")

		:markdown-it
			## 長度限制
			> success error

		BaseInput(v-model="value10" placeholder="請輸入內容" maxlength="30" show-word-limit)
		highlight-code(lang="javascript").
			BaseInput(v-model="value10" placeholder="請輸入內容" maxlength="30" show-word-limit)

		:markdown-it
			## Input Attributes

</template>

<script>
import BaseInput from '@/components/BaseInput'

export default {
  components: {
    BaseInput
  },
  data () {
    return {
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5: '',
      value6: '',
      value7: '',
      value8: '',
      value9: '',
      value10: ''
    }
  }
}
</script>

<style>

</style>
