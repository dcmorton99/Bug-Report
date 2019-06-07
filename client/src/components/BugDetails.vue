<template>
  <div class="bug-details">
    <div class="card" v-for="bug in bugs" :key="bug._id">
      <div class="card-header">
        {{bug.title}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{bug.description}}</h5>
        <h5 class="card-text">{{bug.creator}}</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BugDetails",
    mounted() {
      this.$store.dispatch('getBug');
    },
    computed: {
      days() {
        return this.$store.state.bugs;
      }
    }
  };
</script>