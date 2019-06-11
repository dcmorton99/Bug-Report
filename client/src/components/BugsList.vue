<template>
  <div>

    <tr v-for="bug in bugs" :key="bugs._id" @click="selectBug" :class="{closed: bug.closed == true}">
      <router-link :to="{name: 'BugDetails', params: {id: bug._id}}">
        <td>{{bug.title}}</td>
        <td>{{bug.creator}}</td>
        <td>{{bug.description}}</td>
        <td>{{new Date(bug.createdAt).toLocaleDateString()}}</td>
        <td>{{bug.closed}}</td>
      </router-link>
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
  .closed {
    background-color: rgb(211, 183, 130);
    text-decoration: line-through;

  }
</style>