<template>
<Accordion paddingTop="50">
    <Panel> 
      <template v-slot:question>Video Test</template> 
      <template v-slot:answer><router-link :to="{name: 'watchPage', params: {id: 1}}">Here!</router-link></template>
    </Panel>
  </Accordion>
</template>

<script>
  import Accordion from '../components/Accordion.vue';
  import Panel from '../components/Panel.vue';
 export default {
   components: {
     Accordion, Panel
   },
   data() {
     return {
       id: 1
     }
   }
 }
</script>

<style>
</style>