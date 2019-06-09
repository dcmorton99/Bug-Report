<template>
  <div class="home container-fluid">
    <div class="row align content center">
      <h1>Reported Bugs</h1>
      <table class="table table-hover">
        <tbody>
          <bugs-list />
        </tbody>
      </table>
    </div>
    <div class="row">
      <bugs />
    </div>
  </div>
</template>

<script>
  import Bugs from '@/components/Bugs.vue'
  import BugsList from '@/components/BugsList.vue'



  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getBugs');
    },
    components: {
      Bugs,
      BugsList
    }
  }
</script>