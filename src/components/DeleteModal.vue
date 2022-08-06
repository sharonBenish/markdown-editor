<template>
  <div class="modal_overlay" v-if="showDeleteModal">
      <div class="modal_container">
        <div class="modal_content">
          <div class="modal_header">
            <h2>Delete this document?</h2>
            <img src="../assets/modal-close.svg" alt="" @click="$emit('closeDeleteModal')">
          </div>
          <div class="modal_body">
            Are you sure youu want to delete the <i>'welcome'</i> document and its contents? This cannot be reversed.
          </div>
          <button @click="deleteDocument">Confirm & Delete</button>
        </div>
      </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    emits:['closeDeleteModal'],
    props:['showDeleteModal'],
    setup(props, {emit}){
      const store = useStore();
      function deleteDocument(){
        store.commit('deleteDocument');
        emit('closeDeleteModal')
      }

      return{
        deleteDocument,
      }
    }

}
</script>

<style scoped>
.modal_overlay{
  height: 100vh;
  left: 0px;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 1040;
  background:rgba(21, 22, 25, 0.5);
}

.modal_container{
  width:60%;
  padding:1.3rem;
  max-width:400px;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color:#000;
  background: var(--color-100);
  border-radius: 0.7rem;
}

.modal_header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal_header img{
  width:15px;
  height: 15px;
}

.modal_body{
  color: rgb(124, 129, 135);
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  margin:1.2rem 0;
}

.modal_container button{
  border:none;
  width:100%;
  padding:1rem;
  color:#fff;
  background: var(--accent);
  border-radius:7px;
}

.modal_container button:hover{
  background: var(--accent-light);
}
</style>