<template>
  <button class="mdc-tab mdc-theme--on-primary" role="tab" aria-selected="false" :tabindex="tabIndex">
     <span class="mdc-tab__content">
        <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
        <span class="mdc-tab__text-label"><slot></slot></span>
     </span>
     <span class="mdc-tab-indicator">
        <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
     </span>
           <span class="mdc-tab__ripple"></span>    
   </button>
</template>

<script>
export default {
  name: 'Tab',
  props: ["tabIndex"]
};
</script>

<style>
  .mdc-tab__text-label {
 /*   display: flex;
        justify-content: center;
*/
    text-align: center;
    margin-right: 15%;
  }
</style>