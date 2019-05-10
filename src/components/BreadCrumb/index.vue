<template>
  <el-breadcrumb :separator="breadOption.separator" :separator-class="breadOption.separatorClass" class="bread-crumb" :class="breadOption.class">
    <el-breadcrumb-item
      v-for="item in breadOption.items"
      :key="item.path"
      :to="item.isNoRedirect ? '' : item.path"
      :replace="item.replace">{{ generateTitle(i18nPath, item.label) }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import {generateTitle} from '@/utils/i18n'

export default {
  name: 'BreadCrumb',
  props: {
    breadOption: {
      type: Object
      // default: {
      //   items: [],
      //   separator: '',
      //   separatorClass: '',
      //   class: ''
      // }
    }
  },
  data () {
    return {
      // i18n path
      i18nPath: 'vueFrame.route.'
    }
  },
  methods: {
    generateTitle
  }
}
</script>
