<template>
  <div id="accordion" v-bind:style="styleObject">
    
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["paddingTop"],
  data () {
    return {
    styleObject: {
    'padding-top': this.paddingTop + 'px',
      }
    }
    
  }
}
</script>

<style>
</style>