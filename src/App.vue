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

<style lang="scss">
  :root {
    --mdc-theme-primary: #6391bf;
    --mcd-theme-secondary: #88add1;
    --mdc-theme-on-primary: #ffffff;
    --mdc-theme-on-secondary: #dfe5eb;
    --mdc-theme-surface: #ffffff;
    --mdc-theme-background: #ffffff;
   }
  #container {
    min-height: 100%;
    overflow: auto;
    flex-grow: 1;
   }
</style>