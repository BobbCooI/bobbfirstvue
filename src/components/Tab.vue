<template>
  <button class="mdc-tab" role="tab" aria-selected="false" :tabindex="tabIndex">
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

<style lang="scss">
@use "@material/tab-bar/mdc-tab-bar";
@use "@material/tab-scroller/mdc-tab-scroller";
@use "@material/tab-indicator/mdc-tab-indicator";
@use "@material/tab/mdc-tab";
</style>