<template>
<Nav/>
{{ee}}
<div id="container">
<router-view/>
  </div>
<div class="mdc-snackbar">
  <div class="mdc-snackbar__surface" role="status" aria-relevant="additions">
    <div class="mdc-snackbar__label" aria-atomic="false">
      Can't send photo. Retry in 5 seconds.
    </div>
    <div class="mdc-snackbar__actions" aria-atomic="true">
      <button type="button" class="mdc-button mdc-snackbar__action">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Retry</span>
      </button>
    </div>
  </div>
</div>

<newF/>
</template>

<script>
  import Nav from './components/Nav.vue';
  import newF from './components/newF.vue';
  import {MDCSnackbar} from '@material/snackbar';
export default {
  name: 'App',
  components: {
    Nav,
    newF
  },
  data() {
    return {
      ee: null
    }
  },
  mounted() {
    setTimeout(() => {
      //const a = new MDCSnackbar(document.querySelector(".mdc-snackbar"));
const snackBar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
      this.$store.commit("setSnackbar",{
   bar: JSON.stringify(snackBar)
 }) 
this.ee=this.$store.state.snackbar + this.getAllFuncs(this.$store.state.snackbar)
      console.log("okay")
    }, 1500)
  },
  methods: {
         getAllFuncs(toCheck) {var props = [];var obj = toCheck;  do {props = props.concat(Object.getOwnPropertyNames(obj));} while (obj = Object.getPrototypeOf(obj));return props.sort().filter(function(e, i, arr) {  if (e!=arr[i+1] && typeof toCheck[e] == 'function') return true;});}
  }
}
</script>

<style>
  :root {
    --mdc-theme-primary: #6391bf;
    --mcd-theme-secondary: #88add1;
    --mdc-theme-on-primary: #ffffff;
    --mdc-theme-on-secondary: #dfe5eb;
    --mdc-theme-surface: #ffffff;
    --mdc-theme-background: #ffffff;
    --mdc-theme-text-primary-on-dark: #ffffff;
    --mdc-theme-text-primary-on-dark: #000000;
    mdc-typography-font-family:Verdana, sans-serif;


   }
  #container {
    height: 100%;
    overflow: auto;
    flex-grow: 1;
   }
</style>