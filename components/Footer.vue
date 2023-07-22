<template>
    <div class="hide-button"
        :class="themeStore.theme"
         @click="showFooter = !showFooter">
         <span>{{ showFooter ? "收起底部 <----" : "展开底部 ---->" }}</span>
    </div>
    <footer :class="themeStore.theme"> 
        <div v-if="showFooter">
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
            <div class="input-area" v-if="isWin">
                <textarea type="text" 
                    ref="textareaRef"
                    placeholder="输入问题，拷打GPT！"
                    v-model="inputStore.content"
                    @keyup.ctrl.enter="sendMessage"/>
                <button @click="sendMessage">提问(Ctrl + Enter)</button>
            </div>
            <div class="input-area" v-else-if="isMac">
                <textarea type="text" 
                    ref="textareaRef"
                    placeholder="输入问题，拷打GPT！"
                    v-model="inputStore.content"
                    @keydown.meta.enter="sendMessage"/>
                <button @click="sendMessage">提问(⌘ + Enter)</button>
            </div>
            <div class="input-area" v-else>
                <textarea type="text" 
                    ref="textareaRef"
                    placeholder="输入问题，拷打GPT！"
                    v-model="inputStore.content"/>
                <button @click="sendMessage">提问</button>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>

import useThemeStore from '~~/store/useThemeStore';
import useCurrentPlatform from '~~/hooks/useCurrentPlatform';
import useChatStore from '~~/store/useChatStore';
import useInputStore from '~~/store/useInputStore';

 // 收起footer
 const showFooter: Ref<boolean> = ref(true)

 // 使用store的文本来给input双向绑定
 const inputStore = useInputStore()

 // 使用chatStore来进行消息发送
 const chatStore = useChatStore()

 /**
  * 文本框高度自适应
  */
 // 拿textarea 的 dom
 const textareaRef: Ref<any> = ref(null)

 const changeHeight = (e: any) => {
    textareaRef.value.style.height = "53px"
    textareaRef.value.style.height = e.target.scrollHeight + 'px';
 }
 onMounted(() => {
    textareaRef.value.addEventListener("input", changeHeight)
 })

 onBeforeUnmount(() => {
    textareaRef.value.removeEventListener("input", changeHeight)
 })


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

 /**
  * 判断当前系统环境
  */
 const currentPlatform = useCurrentPlatform()
 const isWin: boolean = currentPlatform === "win32" || currentPlatform === "win64"
 const isMac: boolean = currentPlatform === "mac"

 // 主题
 const themeStore = useThemeStore()
 

</script>

<style lang="scss" scoped>
    .hide-button{
        &.light{
            border: 2px solid deeppink;
            color: black;
            &:hover{
                background-color: gainsboro;
                color: black;
                cursor: pointer;
            }
        }
        &.dark{
            border: 2px solid white;
            &:hover{
                background-color: white;
                color: black;
                cursor: pointer;
            }
        }
        position: fixed;
        bottom: 150px;
        right: 5px;
        border: 2px solid white;
        height: 25px;
        width: fit-content;
        padding: 2px;
        border-radius: 5px;
        transition: background-color, 0.3s;
        z-index: 2;
        &:hover{
            background-color: white;
            color: black;
            cursor: pointer;
        }
    }

 footer{
    &.dark{
        background-color: rgba(44, 44, 44, 0.5);
        .select-model{
            background-color: rgba(88, 88, 88, 0.248);
            select{
                background-color: rgb(48, 48, 48);
                color: white;
                border: 2px solid rgb(255, 255, 255);
            }
        }
        button{
            color: white;
            border: 3px solid rgb(168, 168, 168);
            background-color: rgb(44, 44, 44);
            &:hover{
                border: 3px solid rgb(255, 0, 195);
                background-color: rgb(255, 255, 255);
                color: black;
            }
        }
        .input-area{
            textarea{
                color: white;
                background-color: rgb(52, 52, 52);
                border: 3px solid rgb(255, 255, 255);
                &::placeholder{
                    color: rgb(255, 246, 197);
                }
            }
            button{        
                border: 3px solid rgb(255, 255, 255);
                background-color: rgb(47, 47, 47);
                &:hover{
                    border: 3px solid rgb(255, 0, 153);
                    background-color: rgb(255, 255, 255);
                }
            }
        }
    }
    &.light{
        background-color: rgba(145, 145, 145, 0.5);
        .select-model{
            background-color: rgba(145, 145, 145, 0.248);
            border: 2px solid rgb(255, 140, 0);
            select{
                background-color: rgb(124, 124, 124);
                color: white;
                border: 2px solid rgb(0, 208, 255);
            }
        }
        button{
            color: black;
            border: 3px solid rgb(168, 168, 168);
            background-color: rgb(0, 238, 255);
            &:hover{
                border: 3px solid rgb(255, 0, 195);
                background-color: rgb(255, 255, 255);
                color: black;
            }
        }
        .input-area{
            textarea{
                color: rgb(0, 0, 0);
                background-color: rgb(206, 206, 206);
                border: 3px solid rgb(252, 0, 0);
                &::placeholder{
                    color: rgb(69, 1, 78);
                }
            }
            button{  
                color: white;      
                border: 3px solid rgb(255, 255, 255);
                background-color: rgb(157, 0, 168);
                &:hover{
                    border: 3px solid rgb(255, 0, 153);
                    background-color: rgb(255, 255, 255);
                    color: black;
                }
            }
        }
    }

    position: fixed;
    left: 0;
    bottom: 0;
    height: fit-content;
    width: 100%;
    min-width: 300px;

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
            border: 2px solid rgb(255, 255, 255);
        }
    }

    button{
        position: relative;
        height: 40px;
        width: 100px;
        border-radius: 5px;
        color: white;
        border: 3px solid rgb(168, 168, 168);
        background-color: rgb(44, 44, 44);
        transition: background-color, 0.3s;
        &:hover{
            border: 3px solid rgb(255, 0, 195);
            background-color: rgb(255, 255, 255);
            color: black;
            cursor: pointer;
        }
        &#choose-model{
            margin-right: 8px;
            width: fit-content;
        }
    }
    .input-area{
        position: relative;
        display: flex;
        padding: 7px;
        bottom: 3px;
        width: 70%;
        height: fit-content;
        min-width: 350px;
        margin: 0 auto;
        textarea{
            font-family: HanYiZhongHei;
            padding: 10px;
            color: white;
            position: relative;
            bottom: 2px;
            width: calc(85% - 25px);
            max-height: 150px;
            min-width: 150px;
            min-height: 40px;
            border-radius: 7px;
            background-color: rgb(52, 52, 52);
            border: 3px solid rgb(255, 255, 255);
            resize: none;
            &::placeholder{
                color: rgb(255, 246, 197);
            }
        }
        button{
            position: relative;
            right: 0;
            bottom: 1px;
            left: 5px;
            margin-top: 7%;
            height: 40px;
            width: fit-content;
            border-radius: 5px;
            border: 3px solid rgb(255, 255, 255);
            background-color: rgb(47, 47, 47);
            transition: background-color, 0.3s;
            &:hover{
                border: 3px solid rgb(255, 0, 153);
                background-color: rgb(255, 255, 255);
                cursor: pointer;
            }
        }
    }
 }
</style>