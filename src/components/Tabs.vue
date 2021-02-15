<template>
<div class="mdc-tab-bar" role="tablist">
  <div class="mdc-tab-scroller">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
          <span class="mdc-tab__content">
            <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
            <span class="mdc-tab__text-label"><slot name="first"></slot></span>
          </span>
          <span class="mdc-tab-indicator mdc-tab-indicator--active">
            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
          </span>
          <span class="mdc-tab__ripple"></span>
        </button> 
  <slot name="other"></slot>
  </div>
    </div>
  </div>
</div>
</template>

<script>
import {MDCTabBar} from '@material/tab-bar';
   export default {
     data() {
       return {
         tabBar: null
       }
     },
     mounted() {
           this.tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'))
     }
   }
</script>
<style lang="scss">
@use "@material/tab-bar/mdc-tab-bar";
@use "@material/tab-scroller/mdc-tab-scroller";
@use "@material/tab-indicator/mdc-tab-indicator";
@use "@material/tab/mdc-tab";
</style>