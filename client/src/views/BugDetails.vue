<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bug-details">
        <h1>This is the bug details view</h1>

        <div class="card">
          <div class="card-header">
            {{bug.title}}
          </div>
          <div class="card-body">
            <h5 class="card-title">{{bug.description}}</h5>
            <h5 class="card-text">{{bug.creator}}</h5>
            <h5 class="card-text">{{bug.createdAt}}</h5>
          </div>
        </div>
        <notes />
      </div>
    </div>
  </div>
</template>

<script>
  import Notes from '@/components/Notes.vue'

  export default {
    name: "BugDetails",
    mounted() {
      this.$store.dispatch('getBugById', this.$route.params.id);
      this.$store.dispatch('getNotes', this.$route.params.id);

      setTimeout(() => {
        if (!this.bug._id) {
          this.$router.push({ name: "home" });
        }
      }, 3000);
    },

    data() {
      return {};
    },

    computed: {
      bug() {
        return this.$store.state.bug;
      },
      notes() {
        return this.$store.state.notes;
      }
    },

    components: {
      Notes
    }
  };
</script>