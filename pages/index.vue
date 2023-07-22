<template>
    <Header/>
    <MainMenu v-if="chatStore.chatContents.length < 1"/>
    <div :class="themeStore.theme" v-else>
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
import useThemeStore from '~~/store/useThemeStore';

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
        }, 500)
    }
 })


 // 改变body样式
const themeStore = useThemeStore()
watch(themeStore, (newVal) => {
    if(newVal.theme === "light"){
        document.body.style.backgroundColor = "white" 
        document.body.style.color = "black"
    }
    else {
        document.body.style.backgroundColor = "rgb(33, 33, 33)"
        document.body.style.color = "white"
    }
})

 // 清空页面对话
 function clearChat(){
    if(chatStore.model === "gpt3.5"){
        chatStore.clearChat()
    }
    else chatStore.clearScreen()
 }


// 退出页面时清空上下文
onBeforeUnmount( async () => {
  await axiosWithContext.get("/clearContext")
})

</script>

<style lang="scss" scoped>
.dark{
    button{
        border: 3px solid rgb(255, 255, 255);
        color: white;
        &:hover{
            background-color: rgb(255, 255, 255);
            color: black;
        }
    }
}
.light{
    button{
        border: 3px solid black;
        color: black;
        &:hover{
            background-color: rgb(255, 1, 255);
            color: rgb(255, 255, 255);
        }
    }
}
button{
    position: fixed;
    left: 5px;
    top: 55px;
    height: 40px;
    width: 100px;
    background-color: transparent;
    border-radius: 7px;
    z-index: 2;
    transition: background-color, 0.5s;
    &:hover{
        cursor: pointer;
    }
}
</style>

