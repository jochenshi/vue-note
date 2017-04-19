<template>
  <div class="hello">
    <tool-bar></tool-bar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<script>
  import ToolBar from './toolbar/main.vue'
  import NoteList from './notelist/noteList.vue'
  import Editor from './editor/editor.vue'
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      ToolBar,
      NoteList,
      Editor
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
