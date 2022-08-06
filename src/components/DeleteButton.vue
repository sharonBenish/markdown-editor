<template>
  <div class="delete" @click="$emit('clicked')"><img src="../assets/icon-delete.svg" alt="" class="img-fluid"></div>
</template>

<script>
export default {
 emits:['clicked']
}
</script>

<style scoped>
.img-fluid{
    width:100%;
    max-width:18px;
    height: auto;
    object-fit: cover;
}
</style>