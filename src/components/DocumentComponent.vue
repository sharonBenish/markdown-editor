<template>
    <div class="document">
        <span class="document_date">April 5, 2022</span>
        <span class="document_name">README</span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.document{
  display:flex;
  flex-direction: column;
  width:100%;
  padding:1rem;
  border:1px solid gray;
  align-items:center;
}
.document_date{
  color: var(--color-500);
  font-size: 13px;
  font-weight: 300;
  line-height: 15px;
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
</style>