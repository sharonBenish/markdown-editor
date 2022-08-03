<template>
  <div>
    <div class="previewer" v-html="preview"></div>
  </div>
</template>

<script>
import {computed} from "vue"
import { useStore } from "vuex"
import {marked} from "marked"
export default {
    setup(){
        const store= useStore()
        const preview = computed(()=>{
            return marked.parse(store.getters.GetCurrentDocument.content)
        })
        
        return{
            preview
        }
    }
}
</script>

<style scoped>
.previewer{
    border:1px solid blue;
    width:100%;
     height:calc(100vh - 60px);
    padding:1rem 2rem;
}
</style>