<template>
  <div class="bugs-list">
    <tr v-for="bug in bugs" :key="bugs._id">
      <th scope="row"></th>
      <td>{{bug.title}}</td>
      <td>{{bug.creator}}</td>
      <td>{{bug.description}}</td>
      <td>{{bug.createdAt}}</td>
    </tr>
  </div>
</template>

<script>
  export default {
    name: "BugsList",
    data() {
      return {}
    },
    methods: {
      selectBug() {
        this.$store.dispatch('getBugById', this.bug)
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
  li:hover {
    background-color: yellow;
  }
</style>