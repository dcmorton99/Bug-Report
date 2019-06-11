<template>
  <div class="col-12">
    <h2>Add a note:</h2>
    <form @submit.prevent="createNote">
      <input type="text" class="form-control" v-model="newNote.creator" placeholder="Let us know who you are">
      <input type="text" class="form-control" v-model="newNote.content" placeholder="What would you like us to know?">
      <button class="btn btn-danger" type="submit">Add a note</button>
    </form>

    <div class="card" v-for="note in notes" :key="notes._id">
      <div class="card-body">
        <h5 class="card-title">{{note.creator}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{note.content}}</h6>

        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
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
</template>

<script>
  export default {
    name: 'Notes',
    data() {
      return {
        newNote: {
          creator: '',
          content: '',
          flagged: 'pending',
          bug: this.$route.params.id

        }
      };
    },
    methods: {
      createNote() {
        this.$store.dispatch('createNote', this.newNote)
      },
    }
  }
</script>