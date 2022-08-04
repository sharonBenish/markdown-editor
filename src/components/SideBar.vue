<template>
  <div class="sidebar" :class="{open: !isClosed}">
      <div class="logo mobile">
        <img src="../assets/logo.svg" alt="" />
      </div>
      <div class="documents">
        <h3>MY DOCUMENTS</h3>
        <button>+ New Document</button>
        <div class="document_list">
          <DocumentComponent />
        </div>
        <div class="modeToggle">
          <LightDarkMode />
        </div>
      </div>
    </div>
</template>

<script>
import DocumentComponent from './DocumentComponent.vue';
import LightDarkMode from './LightDarkMode.vue';
export default {
    props: ["isClosed"],
    components: { DocumentComponent, LightDarkMode }
}
</script>

<style scoped>
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
  overflow: hidden !important;
}

.sidebar.open{
  transform: translateX(0);
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

.modeToggle{
  position:absolute;
  bottom:1.5rem;
}
</style>
<style>
.sidebar.open + .main{
  transform: translateX(270px);
}
</style>