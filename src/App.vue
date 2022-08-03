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
              <span class="document_date">April 5, 20200</span>
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
    --sidebar-transition: 0.3s cubic-bezier(0.165,0.84,0.44,1);
}

*{
  padding:0;
  margin:0;
  box-sizing:border-box
}

#page{
  overflow: hidden;
  position: relative;
}

.main{
  position:relative
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
}

.logo.desktop{
  display:none;
}

.save>span{
  display:none;
}

.editor_tabs{
  display:flex;
}

.editor_tabs > * {
  width:100%;
}

.sidebar{
  background:var(--color-900);
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  width:250px;
  transform:translateX(-250px)
}

.sidebar.open{
  transform: translateX(0);
}

.sidebar.open + .main{
  transform: translateX(250px);
}

@media (min-width: 1024px){
  .logo.desktop{
    display:block;
  }

  .save>span{
    display:block
  }
}
</style>
