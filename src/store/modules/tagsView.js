const tagsView = {
  state: {
    tags: [
      {
        path: {path: '/dashboard'},
        title: 'dashboard',
        closable: false
      }
    ]
  },
  mutations: {
    ADD_TAG: (state, tag) => {
      state.tags.push(tag)
    },
    DELETE_TAG: (state, index) => {
      state.tags.splice(index, 1)
    }
  },
  actions: {
    AddTag ({commit}, tag) {
      commit('ADD_TAG', tag)
    },
    DeleteTag ({commit}, index) {
      commit('DELETE_TAG', index)
    }
  }
}

export default tagsView
