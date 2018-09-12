<template>
  <div id="app">
    <keyboard></keyboard>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  import Keyboard from './components/Keyboard'

  export default {
    name: 'app',
    data: function () {
      return {
      }
    },
    components: {
      Keyboard
    },
    created() {
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>