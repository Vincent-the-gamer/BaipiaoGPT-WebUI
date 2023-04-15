<template>
  <header>
    <img src="~~/assets/img/ashley.png" alt="ashley" />
    <h1>FreeChat</h1>
    <a class="right-button" href="https://github.com/Vincent-the-gamer/Bai-Piao-GPT-3.5-Turbo" target="_blank">
      <img src="~~/assets/img/github.png" alt="github" />
      <h2>GitHub</h2>
    </a>
  </header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
header{
  min-width: 300px;
}
// PC端样式
@media (min-width: 450px) {
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: rgb(51, 51, 51);
    z-index: 2;

    img {
      position: absolute;
      margin: 0;
      height: 100%;
      border-radius: 8px;
    }

    h1 {
      position: relative;
      left: 65px;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: white;
    }

    .right-button {
      position: absolute;
      height: 90%;
      top: 0;
      width: fit-content;
      right: 10px;
      margin: 0;
      display: inline;
      border: 3px solid rgb(255, 255, 255);
      border-radius: 7px;
      transition: color, 0.5s;

      img {
        position: relative;
      }

      h2 {
        position: relative;
        top: -12px;
        padding: 5px;
        right: 0;
        display: inline;
      }

      &:hover {
        background-color: rgb(255, 255, 255);
        color: black;
        cursor: pointer;
      }
    }
  }
}

// 移动端样式
@media (max-width: 450px) {
  header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: rgb(51, 51, 51);
    z-index: 2;

    img {
      position: absolute;
      margin: 0;
      height: 100%;
      border-radius: 8px;
    }

    h1 {
      position: relative;
      left: 65px;
      margin: 0;
    }

    a {
      text-decoration: none;
      color: white;
    }

    .right-button {
      position: absolute;
      height: 90%;
      top: 0;
      width: fit-content;
      right: 10px;
      margin: 0;
      display: inline;
      transition: color, 0.5s;

      img {
        position: relative;
      }

      h2 {
        display: none;
      }

      &:hover {
        background-color: rgb(255, 255, 255);
        color: black;
        cursor: pointer;
      }
    }
  }
}</style>