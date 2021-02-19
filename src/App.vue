<template>
<Nav/>
<div id="container">
<router-view/>
  </div>
<newF/>
</template>

<script>
  import Nav from './components/Nav.vue';
  import newF from './components/newF.vue';
export default {
  name: 'App',
  components: {
    Nav,
    newF
  }
}
</script>

<style>
  :root {
    --mdc-theme-primary: #6391bf;
    --mcd-theme-secondary: #88add1;
    --mdc-theme-on-primary: #ffffff;
    --mdc-theme-on-secondary: #dfe5eb;
    --mdc-theme-surface: #ffffff;
    --mdc-theme-background: #ffffff;
   }
  #container {
    height: 100%;
    overflow: auto;
    flex-grow: 1;
   }
</style>