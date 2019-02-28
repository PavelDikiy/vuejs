<template>
    <div id="app">
        <Header/>
        <div class="container mt-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'app',
    components: {
      Header
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
</style>
