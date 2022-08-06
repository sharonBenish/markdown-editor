<template>
    <div class="document" @click="selectCurrentDocument" :class="document.id == currentDocumentId? 'selected' :''">
      <img src="../assets/icon-document.svg" alt="">
      <DeleteButton @clicked="$emit('deleteCompClicked')" />
        <div>
          <span class="document_date">{{document.createdAt}}</span>
          <span class="document_name">{{document.name}}</span>
        </div>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex'
import DeleteButton from './DeleteButton.vue';
export default {
  components: { DeleteButton },
  props:['document'],
  emits:['deleteCompClicked'],
  setup(props){
    const store = useStore();
    const currentDocumentId = computed(()=> store.state.currentDocument.id)
    function selectCurrentDocument(){
      store.commit('selectCurrentDocument', props.document.id)
      //console.log(props.document.id)
    }
    
    return{
      selectCurrentDocument,
      currentDocumentId
    }
  }
}
</script>

<style scoped>
.document{
  display: flex;
  width:100%;
  padding:0.6rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  gap:10px;
}
.document > img + div{
  display: none;
}
.document > img + div{
  width:15px !important;
  height:15px !important;
}
.document > img:hover{
  display: none;
}
.document > img:hover + div{
  display: block;
}
.document> div{
  display:flex;
  flex-direction: column;
  
}

.document.selected{
  background: var(--color-700);
}

.document:hover{
  background: var(--color-800);
}
.document_date{
  color: var(--color-500);
  font-size: 13px;
  font-weight: 300;
  line-height: 15px;
}

.document_name{
  color:var(--color-100);
  font-weight: 400;
  line-height: 18px;
  max-height: 18px;
  word-break: break-all;
  display:flex;
  align-items: center;
  gap:1rem;
}
</style>