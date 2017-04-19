<template>
  <div id="toolbar">
    <i @click="addNote">add</i>
    <i @click="toggleFavourite">favourite</i>
    <i @click="deleteNote">delete</i>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    methods: {
      ...mapActions([
        'addNote', 'toggleFavourite', 'deleteNote'
      ])
    }
  }
</script>
<style>
  #toolbar i{
    display: block;
  }
</style>
