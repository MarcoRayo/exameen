<script setup>
import router from "./router/index"
</script>

<template>
  <div id="app">
    <header>
      <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand href="#">Examen Rayo</b-navbar-brand>              
      </b-navbar>
    </header>
    <div class="row">
      <div class="col-md-12 mx-auto text-center">
        <router-view></router-view>
      </div>
    </div>    
  </div>
</template>

<style scoped></style>
