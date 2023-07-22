<template>
  <div>
    <!-- 路由入口 -->
    <NuxtPage />
  </div>
</template>


<style lang="scss">
  ::view-transition-image-pair(root) {
    isolation: auto;
  }

  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
    display: block;
  }
  @font-face {
    font-family: HanYiZhongHei;
    src: url("~~/assets/fonts/hanyizhonghei.ttf");
  }
  @font-face{
    font-family: DM Mono;
    src: url("~~/assets/fonts/DM-Mono.ttf");
  }
  body{
    font-family: HanYiZhongHei;
    pre{
        padding: 15px;
        code { 
            font-family: DM Mono;
        }
    }
  }

</style>