<template>
  <div id="saved-modal">
    <div class="saved-modal-content">
        <div class="saved-modal-body">
            <p>Your changes have been saved. You can download the file by clicking the link below.</p>
            <img src="../assets/modal-close.svg" alt=""  @click="$emit('closeSavedModal')">
        </div>
        <button @click="downloadTxtFile">
            <img src="../assets/icon-document.svg" alt="" >
            <span>Download the file</span>
        </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default {
setup(){
    const store = useStore();
    const elementVisible = ref(true);
    onMounted(()=>{
        setTimeout(()=> elementVisible.value = false, 5000)
    });
    const currentDocument = computed(()=> store.state.currentDocument).value;
    const docContent = currentDocument.content;
    const docName = currentDocument.name;
    // add .md to docName
    const docNameWithExtension = `${docName}.md`;
    const downloadTxtFile = () => {
        console.log('download', docNameWithExtension)
        const element = document.createElement('a')
        const file = new Blob([docContent],{
            type: 'text/markdown',
        })
        element.href = URL.createObjectURL(file)
        element.download = docNameWithExtension
        document.body.appendChild(element)
        element.click()
    }

    return{
        elementVisible,
        downloadTxtFile,
    }
}

}
</script>

<style scoped>
#saved-modal{
    width:280px;
    position: fixed;
    background: var(--color-200);
    border-radius: 0.6rem;
    bottom:2rem;
    right:2rem;
    padding:1rem;
    animation: fadeUp 1s alternate ease-in-out, fadeDown 1s 4s alternate ease-in-out;
}
.saved-modal-content{
    display:flex;
    flex-direction: column;
    align-items: center;
}
.saved-modal-body{
    display: flex;
    gap:0.8rem;
    align-items: flex-start;
    margin: 20px 0;
    font-weight: 200;
    font-size: 14px;
}
.saved-modal-body >img{
    width:14px;
    height: 14px;
}

button{
    width:100%;
    border:none;
    background: var(--accent);
    padding:0.8rem 1rem;
    border-radius: 4px;
    color:#fff;
    font-weight: 500;
}

button:hover{
    background: var(--accent-light);
}

button >img{
    margin-right:10px;
}


@keyframes fadeUp {
    from{
        opacity:0.25;
        transform: translateY(60px);
    }
    to{
        opacity: 1;
    }
}

@keyframes fadeDown {
    from{
        opacity: 0.9;
    }
    to{
        opacity: 0;
        transform: translateY(60px);
    }
}
</style>