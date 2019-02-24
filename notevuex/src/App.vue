<template>
    <div id="app">
        <sidebar></sidebar>
        <pad></pad>
    </div>
</template>


<script>
  import Pad from './components/Pad.vue';
  import Sidebar from './components/Sidebar.vue';
  import Note from './components/Note.vue';

  export default {
    name: 'app',
    components: {
      Pad,
      Sidebar,
      Note
    }
  }

</script>

<style lang="scss">
    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
    }

    body {
        color: #2c3e50;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        height: 100%;
        font-size: 14px;
    }
</style>
