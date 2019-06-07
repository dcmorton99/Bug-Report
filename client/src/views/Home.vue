<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h2>Reported Bugs:</h2>
      </div>
    </div>
    <bugs />

  </div>
</template>

<script>
  import Bugs from '@/components/Bugs.vue'


  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('getBugs');
    },
    components: {
      Bugs,
    }
  }
</script>