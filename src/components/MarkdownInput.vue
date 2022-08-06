<template>
  <div id="editor" :class="{showMode:!show, hideMode: show, darkMode: !lightMode}">
    <div class="editor-header">MARKDOWN</div>
    <textarea v-model="markdownInput" @input="setCurrentDocument"></textarea>
  </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
export default {
    props:['show'],
    setup(){
        const store = useStore();
        const currentDocument = computed(()=> store.state.currentDocument.content)
        console.log(currentDocument)
        const lightMode = computed(()=> store.state.lightMode)
        const markdownInput = ref('');
        watch(currentDocument, ()=>{
          //console.log(newValue, oldValue);
          markdownInput.value = currentDocument.value;
        })
        function setCurrentDocument(){
          store.commit('SET_CURRENT_DOCUMENT', markdownInput.value)
        }

        return{
            markdownInput,
            setCurrentDocument,
            lightMode
        }
    }
}
</script>

<style scoped>
#editor.darkMode >textarea{
  background:var(--color-1000);
  color:var(--color-400);
  border-right: 1px solid var(--color-600);
}

#editor.darkMode > .editor-header{
  background-color: var(--color-900);
  color: var(--color-400);
}

#editor.showMode{
    width:100%;
}

#editor.hideMode{
    display: none !important;
}
.editor-header{
    background: var(--color-200);
    height:40px;
    display: flex;
    align-items: center;
    color: var(--color-500);
    font-size: 14px;
    letter-spacing: 2px;
    line-height: 16px;
    flex: 1 1 0%;
    padding: 12px;
}
textarea{
    outline: none;
    border:none;
    width:100%;
    min-height:calc(100vh - 60px - 40px);
    padding:1rem 2rem;
    background: var(--color-100);
    border-right: 1px solid var(--color-300);
    font-size: 14px;
    line-height: 24px;
    color:var(--color-700);
    font-family: var(--font-secondary);
}
textarea::-webkit-scrollbar {
  width: 0.4rem;
  
}
 
textarea::-webkit-scrollbar-thumb {
  background-color: var(--accent);
  border-radius: 10px;
}
</style>