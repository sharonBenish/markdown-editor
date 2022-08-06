import { createStore } from 'vuex'

export default createStore({
  state: {
    lightMode:true,
    documents:[],
    currentDocument:{
      name:"New Document",
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
    },
    toggleDarkMode(state){
      state.lightMode = !state.lightMode
    },
    addNewDocument(state){
      const name = "New Document";
      const date = new Date;
      const createdAt = date.toLocaleDateString();
      const content = "";
      const id = Date.now();
      const newDocument = {
        name, 
        createdAt, 
        content, 
        id
      }
      state.documents.unshift(newDocument);
      state.currentDocument= newDocument;
      //console.log(state.documents)
    },
    saveDocument(state){
      const isPresent = state.documents.some(document => document.id == state.currentDocument.id);
      if (!isPresent){
        const date = new Date;
        state.currentDocument.id= Date.now();
        state.currentDocument.createdAt = date.toLocaleDateString();
        state.documents.unshift(state.currentDocument)
      }
    },
    deleteDocument(state){
      const deleteIdx = state.documents.findIndex(document => document.id == state.currentDocument.id);
      state.documents.splice(deleteIdx,1);
      state.currentDocument = state.documents[0];
    },
    changeDocumentName(state, payload){
      const currDoc = state.documents.find(document => document.id == state.currentDocument.id);
      currDoc.name = payload;
      //state.currentDocument.name = payload;
      //state.documents.find(document => document.id == state.currentDocument.id) = state.currentDocument;
      //currDoc = state.currentDocument;
    },
    selectCurrentDocument(state, payload){
       const selectedDocument = state.documents.find( document => document.id == payload);
       state.currentDocument = selectedDocument;
       //console.log(state.currentDocument);
       //console.log('documents', state.documents)
    }
  },
  actions: {
  },
  modules: {
  }
})
