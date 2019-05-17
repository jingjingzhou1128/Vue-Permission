const tagsView = {
  state: {
    tags: []
  },
  mutations: {
    UPDATE_TAGS: (state, tags) => {
      let filterTags = tags.filter(newTag => {
        return !state.tags.some(tag => newTag.path.path === tag.path.path)
      })
      state.tags = [...state.tags, ...filterTags]
    },
    ADD_TAG: (state, route) => {
      if (!state.tags.some(item => item.path.path === route.path)) {
        state.tags.push({
          path: {path: route.path},
          title: route.meta.title,
          closable: !route.meta.affixTag
        })
      }
    },
    DELETE_TAG: (state, tag) => {
      let delTagIndex = state.tags.findIndex((item, index) => {
        return item.path.path === tag.path.path
      })
      if (delTagIndex < 0) return
      state.tags.splice(delTagIndex, 1)
    },
    CLEAR_TAGs: (state) => {
      state.tags = []
    }
  },
  actions: {
    UpdateTags ({commit}, tags) {
      commit('UPDATE_TAGS', tags)
    },
    AddTag ({commit}, route) {
      commit('ADD_TAG', route)
    },
    DeleteTag ({commit}, tag) {
      commit('DELETE_TAG', tag)
    },
    ClearTags ({commit}) {
      commit('CLEAR_TAGs')
    }
  }
}

export default tagsView
