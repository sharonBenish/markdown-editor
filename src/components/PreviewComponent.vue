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
    overflow: scroll;
    padding:1rem 2rem;
    font-family: var(--font-secondary);
}

.previewer>>>h1{
    font-size: 32px;
    font-weight: 700;
    line-height: 42px;
    margin-bottom: 1.3rem;
}

.previewer >>> h2{
    font-size: 28px;
    font-weight: 300;
    line-height: 37px;
    margin-bottom:1.2rem;
}

.previewer >>>h3{
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    margin-bottom: 1rem;
}

.previewer >>> p{
    color:var(--color-500)
}

.previewer>>> *::marker{
    color:var(--accent);
    font-weight: 700;
}

.previewer >>> ol, .previewer >>> ul{
    padding-left:24px;
}

.previewer >>> li{
    list-style-position: inside;
    font-size: 14px;
    font-weight:300;
    margin-bottom:0.6rem;
}

.previewer::-webkit-scrollbar {
  width: 0.5rem;
}
 
.previewer::-webkit-scrollbar-thumb {
  background-color: var(--accent);
  border-radius: 20px;
}

@media (min-width:1024px){
  #preview.hideMode{
    display:block;
}  
}
</style>