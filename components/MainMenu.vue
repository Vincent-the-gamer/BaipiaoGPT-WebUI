<template>
   <main :class="themeStore.theme">
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
import useThemeStore from '~~/store/useThemeStore';
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

// 主题
const themeStore = useThemeStore()


</script>

<style lang="scss" scoped>
  main{
    &.dark{
        .main-item-container{
            .main-item{
                background-color: rgb(55, 55, 55);
                color: white;
                filter: drop-shadow(0 0 20px black);
                &:hover{
                    filter: drop-shadow(0 0 20px deeppink);
                }
                h2{
                    text-align: center;
                }
                button{                  
                    background-color: rgb(76, 75, 75);
                    border: 3px solid deepskyblue;     
                    color: white;
                    &:hover{
                        background-color: blue;
                    }
                }
            }
        }
    }
    &.light{
        .main-item-container{
            .main-item{
                background-color: white;
                color: black;
                filter: drop-shadow(0 0 20px black);
                &:hover{
                    filter: drop-shadow(0 0 20px rgb(220, 20, 255));
                }
                h2{
                    text-align: center;
                }
                button{                  
                    background-color: rgb(227, 227, 227);
                    border: 3px solid rgb(255, 0, 255);     
                    color: black;
                    &:hover{
                        background-color: rgb(255, 0, 0);
                    }
                }
            }
        }
    }
    position: relative;
    margin: 0 auto;
    top: 50px;
    height: fit-content;
    width: 90%;
    min-width: 300px;
    @media (min-width: 450px){
        h1{
            position: relative;
            top: 30px;
            width: fit-content;
            margin: 0 auto;
            font-size: 40px;
        }
    }
    @media (max-width: 450px){
        h1{
            position: relative;
            text-align: center;
            top: 30px;
            width: fit-content;
            margin: 0 auto;
            font-size: 40px;
        }
    }
    .main-item-container{
        position: relative;
        margin: 0 auto;
        margin-top: 80px;
        padding: 5px;
        width: 100%;
        height: 450px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        .main-item{
            position: relative;
            top: 30px;
            width: 250px;
            height: 83%;
            border-radius: 8px;
            margin: 8px;
            transition: filter, 0.3s;
            h2{
                text-align: center;
            }
            button{
                padding: 3px;             
                margin: 0 auto;
                border-radius: 8px;
                position: relative;
                transition: width, 0.5s;
                height: fit-content;
                &:hover{
                    cursor: pointer;
                    transform: scale(105%, 105%);
                }
            }
        }
    }
  }
</style>