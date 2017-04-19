<template>
  <div id="note-list">
    <div class="note-header">
      <h2>Notes</h2>
      <div>
        <button @click="show='all'">show all</button>
        <button @click="show='favourites'">show favourite</button>
      </div>
    </div>
    <div class="container">
      <div>
        <a v-for="item in notes">
          <h4 class="title" @click="updateActiveNote(item)">{{item.title}}</h4>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        show: 'all'
      }
    },
    computed: {
      notes () {
        if (this.show === 'all') {
          return this.$store.getters.notes
        } else if (this.show === 'favourites') {
          return this.$store.getters.notes.filter(note => note.favourite)
        }
      }
    },
    methods: {
      ...mapActions([
        'updateNote'
      ]),
      updateActiveNote (note) {
        console.log(note)
        this.updateNote(note)
      }
    }
  }
</script>
