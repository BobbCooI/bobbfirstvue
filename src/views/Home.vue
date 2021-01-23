<template>
<Nav />
<Main />
</template>


<script>
// @ is an alias to /src
  import Main from '../components/Main.vue'; 
  import Nav from '../components/Nav.vue';


export default {
  name: 'Home',
  components: {
    Nav,
    Main
  }
}
</script>