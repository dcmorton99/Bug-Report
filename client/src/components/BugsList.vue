<template>
  <div class="bugs-list">

  </div>
</template>

<script>


  export default {
    name: "BugsList",
    data() {
      return {};
    },
    computed: {
      bugs() {
        return this.$store.state.bugs;
      }
    }

  }
</script>

<style></style>