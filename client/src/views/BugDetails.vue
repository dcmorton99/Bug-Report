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
        <div class="card" v-for="note in notes" :key="notes._id">
          <div class="card-body">
            <h5 class="card-title">{{note.creator}}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{{note.content}}</h6>

            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Pending</a>
                <a class="dropdown-item" href="#">Completed</a>
                <a class="dropdown-item" href="#">Rejected</a>
              </div>
            </div>
          </div>
        </div>
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