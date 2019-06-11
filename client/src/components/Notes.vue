<template>
  <div class="col-12">
    <h2>Add a note:</h2>
    <form @submit.prevent="createNote">
      <input type="text" class="form-control" v-model="newNote.creator" placeholder="Let us know who you are">
      <input type="text" class="form-control" v-model="newNote.content" placeholder="What would you like us to know?">
      <button class="btn btn-danger m-3" type="submit">Add a note</button>
    </form>
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