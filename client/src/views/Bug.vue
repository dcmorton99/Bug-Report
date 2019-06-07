<template>
  <div class="home container-fluid">

    <bug-details />

  </div>
</template>

<script>
  import BugDetails from '@/components/BugDetails.vue'


  export default {
    name: 'bug',
    mounted() {
      this.$store.dispatch('getBug');
    },
    components: {
      BugDetails,
    }
  }
</script>