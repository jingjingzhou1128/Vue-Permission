import {mapGetters} from 'vuex'
import store from '@/store'
import {debounce} from '@/utils'

export default {
  computed: {
    ...mapGetters([
      'device',
      'sidebar'
    ]),
    isMobile () {
      return this.device === 'mobile'
    },
    sidebarCalss () {
      return {
        mobile: this.device === 'mobile',
        'open-sidebar': this.sidebar.opened,
        'hidden-sidebar': !this.sidebar.opened
      }
    }
  },
  methods: {
    resizeWindow () {
      // 获取屏幕当前宽度
      let screenWidth = window.innerWidth || document.documentElement.clientWidth
      if (screenWidth >= 1024) {
        if (this.device === 'mobile') {
          store.dispatch('SetDevice', 'desktop')
        }
      } else if (screenWidth < 1024) {
        if (this.device === 'desktop') {
          store.dispatch('SetDevice', 'mobile')
        }
        if (this.sidebar.opened) {
          store.dispatch('CloseSidebar')
        }
      }
    },
    // 关闭侧边栏
    handleCloseSidebar () {
      store.dispatch('CloseSidebar')
    },
    // 初始化屏幕
    initDevice () {
      this.resizeWindow()
    }
  },
  watch: {
    $route (route) {
      if (this.isMobile && this.sidebar.opened) {
        store.dispatch('CloseSidebar')
      }
    }
  },
  created () {
    this.initDevice()
    this.__resizeHandler = debounce(this.resizeWindow, 500)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.__resizeHandler)
  }
}
