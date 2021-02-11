<template>
  <Accordion paddingTop="50">
    <Panel> <template v-slot:question>How are you</template> <template v-slot:answer>Billy</template></Panel>
    <Panel>
      <template v-slot:question>How do we code this website?</template>
      <template v-slot:answer>Only Bobb codes it. This website is coded with HTML, CSS, JS and the Vue framework.</template>
    </Panel>
   <Panel>
      <template v-slot:question>Where is the support?</template>
      <template v-slot:answer>There is no support yet.</template>
   </Panel>
  </Accordion>
</template>

<script>
  import Panel from '../components/Panel.vue';
  import Accordion from '../components/Accordion.vue';
  export default {
    components: {
      Accordion, Panel
    }
  }
</script>

<style>

</style>