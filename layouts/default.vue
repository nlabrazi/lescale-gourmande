<template>
  <div class="relative">
    <NavBar />

    <main>
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
</script>
