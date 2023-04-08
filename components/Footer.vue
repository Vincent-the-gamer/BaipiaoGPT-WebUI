<template>
    <footer>
        <div class="select-model" v-show="showChooseModel">
            <p align="center">选择模型</p>
            <select v-model="chatStore.model" 
                    @change="(e: any) => chatStore.model = e.target.value">
                <option value="gpt3.5" selected>GPT-3.5-Turbo</option>
                <option value="legacy" disabled>Legacy(更菜的模型，无上下文)</option>
            </select>
        </div>

        <p align="center">
            <button id="choose-model"
                    @click="showChooseModel = !showChooseModel"
                    >{{ showChooseModel ? "隐藏模型选择框" : "选择模型" }}</button>
            <button @click="chatStore.regenerate"
                    v-if="chatStore.model === 'gpt3.5'"
                    >重新生成答案</button>
        </p>
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
    if(inputStore.content === ""){
        alert("消息不能为空！")
    }
    else{
        chatStore.chat(inputStore.content)
        // 清空输入框
        inputStore.content = ""
    }
 }

 // 是否隐藏选择模型
 const showChooseModel: Ref<boolean> = ref(false)


</script>

<style lang="scss" scoped>
 footer{
    position: fixed;
    left: 0;
    bottom: 0;
    height: fit-content;
    width: 100%;
    background-color: rgba(44, 44, 44, 0.5);
    .select-model{
        position: fixed;
        left: 10px;
        bottom: 150px;
        background-color: rgba(88, 88, 88, 0.248);
        font-family: HanYiZhongHei;
        width: fit-content;
        margin: 0;
        border-radius: 8px;
        select{
            height: 40px;
            font-family: HanYiZhongHei;
            margin: 0 auto;
            background-color: rgb(48, 48, 48);
            color: white;
            border-radius: 8px;
            border: 2px solid violet;
        }
    }

    button{
        position: relative;
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
        &#choose-model{
            margin-right: 8px;
            width: fit-content;
        }
    }
    .input-area{
        position: relative;
        padding: 7px;
        width: 60%;
        height: 100%;
        min-width: 630px;
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
            position: relative;
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