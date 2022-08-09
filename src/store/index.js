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
      localStorage.setItem('documents', JSON.stringify(state.documents))
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
      localStorage.setItem('documents', JSON.stringify(state.documents))
      //console.log(state.documents)
    },
    saveDocument(state){
      const isPresent = state.documents.some(document => document.id == state.currentDocument.id);
      if (!isPresent){
        const date = new Date;
        state.currentDocument.id= Date.now();
        state.currentDocument.createdAt = date.toLocaleDateString();
        state.documents.unshift(state.currentDocument)
        localStorage.setItem('documents', JSON.stringify(state.documents))
      }
    },
    deleteDocument(state){
      const deleteIdx = state.documents.findIndex(document => document.id == state.currentDocument.id);
      state.documents.splice(deleteIdx,1);
      localStorage.setItem('documents', JSON.stringify(state.documents))
      if (state.documents >= 1){
        state.currentDocument = state.documents[0];
      } else{
        state.currentDocument = {
          name:'New Document',
          createdAt:'',
          content:"",
          id:0,
        }
      }
      
    },
    changeDocumentName(state, payload){
      const currDoc = state.documents.find(document => document.id == state.currentDocument.id);
      currDoc.name = payload;
      localStorage.setItem('documents', JSON.stringify(state.documents))
    },
    selectCurrentDocument(state, payload){
       const selectedDocument = state.documents.find( document => document.id == payload);
       state.currentDocument = selectedDocument;
    },
    initialiseDocuments(state){
      state.documents = JSON.parse(localStorage.getItem('documents'))||[];
      if (state.documents.length > 0){
        console.log("not empty")
        state.currentDocument = state.documents[0];
      }
    },
  },
})
