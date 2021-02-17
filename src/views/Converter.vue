<template>
  <label for="convertFile">Convert a file to base 64.      </label>
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
      const encode = btoa(file.value);
      document.querySelector("#converted").value = encode;
    }
  }
}
</script>

<style>

</style>