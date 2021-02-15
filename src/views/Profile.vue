<template>

<Tabs>
  
  <template v-slot:first>First</template>
<template v-slot:other>
  <Tab tabIndex="1">Second</Tab>
  <Tab tabIndex="2">Third</Tab>
  <Tab tabIndex="3">Fourth</Tab>
</template>
  </Tabs>

</template>

<script>
  import Tabs from '../components/Tabs.vue';
  import Tab from '../components/Tab.vue';
  export default {
    name: 'Profile',
    components: {
      Tabs, Tab
    }
  }
</script>

<style>

</style>