<template lang="pug">
.container.m-auto
	:markdown-it
		# BaseCheckbox
		## 基礎用法(未完成)

	BaseCheckbox(v-model="value1" label="apple")
	p {{ value1 }}
	highlight-code(lang="javascript").
		BaseCheckbox(v-model="value1" label="apple")

	:markdown-it
		##  Button

	BaseCheckbox(label="apple" button v-model="value3")
	BaseCheckbox(label="apple" button disabled v-model="value4")
	p {{ value3 }} {{ value4 }}
	highlight-code(lang="javascript").
		BaseCheckbox(label="apple" button v-model="value3")
		BaseCheckbox(label="apple" button disabled v-model="value4")

	:markdown-it
		## Group

	BaseCheckboxGroup(v-model="value2" :isError="isError" :errorMsg="errorMsg")
		BaseCheckbox(label="apple" button)
		BaseCheckbox(label="banana" button)
		BaseCheckbox(label="orange" button)
	p {{ value2 }}
	BaseButton(@click="isError = !isError") toggle error

	highlight-code(lang="javascript").
		BaseCheckboxGroup(v-model="value2" :isError="isError" :errorMsg="errorMsg")
		BaseCheckbox(label="apple" button)
		BaseCheckbox(label="banana" button)
		BaseCheckbox(label="orange" button)

	:markdown-it
		## 數量限制 max

	BaseCheckboxGroup(v-model="value5" :max="2")
		BaseCheckbox(label="美妝保養" button style="width: 200px")
		BaseCheckbox(label="生鮮食品生鮮食品生生鮮食品生鮮食品生" button style="width: 200px")
		BaseCheckbox(label="3C產品" button style="width: 200px")
		BaseCheckbox(label="服飾穿搭" button style="width: 200px")

	p {{ value5 }}
	highlight-code(lang="javascript").
		BaseCheckboxGroup(v-model="value5" :max="2")
		BaseCheckbox(label="apple" button)
		BaseCheckbox(label="banana" button)
		BaseCheckbox(label="orange" button)

</template>

<script>
import BaseButton from '@/components/BaseButton'

import BaseCheckbox from '@/components/BaseCheckbox'
import BaseCheckboxGroup from '@/components/BaseCheckboxGroup'

export default {
  components: {
    BaseButton,
    BaseCheckbox,
    BaseCheckboxGroup
  },
  data () {
    return {
      value1: false,
      value2: [],
      value3: false,
      value4: false,
      isError: false,
      errorMsg: '這是錯誤訊息',
      value5: []
    }
  }
}
</script>

<style>

</style>
