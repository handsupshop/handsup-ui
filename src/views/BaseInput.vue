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

		BaseInput(v-model="value2" placeholder="請輸入內容" :disabled="true")

		highlight-code(lang="javascript").
			BaseInput(v-model="value2" placeholder="請輸入內容" disabled)

		:markdown-it
			## size
			有 `small`、`medium`、`large` 三種尺寸，預設是 `md`。
		.flex.items-center
			BaseInput.mr-2(v-model="value3" placeholder="請輸入內容" size="small")
			BaseInput.mr-2(v-model="value4" placeholder="請輸入內容" size="medium")
			BaseInput(v-model="value5" placeholder="請輸入內容" size="large")
		highlight-code(lang="javascript")
			|	BaseInput(v-model="value3" placeholder="請輸入內容" size="small")
			|	BaseInput(v-model="value4" placeholder="請輸入內容" size="medium")
			|	BaseInput(v-model="value5" placeholder="請輸入內容" size="large")

		:markdown-it
			## 狀態
			> success、error

		BaseInput(v-model="value6" placeholder="請輸入內容" isError)
		BaseInput(v-model="value7" placeholder="請輸入內容" isError error-msg="必填")
		highlight-code(lang="javascript").
			BaseInput(v-model="value6" placeholder="請輸入內容" isError)
			BaseInput(v-model="value7" placeholder="請輸入內容" isError error-message="必填")

		:markdown-it
			## 帶 Icon
			可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标。

		BaseInput(v-model="value8" placeholder="請輸入內容" suffix-icon="fal fa-calendar-alt")
		BaseInput(v-model="value9" placeholder="請輸入內容" prefix-icon="fal fa-search")
		highlight-code(lang="javascript").
			BaseInput(v-model="value8" placeholder="請輸入內容" suffix-icon="fal fa-calendar-alt")
			BaseInput(v-model="value9" placeholder="請輸入內容" prefix-icon="fal fa-search")

		:markdown-it
			## Textarea

		BaseInput(type="textarea" v-model="value12" placeholder="請輸入內容")

		:markdown-it
			## 長度限制

		BaseInput(v-model="value10" placeholder="請輸入內容" maxlength="50" show-word-limit type="text")
		BaseInput(v-model="value11" placeholder="請輸入內容" maxlength="100" show-word-limit type="textarea")
		highlight-code(lang="javascript").
			BaseInput(v-model="value10" placeholder="請輸入內容" maxlength="350" show-word-limit)

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
      value10: '',
      value11: '',
      value12: ''
    }
  }
}
</script>

<style>

</style>
