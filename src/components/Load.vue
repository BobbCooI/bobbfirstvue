<template>
<Nav/>

  
 <div v-show="!loading" class="loader">
  </div>
</template>

<script>
  import Nav from "./Nav.vue"
 
export default {
        data() {  
          return { 
            loading: true
          } 
        },

  methods: {
    toggleLoad() { 
         this.loading = !this.loading;
    }},
  components: {Nav},


}
</script>
<style>
* {box-sizing: border-box;margin: 0;padding: 0;font-family: "Kumbh Sans", sans-serif;scroll-behavior: smooth;}

</style>
<style scoped>
  .d {
    font-size: 100px;
  }
.loader {

  border: 16px solid white; /* Light grey */border-top: 16px solid #3498db; /* Blue */border-radius: 50%;width: 120px;height: 120px; position: fixed;  top:40%;    left: 44.5%;    transform: translate(-50%, -50%);   transform: -webkit-translate(-50%, -50%);   transform: -moz-translate(-50%, -50%);transform: -ms-translate(-50%, -50%);animation: spin 2s linear infinite;}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  
</style>