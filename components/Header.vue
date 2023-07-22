<template>
  <header :class="themeStore.theme">
    <img src="~~/assets/img/ashley.png" alt="ashley" />
    <h1>白嫖GPT</h1>
    <button @click="transitionApiSwitchTheme">
      主题: {{ themeStore.theme === "light" ? "白天" : "晚上" }}
    </button>
    <a class="right-button" href="https://github.com/Vincent-the-gamer/Rust-BaipiaoGPT" target="_blank">
      <img src="~~/assets/img/github.png" alt="github" />
      <h2>GitHub</h2>
    </a>
  </header>
</template>

<script lang="ts" setup>
import useThemeStore from '~~/store/useThemeStore';

const themeStore = useThemeStore()

function switchTheme(){
  themeStore.theme === "light" ? themeStore.setTheme("dark") : themeStore.setTheme("light")
}

// Store the last click event
let lastClick: any;
addEventListener("click", (event) => (lastClick = event));


function transitionApiSwitchTheme(){
  //@ts-ignore: Transition API
  if (!document.startViewTransition) {
    switchTheme()
    return;
  }

  // Get the click position, or fallback to the middle of the screen
  const x = lastClick?.clientX ?? innerWidth / 2;
  const y = lastClick?.clientY ?? innerHeight / 2;
  // Get the distance to the furthest corner
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  // Create a transition:
  //@ts-ignore: Transition API
  const transition = document.startViewTransition(() => {
     switchTheme()
  });

  // Wait for the pseudo-elements to be created:
  transition.ready.then(() => {
    const clipPath = [
        `circle(0 at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
    ]

    // Animate the root’s new view
    document.documentElement.animate(
      { clipPath },
      {
        duration: 500,
        easing: "ease-in",
        // Specify which pseudo-element to animate
        pseudoElement: '::view-transition-new(root)',
      },
    );
  });
}


</script>


<style lang="scss" scoped>
header{
  &.light{
    background-color: rgb(230, 230, 230);
    color: black;
    button{
      border: 2px solid black;
      color: black;
      &:hover {
        background-color: pink;
        color: black;
      }
    }
    .right-button{
      border: 3px solid black;
      color: black;
    }
  }
  &.dark{
    background-color: rgb(51, 51, 51);
    color: white;
    button{
      border: 2px solid white;
      color: white;
      &:hover {
        background-color: white;
        color: black;
      }
    }
    .right-button{
      border: 3px solid rgb(255, 255, 255);
      color: white;
    }
  }
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
    z-index: 2;
    button{
      position: absolute;
      right: 160px;
      top: 0;
      height: 100%;
      background-color: transparent;
      border-radius: 7px;
      font-family: HanYiZhongHei;
      transition: all, 0.3s;
    }

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
    z-index: 2;
    button{
      position: absolute;
      right: 18%;
      top: 0;
      height: 100%;
      background-color: transparent;
      border-radius: 7px;
      font-family: HanYiZhongHei;
      transition: all, 0.3s;
    }

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

    }
  }
}</style>