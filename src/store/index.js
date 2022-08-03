import { createStore } from 'vuex'

export default createStore({
  state: {
    documents:[],
    currentDocument:{
      name:"",
      createdAt:"",
      content:"",
      id:0,
    }
  },
  getters: {
    GetCurrentDocument(state){
      return state.currentDocument
    }
  },
  mutations: {
    SET_CURRENT_DOCUMENT(state,payload){
      state.currentDocument.content = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
