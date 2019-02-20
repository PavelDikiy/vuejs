<template>
    <div id="app" class="container">
        <div class="row">
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ name : 'home'}" exact>Главная</router-link>
                </li>
                <li>
                    <router-link class="nav-link" :to="{ name : 'calculator'}">Решение задачи</router-link>
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
</style>
