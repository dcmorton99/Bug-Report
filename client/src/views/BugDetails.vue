<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bug-details">
        <div class="card">
          <div class="card-header">
            Bug Details
          </div>
          <div class="card-body">
            <h5 class="card-title">{{bug.title}}</h5>
            <hr />
            <h5 class="card-text">{{bug.description}}</h5>
            <h5 class="card-text">{{bug.creator}}</h5>
            <h5 class="card-text">{{new Date(bug.createdAt).toLocaleDateString()}}</h5>
            <h5 class="card-text" v-if="bug.closed == false">Status: Open</h5>
            <h5 class="card-text" v-else>Status: Closed</h5>
            <button class="btn btn-success" @click="closeBug" v-show="bug.closed == false">Fixed?</button>
          </div>
        </div>
        <div v-if="bug.closed === false">
          <notes />
          <div class="row">
            <div class="col-4">
              <div class="card m-3" v-for="note in notes" :key="notes._id">
                <div class="card-body">
                  <h5 class="card-title">{{note.creator}}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{{note.content}}</h6>
                  <h6>Status: {{note.flagged}}</h6>
                  <button class="btn-sm btn-warning m-2" @click="deleteNote(note._id)">Delete Note</button>
                </div>
              </div>
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

    methods: {
      closeBug() {
        this.$store.dispatch('closeBug', this.$route.params.id)
      },

      deleteNote(id) {

        this.$store.dispatch('deleteNote', id)
      }
    },

    components: {
      Notes
    }
  };
</script>