<template>
  <div id="editor" :class="{showMode:!show, hideMode: show}">
    <div class="editor-header">MARKDOWN</div>
    <textarea v-model="markdownInput" @input="setCurrentDocument"></textarea>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    props:['show'],
    setup(){
        const store = useStore()
        const markdownInput = ref('')
        function setCurrentDocument(){
            console.log(markdownInput.value)
            store.commit('SET_CURRENT_DOCUMENT', markdownInput.value)
        }

        return{
            markdownInput,
            setCurrentDocument
        }
    }
}
</script>

<style scoped>
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