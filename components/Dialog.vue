<template>
    <main>
        <div class="dialog-area" ref="dialogArea">
            <DialogItem class="item"
                        :class="themeStore.theme"
                        v-for="chat of chatContents" 
                        :role="chat.role" 
                        :content="chat.content"/>
        </div>
    </main>
</template>

<script lang="ts" setup>
import DialogItem from '~~/components/DialogItem.vue';
import useChatStore from '~~/store/useChatStore';
import "highlight.js/styles/tokyo-night-dark.css" // 引入代码高亮所需css
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import useThemeStore from '~~/store/useThemeStore';

/**
 * 读取聊天上下文的Store
 */
const chatStore = useChatStore()
const { chatContents } = chatStore

const [dialogArea] = useAutoAnimate({
    duration: 300
})

// 主题
const themeStore = useThemeStore()

</script>

<style lang="scss" scoped>
    // 呼吸灯特效
    @keyframes breatheNeon1 {
        0%{
            filter: drop-shadow(0 0 30px black);
        }
        50%{
            filter: drop-shadow(0 0 30px rgb(255, 20, 239));
        }
        100%{
            filter: drop-shadow(0 0 30px black);
        }
    }
    @keyframes breatheNeon2 {
        0%{
            filter: drop-shadow(0 0 30px black);
        }
        50%{
            filter: drop-shadow(0 0 30px rgb(20, 255, 247));
        }
        100%{
            filter: drop-shadow(0 0 30px black);
        }
    }
    .dialog-area{
        width: 90%;
        top: 30px;
        margin: 0 auto;
        position: relative;
        height: fit-content;
        top: 60px;
        padding-bottom: 400px;
        min-width: 300px;
        .item{
            &.light{
                filter: drop-shadow(0 0 20px rgb(139, 139, 139));
                &:nth-child(2n){
                    background-color: rgb(227, 227, 227);
                    color: black;
                    &:hover{
                        animation: breatheNeon1 5s linear infinite;
                    }
                }
                &:nth-child(2n+1){
                    background-color: rgb(194, 194, 194);
                    color: black;
                    &:hover{
                        animation: breatheNeon2 5s linear infinite;
                    }
                }
            }
            &.dark{
                filter: drop-shadow(0 0 20px black);
                &:nth-child(2n){
                    background-color: rgb(47, 47, 47);
                    &:hover{
                        animation: breatheNeon1 5s linear infinite;
                    }
                }
                &:nth-child(2n+1){
                    background-color: rgb(82, 82, 82);
                    &:hover{
                        animation: breatheNeon2 5s linear infinite;
                    }
                }
            }
            margin-bottom: 25px;
         
        }
    }
</style>