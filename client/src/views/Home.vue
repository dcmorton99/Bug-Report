<template>
  <div class="home container-fluid" id="background-image">
    <div class="row text-justify-center">
      <div class="col ">
        <h1>Codeworks Bug Report</h1>
      </div>
    </div>
    <div class="row p-3">
      <h2>Reported Bugs</h2>
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

<style>
  #background-image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
</style>