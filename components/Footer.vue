<template>
    <footer>
        <div class="input-area">
            <input type="text" 
                   placeholder="输入问题，拷打GPT！"
                   v-model="inputStore.content"
                   @keyup.enter="sendMessage"/>
            <button @click="sendMessage">提问！！！</button>
        </div>
    </footer>
</template>

<script lang="ts" setup>

import useChatStore from '~~/store/useChatStore';
import useInputStore from '~~/store/useInputStore';


 // 使用store的文本来给input双向绑定
 const inputStore = useInputStore()

 // 使用chatStore来进行消息发送
 const chatStore = useChatStore()


 // 发送消息按钮
 function sendMessage(){
    chatStore.chat(inputStore.content)
    // 清空输入框
    inputStore.content = ""
 }


</script>

<style lang="scss" scoped>
 footer{
    position: fixed;
    left: 0;
    bottom: 0;
    height: 50px;
    width: 100%;
    background-color: rgb(44, 44, 44);
    .input-area{
        position: relative;
        padding: 7px;
        width: 60%;
        height: 45px;
        min-width: 600px;
        margin: 0 auto;
        input{
            padding: 6px;
            color: white;
            position: relative;
            bottom: 2px;
            width: 80%;
            height: 25px;
            border-radius: 7px;
            background-color: rgb(124, 124, 124);
            border: 3px solid greenyellow;
            &::placeholder{
                color: gold;
            }
        }
        button{
            position: absolute;
            bottom: 12px;
            margin-left: 5px;
            height: 40px;
            width: 100px;
            border-radius: 5px;
            border: 3px solid violet;
            background-color: aqua;
            transition: background-color, 0.3s;
            &:hover{
                border: 3px solid rgb(255, 0, 153);
                background-color: pink;
                cursor: pointer;
            }
        }
    }
 }
</style>