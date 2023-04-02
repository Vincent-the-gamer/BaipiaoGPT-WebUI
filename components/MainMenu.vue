<template>
   <main>
     <h1>快来在线拷打GPT !!!!</h1>
     <div class="main-item-container">
        <div class="main-item" v-for="tag of tagObj.tags" :key="tag.title">
            <h2>{{ tag.title }}</h2>
            <p align="center" v-for="question of tag.questions">
                <button @click="() => setInputContent(question)">{{ question }}</button>
            </p>      
        </div>
     </div>
   </main>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import useInputStore from '~~/store/useInputStore';
import presetQuestions from '~~/utils/presetQuestions';

    // 导入预设问题
    const tagObj: any = reactive(presetQuestions)

    // 使用store来同步输入框内容
    const inputStore = useInputStore()
    function setInputContent(text: string){
        inputStore.setContent(text)
    }
</script>

<style lang="scss" scoped>
  main{
    position: relative;
    margin: 0 auto;
    top: 50px;
    height: fit-content;
    width: 80%;
    h1{
        position: relative;
        top: 30px;
        width: fit-content;
        margin: 0 auto;
        font-size: 40px;
    }
    .main-item-container{
        position: relative;
        margin: 0 auto;
        margin-top: 80px;
        padding: 5px;
        width: 100%;
        height: 400px;
        // background-color: gray;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        .main-item{
            position: relative;
            top: 30px;
            width: 250px;
            height: 80%;
            background-color: rgb(55, 55, 55);
            border-radius: 8px;
            filter: drop-shadow(0 0 20px black);
            margin: 8px;
            transition: filter, 0.3s;
            &:hover{
                filter: drop-shadow(0 0 20px deeppink);
            }
            h2{
                text-align: center;
            }
            button{
                padding: 3px;             
                background-color: rgb(76, 75, 75);
                margin: 0 auto;
                border: 3px solid deepskyblue;
                border-radius: 8px;
                position: relative;
                color: white;
                transition: width, 0.5s;
                height: fit-content;

                &:hover{
                    background-color: blue;
                    cursor: pointer;
                    transform: scale(105%, 105%);
                }
            }
        }
    }
  }
</style>