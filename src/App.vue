<template>
  <div id="page">
    <div class="sidebar" :class="{open: !isClosed}">
        <div class="logo mobile">
          <img src="./assets/logo.svg" alt=""/>
        </div>
        <div class="documents">
          <h3>MY DOCUMENTS</h3>
          <button>+ New Document</button>
          <div class="document_list">
            <div>
              <span class="document_date">April 5, 2022</span>
              <span class="document_name">README</span>
            </div>
          </div>
        </div>
    </div>
    <div class="main">
      <nav>
        <div class="left_side_nav">
          <div class="sidebar_toggle" @click="isClosed = !isClosed">
            <img src="./assets/icon-menu.svg" alt="" v-if="isClosed">
            <img src="./assets/icon-close.svg" alt="" v-else>
          </div>
          <div class="logo desktop"><img src="./assets/logo.svg" alt=""></div>
          <div class="document_name"></div>
        </div>
        <div class="right_side_nav">
          <div class="delete"><img src="./assets/icon-delete.svg" alt=""></div>
          <div class="save">
            <img src="./assets/icon-save.svg" alt="">
            <span>Save Changes</span>
          </div>
        </div>
      </nav>

      <div class="editor_tabs">
        <MarkdownInput />
        <PreviewComponent />
      </div>
    </div>    
  </div>
</template>

<script>
import PreviewComponent from "./components/PreviewComponent.vue";
import MarkdownInput from "./components/MarkdownInput.vue";
import { ref } from '@vue/reactivity';
export default {
  name: 'App',
  components: {
    PreviewComponent,
    MarkdownInput
  },
  setup(){
    const isClosed = ref(true)

    return{
      isClosed
    }
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root{

    --color-100: #fff;
    --color-200: #f5f5f5;
    --color-300: #e4e4e4;
    --color-400: #c1c4cb;
    --color-500: #7c8187;
    --color-600: #5a6069;
    --color-700: #35393f;
    --color-800: #2b2d31;
    --color-900: #1d1f22;
    --color-1000: #151619;
    --accent: #e46643;
    --accent-light: #f39765;
    --font-primary: "Roboto",sans-serif;
    --font-secondary: "Roboto Slab",monospace;
    --sidebar-transition: 0.5s cubic-bezier(0.165,0.84,0.44,1);
}

*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  font-family: 'Roboto Slab', serif;
}

#page{
  overflow: hidden;
  position: relative;
}

.main{
  position:relative;
  transition: var(--sidebar-transition)
}

nav{
  background-color: var(--color-800);
  display:flex;
  justify-content: space-between;
  height:60px;
  align-items: center;
}

nav > div {
  display:flex;
  align-items: center;
  gap:2rem;
}

.logo.desktop{
  display:none;
}

.right_side_nav{
  margin:0 1rem
}

.delete{
  height:45px;
  width:45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:50%;
}

.delete:hover{
  background:var(--color-900)
}

.save{
  background: var(--accent);
  color:var(--color-100);
  padding:0.8rem 1.2rem;
  border-radius: 5px;
  display:flex;
  gap:10px;
}

.save:hover{
  background: var(--accent-light);
}

.save>span{
  display:none;
}

.sidebar_toggle{
  background: var(--color-700);
  height:60px;
  width:60px;
  display:flex;
  justify-content: center;
  align-items: center;
}

.editor_tabs{
  display:flex;
}

.editor_tabs > * {
  width:100%;
}

.sidebar{
  background:var(--color-900);
  padding:1rem 1.5rem;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  width:270px;
  transform:translateX(-270px);
  transition:var(--sidebar-transition);
}

.sidebar.open{
  transform: translateX(0);
}

.sidebar.open + .main{
  transform: translateX(270px);
}

.logo.mobile{
  padding:1rem 0;
}

.documents h3{
  color: var(--color-500);
  font-weight: 500;
  font-size:14px;
  letter-spacing: 2px;
  margin-bottom:1rem;
}

.documents button {
  color:var(--color-100);
  background-color: var(--accent);
  border:none;
  border-radius:5px;
  width:100%;
  padding:1rem;
}

.documents button:hover{
  background: var(--accent-light);
}

.document_list{
  padding:1.2rem 0;
}

.document_list > div{
  display:flex;
  flex-direction: column;
  width:100%;
  padding:1rem;
  border:1px solid gray;
  align-items:center
}

.document_date{
  color: var(--color-500);
  font-size: 13px;
  font-weight: 300;
  line-height: 15px;
}

.document_name{
  color:var(--color-100);
  font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    max-height: 18px;
    word-break: break-all;
}
@media (min-width: 1024px){
  .logo.desktop{
    display:block;
  }

  .logo.mobile{
    display:none;
  }

  .documents h3{
    font-size:0.9rem;
    padding:1rem 0;
  }

  .save>span{
    display:block
  }

}
</style>
