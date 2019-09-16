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
		為了維持彈性，均不加 `margin`

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
		## 用 true-label 表示真實的值
	BaseCheckboxGroup(v-model="value7")
		BaseCheckbox(label="美妝保養" :true-label="1" button)
		BaseCheckbox(label="生鮮食品" :true-label="2" button)
		BaseCheckbox(label="3C產品" :true-label="3" button)
		BaseCheckbox(label="服飾穿搭" :true-label="4" button)
	p {{ value7 }}

	highlight-code(lang="javascript").
		BaseCheckboxGroup(v-model="value7")
			BaseCheckbox(label="美妝保養" :true-label="1" button)
			BaseCheckbox(label="生鮮食品" :true-label="2" button)
			BaseCheckbox(label="3C產品" :true-label="3" button)
			BaseCheckbox(label="服飾穿搭" :true-label="4" button)

	:markdown-it
		## 數量限制 max

	BaseCheckboxGroup(v-model="value5" :max="2")
		BaseCheckbox(label="美妝保養" button)
		BaseCheckbox(label="生鮮食品" button)
		BaseCheckbox(label="3C產品" button)
		BaseCheckbox(label="服飾穿搭" button)

	p {{ value5 }}
	highlight-code(lang="javascript").
		BaseCheckboxGroup(v-model="value5" :max="2")
		BaseCheckbox(label="apple" button)
		BaseCheckbox(label="banana" button)
		BaseCheckbox(label="orange" button)

	:markdown-it
		## flex
		排版想要 `flex`，在 BaseCheckboxGroup 加上 `flex`，BaseCheckbox 加上 `flex-width`

	BaseCheckboxGroup(v-model="value6" flex)
		BaseCheckbox(v-for="(item, index) in list1" :key="index" :label="item" button flex-width="calc(25% - 8px)"
		:class="{'mt-2': index > 3, 'mr-2': ((index + 1)%4 !== 0)}")
	p {{ value6 }}
	highlight-code(lang="javascript").
		BaseCheckboxGroup(v-model="value6" flex)
			BaseCheckbox(v-for="(item, index) in list1" :key="index" :label="item" button flex-width="calc(25% - 8px)"
			:class="{'mt-2': index > 3, 'mr-2': ((index + 1)%4 !== 0)}")

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
      list1: ['美妝保養', '生鮮食品', '3C產品', '服飾穿搭', '家電', '精品'],
      value1: false,
      value2: [],
      value3: false,
      value4: false,
      isError: false,
      errorMsg: '這是錯誤訊息',
      value5: [],
      value6: [],
      value7: []
    }
  }
}
</script>

<style>

</style>
