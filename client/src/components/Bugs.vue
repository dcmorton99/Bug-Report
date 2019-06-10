<template>
  <div class="col-12">
    <h2>What's bugging you?</h2>
    <form @submit.prevent="createBug">
      <input type="text" class="form-control m-2" v-model="newBug.title" placeholder="Title your bug issue">
      <input type="text" class="form-control m-2" v-model="newBug.description"
        placeholder="Please describe the bug the best you can">
      <input type="text" class="form-control m-2" v-model="newBug.creator" placeholder="Let us know who you are">
      <button class="btn btn-danger m-3" type="submit">SUBMIT</button>
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