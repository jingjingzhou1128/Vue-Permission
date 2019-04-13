import Cookies from 'js-cookie'

const app = {
  state: {
    language: Cookies.get('language') || 'en-US',
    theme: Cookies.get('theme') || 'default',
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true // 0:shrink,1:opened;false:shrink,true:opened
    }
  },
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookies.set('language', language)
    },
    SET_THEME: (state, theme) => {
      state.theme = theme
      Cookies.set('theme', theme)
    },
    TOGGLE_SIDEBAR: state => {
      state.sidebar.opened = !state.sidebar.opened
      Cookies.set('sidebarStatus', state.sidebar.opened ? 1 : 0)
    },
    OPEN_SIDEBAR: state => {
      state.sidebar.opened = true
      Cookies.set('sidebarStatus', 1)
    },
    CLOSE_SIDEBAR: state => {
      state.sidebar.opened = false
      Cookies.set('sidebarStatus', 0)
    }
  },
  actions: {
    SetLanguage ({commit}, language) {
      commit('SET_LANGUAGE', language)
    },
    SetTheme ({commit}, theme) {
      commit('SET_THEME', theme)
    },
    ToggleSidebar ({commit}) {
      commit('TOGGLE_SIDEBAR')
    },
    OpenSidebar ({commit}) {
      commit('OPEN_SIDEBAR')
    },
    CloseSidebar ({commit}) {
      commit('CLOSE_SIDEBAR')
    }
  }
}

export default app
