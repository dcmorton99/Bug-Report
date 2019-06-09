<template>
  <div class="col-12">
    <h2>Add a note:</h2>
    <form @submit.prevent="createNote">
      <input type="text" class="form-control" v-model="newNote.creator" placeholder="Let us know who you are">
      <input type="text" class="form-control" v-model="newNote.content" placeholder="What would you like us to know?">
      <button class="btn btn-danger" type="submit">SUBMIT</button>
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
          flagged: //no idea what to put here...
        }
      };
    }
  }
</script>