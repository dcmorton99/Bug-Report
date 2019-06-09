<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bug-details">
        <h1>This is the bug details view</h1>

        <div class="card" v-for="bug in bugs" :key="bug._id">
          <div class="card-header">
            {{bug.title}}
          </div>
          <div class="card-body">
            <h5 class="card-title">{{bug.description}}</h5>
            <h5 class="card-text">{{bug.creator}}</h5>
            <h5 class="card-text">{{bug.createdAt}}.toLocalDateString()</h5>
            <button class="btn btn-primary" @click="addNote">Go somewhere</button>
          </div>
        </div>
        <notes />
      </div>
    </div>
  </div>
</template>

<script>


  export default {
    name: "BugDetails",
    props: ["id"],
    mounted() {
      this.$store.dispatch('getBugById', id);
    },
    data() {
      return {};
    },
    computed: {
      bugs() {
        return this.$store.state.bug;
      }
    },
    methods: {
      addNote() {

      }
    }
  };
</script>