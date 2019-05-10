<template>
  <div class="tags">
    <router-link
      v-for="item in tags"
      :key="item.title"
      :class="[{active: activePath === item.path.path}, 'tags-item']"
      :to="item.path">
      {{ item.title }}
      <i v-if="item.closable" class="iconfont icon-close" @click.prevent.stop="closeTag(item)"></i>
    </router-link>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Tags',
  data () {
    return {
      // 当前被激活的path
      activePath: ''
    }
  },
  computed: {
    ...mapGetters([
      'tags'
    ])
  },
  methods: {
    // 更新tags
    updateTags (route) {
      let isExistTag = this.tags.some(item => item.path.path === route.path)
      if (!isExistTag) {
        this.$store.dispatch('AddTag', {
          path: {path: route.path},
          title: route.meta.title,
          closable: true
        })
      }
    },
    // 删除tag
    closeTag (tag) {
      let closeTagIndex = this.tags.findIndex((item, index) => {
        return item.path.path === tag.path.path
      })
      if (closeTagIndex < 0) return
      // 删除tag
      this.$store.dispatch('DeleteTag', closeTagIndex)
      // 判断被关闭的tag是否已被激活, 若激活路由自动转到当前tag列表中的最后一项
      if (tag.path.path !== this.activePath) return
      let activeTag = this.tags[this.tags.length - 1]
      this.activePath = activeTag.path.path
      this.$router.push(activeTag.path)
    }
  },
  watch: {
    $route: {
      handler (route) {
        // 过滤出显示在侧边栏的路由匹配项
        let matched = route.matched.filter(item => item.meta && item.meta.title)
        if (!matched.length) return
        let lastMatched = matched[matched.length - 1]
        this.activePath = lastMatched.path
        this.updateTags(lastMatched)
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  height: 34px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  border-bottom: 1px solid #d6d6d6;
  padding: 0 20px;
  text-align: left;
  line-height: 34px;
  .tags-item {
    display: inline-block;
    font-size: 12px;
    height: 26px;
    line-height: 24px;
    padding: 0 5px;
    margin: 4px 0;
    vertical-align: bottom;
    background-color: #fff;
    border: 1px solid #d6d6d6;
    &.active {
      background-color: #42b983;
      color: #fff;
      border-color: #42b983;
    }
    & + .tags-item {
      margin-left: 10px;
    }
    i {
      // position: absolute;
      // right: 2px;
      // top: 0;
      cursor: pointer;
      margin-left: 2px;
      vertical-align: -1px;
    }
  }
}
</style>
