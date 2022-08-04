<template>
  <div id="preview" :class="{showMode: show, hideMode: !show, darkMode: !lightMode}">
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
        const lightMode = computed(()=> store.state.lightMode)
        const preview = computed(()=>{
            return marked.parse(store.getters.GetCurrentDocument.content)
        })
        
        return{
            preview,
            lightMode
        }
    }
}
</script>

<style scoped>
#preview.darkMode > .previewer{
  background:var(--color-1000) ;
}

#preview.darkMode > .previewer >>> h1, 
#preview.darkMode > .previewer >>> h2,
#preview.darkMode > .previewer >>> h3 , 
#preview.darkMode > .previewer >>> h4,
#preview.darkMode > .previewer >>> h5,
#preview.darkMode > .previewer >>> h6{
    color:var(--color-100);
}

#preview.darkMode > .previewer >>> *:not(p){
    color:var(--color-400);
}


#preview.darkMode > .previewer-header{
  background-color: var(--color-900);
  color: var(--color-400);
}
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
    color:var(--color-500);
    padding:1rem 0;
    line-height: 24px;
    font-weight: 300;
    font-size: 14px;
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

.previewer >>>blockquote p{
    border-radius: 4px;
    color: var(--color-700);
    padding: 24px;
    background: var(--color-200);
    border-left: 4px solid var(--accent);
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin: 1.5rem 0;
}

.previewer >>> blockquote a{
    color:inherit
}

#preview.darkMode >.previewer >>> blockquote a{
    color:inherit
}
#preview.darkMode >.previewer >>> blockquote p{
    background-color: var(--color-800);
    color: var(--color-100);
}

.previewer >>> pre{
    background-color: var(--color-200);
    padding:24px;
    border-radius:4px;
}

#preview.darkMode >.previewer >>> pre{
    background-color: var(--color-800);
    color: var(--color-100);
}

.previewer >>> pre code{
    font-family: monospace;
}

.previewer::-webkit-scrollbar {
  width: 0.5rem;
}
 
.previewer::-webkit-scrollbar-thumb {
  background-color: var(--accent);
  border-radius: 20px;
}

.previewer::-webkit-scrollbar-corner {
    background: inherit;
}

@media (min-width:1024px){
  #preview.hideMode{
    display:block;
}  
}
</style>