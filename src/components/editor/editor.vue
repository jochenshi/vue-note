<template>
  <div class="note-editor">
    <div class="title">
      <h2>title:</h2>
      <textarea :value="activeNoteText.title" @input="editTitles"></textarea>
    </div>
    <div class="content">
      <h2>content:</h2>
      <textarea :value="activeNoteText.text" @input="editNotes"></textarea>
    </div>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    computed: {
      activeNoteText () {
        return this.$store.getters.activeNote ? this.$store.getters.activeNote : {text: '', title: ''}
      }
    },
    methods: {
      ...mapActions([
        'editNote', 'editTitle'
      ]),
      editNotes (e) {
        this.editNote(e.target.value)
        // this.$store.dispatch('editNote', e.target.value)
      },
      editTitles (e) {
        this.editTitle(e.target.value)
      }
    }
  }
</script>
