<template>
  <div class="wrapper">
    <Header />
    
    <main class="content">
      <RouterView />
    </main>
    
    <Footer />
  </div>
</template>

<style>
/* Šis nodrošina, ka wrapper aizņem visu ekrāna augstumu */
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Šis liek .content "izplesties" un izstumt Footer uz leju */
.content {
  flex: 1;
}
</style>

<script setup>
import Header from './components/header.vue'
import Footer from './components/Footer.vue' // 1. Importējam
</script>