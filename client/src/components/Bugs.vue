<template>
  <div class="col-12">
    <h2>What's bugging you?</h2>
    <form @submit.prevent="createBug">
      <input type="text" class="form-control" v-model="newBug.title" placeholder="Title your bug issue">
      <input type="text" class="form-control" v-model="newBug.description"
        placeholder="Please describe the bug the best you can">
      <input type="text" class="form-control" v-model="newBug.creator" placeholder="Let us know who you are">
      <button class="btn btn-danger" type="submit">SUBMIT</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Bugs",
    data() {
      return {
        newBug: {
          title: '',
          description: '',
          creator: '',
          _id: ''
        }
      };
    },
    methods: {
      createBug() {
        this.$store.dispatch('createBug', this.newBug)
      },


    }
  }
</script>