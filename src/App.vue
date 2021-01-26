<template>
<Load></Load>
<router-view/>

</template>

<script>
  import Load from './components/Load.vue';
export default {
  name: 'App',
  components: {
    Load
  }
  
}
</script>
