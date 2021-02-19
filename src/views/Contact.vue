<template>
<title>Bobb's Contact</title>
<div>
  <newF/>
  </div>
</template>

<script>
  import newF from '../components/newF.vue';
  export default {
    name: 'Contact',
    components: {newF},
    created() {
      console.log("oififirmkrd", document.querySelector(".yo__i"));
    }
  }
</script>

<style>
</style>