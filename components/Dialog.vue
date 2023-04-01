<template>
    <main>
        <div class="dialog-area">
            <DialogItem class="item"
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

/**
 * 读取聊天上下文的Store
 */
const chatStore = useChatStore()
const { chatContents } = chatStore


</script>

<style lang="scss" scoped>
    .dialog-area{
        width: 90%;
        top: 30px;
        margin: 0 auto;
        position: relative;
        height: fit-content;
        top: 60px;
        padding-bottom: 400px;
        .item{
            margin-bottom: 25px;
            &:nth-child(2n){
                background-color: rgb(47, 47, 47);
            }
            &:nth-child(2n+1){
                background-color: rgb(82, 82, 82);
            }
        }
    }
</style>