<template>
  <div class="tags">
    <router-link
      v-for="item in tags"
      :key="item.title"
      :class="[{active: activePath === item.path.path}, 'tags-item']"
      :to="item.path">
      {{ generateTitle(i18nPath, item.title) }}
      <i v-if="item.closable" class="iconfont icon-close" @click.prevent.stop="closeTag(item)"></i>
    </router-link>
    <ul class="contextmenu" v-show="contextVisible">
      <li>Refresh</li>
      <li>Colse Other</li>
      <li>Colse All</li>
    </ul>
  </div>
</template>

<script>
import path from 'path'
import {mapGetters} from 'vuex'
import {generateTitle} from '@/utils/i18n'

export default {
  name: 'Tags',
  data () {
    return {
      // 是否显示右键菜单
      contextVisible: false,
      // 当前被激活的path
      activePath: '',
      // i18n path
      i18nPath: 'vueFrame.route.'
    }
  },
  computed: {
    ...mapGetters([
      'tags',
      'permission_routers'
    ])
  },
  methods: {
    generateTitle,
    // 添加tags
    addTag () {
      let route = this.$route
      // 过滤出显示在tagsView的路由匹配项
      let matched = route.matched.filter(item => item.meta && item.meta.title && !item.meta.nonMenu)
      if (!matched.length) return
      let lastMatched = matched[matched.length - 1]
      this.activePath = lastMatched.path
      this.$store.dispatch('AddTag', lastMatched)
    },
    // 过滤出affix tags
    filterAffixTags (route, basePath = '') {
      let affix = []
      route.forEach(item => {
        if (item.meta && item.meta.title && !item.meta.nonMenu && item.meta.affixTag) {
          affix.push({
            path: {path: path.resolve(basePath, item.path)},
            title: item.meta.title,
            colsable: false
          })
        }
        if (item.children) {
          let tempAffix = this.filterAffixTags(item.children, path.resolve(basePath, item.path))
          affix = [...affix, ...tempAffix]
        }
      })
      return affix
    },
    // 获取tags
    initAffixTags () {
      let tags = this.filterAffixTags(this.permission_routers)
      this.$store.dispatch('UpdateTags', tags)
    },
    // 删除tag
    closeTag (tag) {
      // 删除tag
      this.$store.dispatch('DeleteTag', tag)
      // 判断被关闭的tag是否已被激活, 若激活路由自动转到当前tag列表中的最后一项
      if (tag.path.path !== this.activePath) return
      let activeTag = this.tags[this.tags.length - 1]
      this.activePath = activeTag.path.path
      this.$router.push(activeTag.path)
    }
  },
  watch: {
    $route () {
      this.addTag()
    }
    // $route: {
    //   handler (route) {
    //     // 过滤出显示在tagsView的路由匹配项
    //     // let matched = route.matched.filter(item => item.meta && item.meta.title && !item.meta.nonMenu)
    //     // if (!matched.length) return
    //     // let lastMatched = matched[matched.length - 1]
    //     // this.activePath = lastMatched.path
    //     this.addTag()
    //   }
    //   // immediate: true
    // }
  },
  mounted () {
    this.initAffixTags()
    this.addTag()
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
