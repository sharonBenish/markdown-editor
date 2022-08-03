<template>
  <div id="preview" :class="{showMode: show, hideMode: !show}">
    <div class="previewer-header">PREVIEW</div>
    <div class="previewer" v-html="preview"></div>
  </div>
</template>

<script>
import {computed} from "vue"
import { useStore } from "vuex"
import {marked} from "marked"
export default {
    props:['show'],
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
#preview.hideMode{
    display:none;
}
#preview.viewMode{
    display:block;
}
.previewer-header{
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
.previewer{
    width:100%;
    height:calc(100vh - 60px - 40px);
    padding:1rem 2rem;
    font-family: var(--font-secondary);
}

.previewer h2{
    font-size: 28px;
    font-weight: 300;
    line-height: 37px;
}

.previewer ol{
    padding-left:24px;
}

ol {
    list-style: none; 
    /*counter-reset: li*/
}

li::marker{
    color:red;
}
/*ol li::before {
    content: counter(li); 
    color: red;
    display: inline-block; 
    width: 1em;
    margin-left: -1em
}
ol li {counter-increment: li}*/

@media (min-width:1024px){
  #preview.hideMode{
    display:block;
}  
}
</style>