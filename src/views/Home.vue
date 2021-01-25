<template>
<Nav/>
<Main />
</template>


<script>
// @ is an alias to /src
  import Main from '../components/Main.vue'; 
  import Nav from '../components/Nav.vue';


export default {
  components: {
    Nav,
    Main
  }, 

}
</script>

<style>
* {box-sizing: border-box;margin: 0;padding: 0;font-family: "Kumbh Sans", sans-serif;scroll-behavior: smooth;}

</style>