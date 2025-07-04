<template>
  <div>
    <NavBar />
    <section class="pt-24">
      <ContactForm />
    </section>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import ContactForm from '@/components/ContactForm.vue'
</script>
