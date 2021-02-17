<template>
<i class="fas fa-chevron-left scroll-button scroll-right inline"></i>
<div class="mdc-tab-bar inline" role="tablist">
  <div class="mdc-tab-scroller">
    <div class="mdc-tab-scroller__scroll-area">
      <div class="mdc-tab-scroller__scroll-content">
        <button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="1">
          <span class="mdc-tab__content">
            <span class="mdc-tab__icon material-icons" aria-hidden="true"></span>
            <span class="mdc-tab__text-label"><slot name="first"></slot></span>
          </span>
          <span class="mdc-tab-indicator mdc-tab-indicator--active">
            <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
          </span>
          <span class="mdc-tab__ripple"></span>
        </button> 
        <slot name="otherTabLabels"></slot>
      </div>
    </div>
  </div>
</div><i class="fas fa-chevron-right scroll-button scroll-right inline"></i>
   <div class="bb-tab__content bb-tab__content--active"><slot name="firstContent"></slot></div>
  <slot name="otherTabContent"></slot>
</template>

<script>
import {MDCTabBar} from '@material/tab-bar';
  import {MDCRipple} from '@material/ripple/index';
   export default {
     data() {
       return {
         tabBar: null
       }
     },
     mounted() {
           this.tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
let contentEls = document.querySelectorAll(".bb-tab__content");
this.tabBar.listen("MDCTabBar:activated", function (event) {
  // Hide currently-active content
  document.querySelector(".bb-tab__content--active").classList.remove("bb-tab__content--active");
  // Show content for newly-activated tab
  contentEls[event.detail.index].classList.add("bb-tab__content--active");
});
     }
   }
</script>
<style>
    .bb-tab__content {display: none;color: red}.bb-tab__content--active {display: block;}
  .mdc-tab__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mdc-tab-bar {
    max-width: 70% !important;
  -webkit-box-shadow:0px 2px 2px #2b3c4e;-moz-box-shadow:0px 2px 2px #2b3c4e;box-shadow:0px 2px 2px #2b3c4e;
  }
  .inline {
    display: inline-block;
  }
  .scroll-button {
    font-size: 35px;
    margin: 11px 14px;
  }
</style>

