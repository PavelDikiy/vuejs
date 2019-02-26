<template>
    <div id="app">
        <router-view></router-view>
        <!--    <home msg="Welcome to Your Vue.js App"></home>-->
    </div>
</template>

<script>

  export default {
    name: 'app',
    created(){
      let arrPages = ['clouds', 'water', 'send'];

      if (this.$route.name === null) {
        let url = arrPages[Math.round(Math.random() * 3)];
        this.$router.push({name: url});
      }
    }
  }
</script>

<style>
    html, body {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    body {
        margin: 0;
        padding: 0;
    }

    #app, #container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

    }

    #container.complete {
        animation-name: shadow;
        animation-duration: 3.5s;
        animation-iteration-count: 1;
    }

    @keyframes shadow {
        from {
            box-shadow: inset 0 0 10rem 0.3rem #00cf00;
        }
        to {
            box-shadow: inset 0 0 0 0.1rem green;
        }
    }

    .loader {
        position: absolute;
        font-weight: bold;
        z-index: 1;
        top: 50%;
        left: 50%;
        transition: color 1s;
    }

    .loader.loadDone {
        color: transparent;
    }

    .loader:after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        background-color: #ccc;
        opacity: .1;
        box-shadow: 0px 0px 10px 0px #000;
    }

    img {
        max-width: 100px;
        max-height: 100px;
        display: block;
        position: absolute;
        will-change: transform, opacity;
        transition: transform 1s, opacity 1s;
    }

    #container.complete img {
        transition: transform 3s, opacity 3s;
    }
</style>
