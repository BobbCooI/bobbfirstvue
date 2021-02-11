<template>
  <label for="convertFile">Convert a file to base 64.</label>
  <input id="convertFile" type="file">
  <input @click="convert" type="submit" value="submit">
  <div>
    <input id="converted" readonly>
  </div>
</template>

<script>
export default {
  methods: {
    convert() {
      let file = document.querySelector("#convertFile").files[0];
      console.log(file)
      const encode = btoa(file.value);
      console.log(encode);
      document.querySelector("#converted").value = encode;
    }
  }
}
</script>

<style>

</style>