<template>
  <div id="toolbar">
    <i @click="addOne"></i>
    <i @click="toggleFavourite"></i>
    <i @click="deleteNote"></i>
  </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    methods: {
      ...mapActions([

      ]),
      addOne () {
        this.$store
      }
    }
  }
</script>
