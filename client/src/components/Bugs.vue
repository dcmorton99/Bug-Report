g<template>
  <div class="row bugs">
    <div class="col-12">
      <ul class="list-group">
        <li class="list-group-item" v-for="bug in bugs" :key="bug._id">
          {{bug.title}} {{bug.description}} <strong>user:</strong>{{bug.creator}}
        </li>
      </ul>
    </div>

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
          creator: ''
        }
      };
    },
    methods: {
      createBug() { //form input require something else?
        this.$store.dispatch('createBug', this.newBug)
      }
    },

    computed: {
      bugs() {
        return this.$store.state.bugs;
      }
    }
  }

</script>

<style>
</style>