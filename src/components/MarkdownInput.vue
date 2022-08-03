<template>
  <div>
    <textarea v-model="markdownInput" @input="setCurrentDocument"></textarea>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
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
textarea{
    border:2px solid red;
    width:100%;
    height:calc(100vh - 60px);
    padding:1rem 2rem;
}
</style>