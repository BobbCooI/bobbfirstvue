<template>
<!--<Nav/>-->
<Main />
</template>


<script>
// @ is an alias to /src
  import Main from '../components/Main.vue'; 
import Api from '../services/Api.js';

export default {
  name: 'homePage',
  components: {
  Main
  }, 
async created() {
       let count = localStorage.getItem('visitCount');
  if(!count) { 
    localStorage.setItem('visitCount', 1); 
  } else { 
    localStorage.setItem('visitCount', Number(count) + 1);
  } 
  count = localStorage.getItem('visitCount');
  await Api.server.post('/visits', {increment: true});
  }
}
</script>

<style>
* {box-sizing: border-box;margin: 0;padding: 0;font-family: "Kumbh Sans", sans-serif;scroll-behavior: smooth;}

</style>