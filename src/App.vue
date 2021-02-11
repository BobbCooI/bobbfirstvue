<template>
<Nav/>
<div id="container">
<router-view/>
  </div>
<Footer/>
</template>

<script>
  import Nav from './components/Nav.vue';
  import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
  #container {
    min-height: 100%;
overflow: auto;
    flex-grow: 1;
  }
</style>