<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Look at What's Bugging Everyone:</h1>
        <bugs-list />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <bug />
      </div>
    </div>
    <img alt="Vue logo" src="../assets/logo.png">

  </div>
</template>

<script>
  import Bug from '@/components/Bug.vue'
  import BugsList from '@/components/BugsList.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getBugs');
    },
    components: {
      BugsList,
      Bug

    }
  }
</script>