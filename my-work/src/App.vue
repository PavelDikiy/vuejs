<template>
    <div id="app" class="container">
        <div class="row">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name : 'home'}" exact>Главная</router-link>
                </li>
                <li>
                    <router-link class="nav-link" :to="{ name : 'task'}">Решение задачи</router-link>
                </li>
            </ul>
        </div>
        <div class="row">
            <img alt="Vue logo" width="100px" height="100px" src="./assets/logo.png">
        </div>
        <div class="row">
            <router-view></router-view>
        </div>
        <!--    <home msg="Welcome to Your Vue.js App"></home>-->
    </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style>
    #app {

        max-width: 800px;
        margin: 50px auto;
    }
.row{
    justify-content: center;
}
    /*#app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    h3 {
      margin: 40px 0 0;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }
    a {
      color: #42b983;
    }*/
</style>
