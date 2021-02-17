<template>
  <Accordion paddingTop="50">
    <Panel> <template v-slot:question>How are you</template> <template v-slot:answer>Billy</template></Panel>
    <Panel>
      <template v-slot:question>ur bad?</template>
      <template v-slot:answer>ye.</template>
    </Panel>
   <Panel>
      <template v-slot:question>lol</template>
      <template v-slot:answer>trash</template>
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