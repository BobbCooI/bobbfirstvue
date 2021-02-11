<template>
<div id="notifyBox" :class="{exit: exitModal}">
  <slot>{{description}}</slot> <button id="notifyExit" @click="exitModal=!exitModal"><i class="fas fa-times"></i></button>
  </div>
</template>

<script>
export default {
  props: ["description"],
 data() {
   return {
     exitModal: false
   }
 },
  created() {
    this.exitModal = false;
  }
  }
</script>
<style scoped>
  #notifyBox {
    background: green;
    color: white;
    padding: 15px 45px;
    position:fixed;
    text-align: center;
    bottom:3px;
    right:3px;
    margin:0px;
    z-index: 3000;
  }
  
  #notifyExit {
    background: none;
    border: none;
    outline: none;
    font-size: 20px;
    position: absolute;
    top: 13px;
    right: 9px;
  }
  .exit {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.2s, opacity 0.2s linear;
  }
</style>