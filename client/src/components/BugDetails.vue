<template>
  <div class="bug-details">
    <div class="card" v-for="bug in bugs" :key="bug._id">
      <div class="card-header">
        {{bug.title}}
      </div>
      <div class="card-body">
        <h5 class="card-title">{{bug.description}}</h5>
        <h5 class="card-text">{{bug.creator}}</h5>
        <button class="btn btn-primary" @click="addNote">Go somewhere</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BugDetails",
    props: ["id"],
    mounted() {
      this.$store.dispatch('getBugById', this.id);
    },
    data() {
      return {};
    },
    computed: {
      days() {
        return this.$store.state.bug;
      }
    },
    methods: {
      addNote() {

      }
    }
  };
</script>