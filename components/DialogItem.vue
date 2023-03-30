<template>
    <div class="dialog-item">
        <div class="content-area">
            <img src="~~/assets/img/kizunaAi.png" alt="ai" v-if=" props.role === 'assistant' ">
            <img src="~~/assets/img/laoFeng.png" alt="老冯" v-else/>
            <h4>{{ props.content }}</h4>
        </div>
    </div>
</template>

<script lang="ts" setup>
 /**
  * props
  */
  const props = defineProps({
    role: String, // 角色：user是用户,assistant是AI
    content: String // 内容
  })
</script>

<style lang="scss" scoped>
    .dialog-item{
        filter: drop-shadow(0 0 20px black);
        border-radius: 8px;
        position: relative;
        margin: 0 auto;
        width: 90%;
        height: fit-content;
        min-height: 150px;
        transition: width, 0.5s;
        &:hover{
            transform: scale(102%, 102%);
            filter: drop-shadow(0 0 20px deeppink);
        }
        .content-area{
            padding: 10px;
            position: relative;
            img{
                height: 70px;
                top: 35px;
                position: absolute;
            }
            h4{
                position: relative;
                left: 80px;
                width: calc(100% - 85px);
                white-space: pre-wrap;
            }
        }
    }
</style>