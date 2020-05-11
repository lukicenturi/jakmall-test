<template>
  <div id="app">
    <Stepper></Stepper>
    <router-view></router-view>
  </div>
</template>
<script src="./App.ts"></script>
<style>
  @font-face {
    font-family: InterUI;
    src: url('./assets/fonts/InterUI/Inter-Regular.woff');
  }

  @font-face {
    font-family: InterUI;
    src: url('./assets/fonts/InterUI/Inter-Medium.woff2');
    font-weight: 500;
  }

  @font-face {
    font-family: InterUI;
    src: url('./assets/fonts/InterUI/Inter-Bold.woff2');
    font-weight: bold;
  }

  @font-face {
    font-family: Montserrat;
    src: url('./assets/fonts/Montserrat/Montserrat-Bold.ttf');
    font-weight: bold;
  }
</style>
<style src="./assets/style.css"></style>
