<template>
  <button class="mdc-tab" role="tab" aria-selected="false" :tabindex="tabIndex">
     <span class="mdc-tab__content">
        <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
        <span class="mdc-tab__text-label">  <slot></slot>  </span>
     </span>
     <span class="mdc-tab-indicator">
        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
     </span>
     <span class="mdc-tab__ripple"></span>    
  </button>
{{exampleVal}} <!-- Refers to the variable inside the data return -->
</template>

<script>
  
  export default {
  name: 'Tab',
  props: ["tabIndex"],
    data() {
      return {
        exampleVal: "yes"
      }
    },
    methods: {
      okay() {
        this.exampleVal = "yes" // When called, this method can change the exampleVal in our data
      }
    },
    created() { }, // Before rendered into the DOM. 
    mounted() { } // Rendered and mounted into the DOM. Can use document.querySelector()
};
  
</script>

<style>
  .mdc-tab__text-label {
    text-align: center;
    margin-right: 15%;
  }
</style>