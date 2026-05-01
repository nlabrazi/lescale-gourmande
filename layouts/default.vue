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
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
</script>
