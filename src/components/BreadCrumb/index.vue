<template>
  <el-breadcrumb :separator="breadOption.separator" :separator-class="breadOption.separatorClass" :class="breadOption.class">
    <el-breadcrumb-item v-for="item in breadOption.items" :key="item.path" :to="item.path" :replace="item.replace">{{ item.label }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
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
  }
}
</script>
