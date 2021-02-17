<template>
<section id="profile">
<Tabs>
  <template v-slot:first>First</template>
  <template v-slot:firstContent>First</template>
<template v-slot:otherTabLabels>
  <Tab tabIndex="2">Second</Tab>
  <Tab tabIndex="3">Third</Tab>
  <Tab tabIndex="4">Fourth</Tab>
  <Tab tabIndex="5">Fifth</Tab>
  <Tab tabIndex="6">Sixth</Tab>
  <Tab tabIndex="7">Seventh</Tab>
  <Tab tabIndex="8">Eighth</Tab>
 <Tab tabIndex="9">Ninth</Tab>
  <Tab tabIndex="10">Tenth</Tab>
</template>
<template v-slot:otherTabContent>
<div tabindex="2" class="bb-tab__content">Two</div>
<div tabindex="3" class="bb-tab__content">Three</div>
<div tabindex="4" class="bb-tab__content">Four</div>
<div tabindex="5" class="bb-tab__content">Five</div>
<div tabindex="6" class="bb-tab__content">Six</div>
<div tabindex="7" class="bb-tab__content">Seven</div>
<div tabindex="8" class="bb-tab__content">Eight</div>
<div tabindex="9" class="bb-tab__content">Nine</div>
<div tabindex="10" class="bb-tab__content">Ten</div>

</template>
</Tabs>
</section>
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
  #profile {
    margin-top: 5px;
  }
</style>