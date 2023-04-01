<template>
  <div>
    <!-- 路由入口 -->
    <NuxtPage />
  </div>
</template>

<style lang="scss">
  @font-face {
    font-family: HanYiZhongHei;
    src: url("~~/assets/fonts/hanyizhonghei.ttf");
  }
  @font-face{
    font-family: DM Mono;
    src: url("~~/assets/fonts/DM-Mono.ttf");
  }
  body{
    background-color: rgb(37, 37, 37);
    color: white;
    font-family: HanYiZhongHei;
    pre{
        padding: 15px;
        code { 
            font-family: DM Mono;
        }
    }
  }

</style>