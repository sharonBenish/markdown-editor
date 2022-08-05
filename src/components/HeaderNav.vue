<template>
  <nav>
        <div class="left_side_nav">
          <div class="sidebar_toggle" @click="$emit('clicked')">
            <img src="../assets/icon-menu.svg" alt="" v-if="isClosed">
            <img src="../assets/icon-close.svg" alt="" v-else >
          </div>
          <div class="logo desktop"><img src="../assets/logo.svg" alt=""></div>
          <div class="document_name">
            <img src="../assets/icon-document.svg" alt="">
            <div class="name_input_field">
              <label for="documentName">Document Name</label>
              <input id="documentName" v-model="documentName" />
            </div>
          </div>
        </div>
        <div class="right_side_nav">
          <div class="delete" @click="$emit('deleteClicked')"><img src="../assets/icon-delete.svg" alt=""></div>
          <div class="save" @click="$emit('saveClicked')">
            <div v-if="!showSavedModal">
              <img src="../assets/icon-save.svg" alt="">
              <span>Save Changes</span>
            </div>
            <div v-else>
              <img src="../assets/icon-check.svg" alt="">
              <span>Changes Saved</span>
            </div>
          </div>
        </div>
    </nav>
</template>

<script>
import { ref } from 'vue';
export default {
    props:['isClosed', 'showSavedModal'],
    setup(){
    const documentName = ref("New Document");

    return{
      documentName,
    }
  }
  
}
</script>

<style scoped>
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
  gap:1.5rem;
}

.sidebar_toggle{
  background: var(--color-700);
  height:60px;
  width:60px;
  display:flex;
  justify-content: center;
  align-items: center;
}

.logo.desktop{
  display:none;
}

.right_side_nav{
  margin:0 1rem;
  gap:0.2rem;
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

.save>div{
  background: var(--accent);
  color:var(--color-100);
  padding:0.8rem 1.2rem;
  border-radius: 5px;
  display:flex;
  gap:10px;
}

.save> div:hover{
  background: var(--accent-light);
}

.save> div >span{
  display:none;
}

.name_input_field label{
  color: rgb(124, 129, 135);
  display: none;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  line-height: 15px;
}

.name_input_field input{
  background: transparent;
  border:none;
  outline:none;
  width:100px;
  color:var(--color-100);
  font-size:14px;
}
.document_name{
  color:var(--color-100);
  font-weight: 400;
  line-height: 18px;
  max-height: 18px;
  word-break: break-all;
  display:flex;
  align-items: center;
  gap:1rem;
}

.document_name input:hover{
  border-bottom:1px solid var(--color-100)
}

.document_name input:focus{
  border-bottom:1px solid var(--accent);
}

@media (min-width:1024px) {
    .logo.desktop{
        display:block;
    }
    .right_side_nav{
        gap:0.5rem;
    }
    .save>div >span{
    display:block
  }

  .document_name{
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  max-height: 18px;
  gap:1rem;
}

.name_input_field label{
  font-size: 13px;
}

.name_input_field input{
  width:200px;
  font-size:1rem;
}

  .name_input_field label{
    display: block;
  }
}

</style>