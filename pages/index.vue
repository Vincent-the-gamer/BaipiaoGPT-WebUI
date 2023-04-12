<template>
    <Header/>
    <MainMenu v-if="chatStore.chatContents.length < 1"/>
    <div v-else>
        <button @click="clearChat">清空对话</button>
        <Dialog/>
    </div>
    <Footer/>
</template>

<script lang="ts" setup>
 import Header from '~~/components/Header.vue';
 import MainMenu from '~~/components/MainMenu.vue';
 import Dialog from '~~/components/Dialog.vue';
 import Footer from "~~/components/Footer.vue";
 import useChatStore from '~~/store/useChatStore';

 // 如果没有对话，展示主菜单
 const chatStore = useChatStore()
 // 把对滚动条的操作在组件挂载后传给store
 onMounted(() => {
    let timer: any;
    chatStore.scrollToLastMessage = () => {
        // document.documentElement.scrollTo(0, document.documentElement.clientHeight)
        clearTimeout(timer)
        timer = setTimeout(() => {
            window.scrollTo({
                top: document.body.clientHeight,
                behavior: "smooth"
            })
        }, 300)
    }
 })

 // 清空页面对话
 function clearChat(){
    if(chatStore.model === "gpt3.5"){
        chatStore.clearChat()
    }
    else chatStore.clearScreen()
 }

</script>

<style lang="scss" scoped>
button{
    position: fixed;
    left: 5px;
    top: 55px;
    height: 40px;
    width: 100px;
    background-color: transparent;
    border: 3px solid deepskyblue;
    border-radius: 7px;
    color: white;
    z-index: 2;
    transition: background-color, 0.5s;
    &:hover{
        background-color: aquamarine;
        color: black;
        cursor: pointer;
    }
}
</style>

