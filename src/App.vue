<template>
  <div id="page">
    <SideBar :isClosed="isClosed" />
    <div class="main">
      <HeaderNav :isClosed="isClosed" @clicked="isClosed = !isClosed" @deleteClicked="showDeleteModal = !showDeleteModal" @saveClicked="removeSavedModal" :showSavedModal="showSavedModal"/>

      <div class="editor_tabs">
        <div class="showToggle" @click="showPreview = !showPreview">
          <img v-if="!showPreview" src="./assets/icon-show-preview.svg" alt="">
          <img v-else src="./assets/icon-hide-preview.svg" alt="">
        </div>
        <MarkdownInput :show="showPreview" />
        <PreviewComponent :show="showPreview" />
      </div>
    </div>
    <DeleteModal :showDeleteModal="showDeleteModal" @closeDeleteModal="showDeleteModal = !showDeleteModal" />
    <SavedModal v-if="showSavedModal" />
  </div>
</template>

<script>
import PreviewComponent from "./components/PreviewComponent.vue";
import MarkdownInput from "./components/MarkdownInput.vue";
import { ref } from '@vue/reactivity';
import HeaderNav from "./components/HeaderNav.vue";
import SideBar from "./components/SideBar.vue";
import DeleteModal from "./components/DeleteModal.vue";
import SavedModal from "./components/SavedModal.vue";
export default {
  name: 'App',
  components: {
    PreviewComponent,
    MarkdownInput,
    HeaderNav,
    SideBar,
    DeleteModal,
    SavedModal
},
  setup(){
    const isClosed = ref(true);
    const showPreview = ref(false);
    const showDeleteModal = ref(false);
    const showSavedModal = ref(false);

    function removeSavedModal(){
      showSavedModal.value = true;
      setTimeout(()=> showSavedModal.value= false, 5000)
    }

    return{
      isClosed,
      showPreview,
      showDeleteModal,
      showSavedModal,
      removeSavedModal
    }
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700&display=swap');
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
  font-family: 'Roboto', sans-serif;
}
#page{
  height:100vh;
  overflow: hidden;
  position: relative;
}

.main{
  position:relative;
  transition: var(--sidebar-transition)
}

.editor_tabs{
  display:flex;
  position: relative;
}

.showToggle{
  position: absolute;
  right:20px;
  width:auto !important;
  top:10px;
}

.editor_tabs > * {
  width:100%;
}

@media (min-width: 1024px){

}
</style>
