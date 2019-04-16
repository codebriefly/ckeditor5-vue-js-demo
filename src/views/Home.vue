<template>
  <div class="home">
    <div class="align-center">
      <img class="align-center" alt="Vue logo" src="../assets/logo.png" width="150"><br/>
      <h1 class="title">CKEditor 5 Vue Js Demo</h1>
    </div>
    <hr>
    <editor />
  </div>
</template>

<style>
.align-center { text-align: center; }
h1.title { font-size: 40px;font-weight: bold; }
.home { margin-top:40px; }
</style>

<script>
// @ is an alias to /src
import editor from '@/components/editor'
export default {
  name: 'home',
  components: {
    editor
  }
}
</script>
