<template>
<h1>
  You've visited this website {{userVisitCount}} times.
  </h1>
<h2 v-if="visitCount">
 In total, this website has been visited {{visitCount}} times.
  </h2>
<h2 v-else>
  Loading total visits...
  </h2>
</template>

<script>
  import Api from '../services/Api.js';
export default {
  data() {
    return {
      visitCount: null
    }
  },
  computed: {
    
    userVisitCount() { 
      const count = localStorage.getItem('visitCount');
      if(!count) { 
        localStorage.setItem('visitCount', 1); 
      }  
    return localStorage.getItem('visitCount');
    }
  },
async created() {
  let res = await Api().post('/visits', {getVisits: true});
  res=res.data;
   this.visitCount = res.visitCount;
  return res.visitCount; 
  }
}
    
</script>

<style>

</style>