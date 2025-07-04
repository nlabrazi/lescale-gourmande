<template>
  <section class="bg-gray-100 py-24">
    <div class="max-w-8xl mx-auto px-6">
      <!-- Titre animé -->
      <Motion tag="h2" :initial="{ opacity: 0, y: 30 }" :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="text-4xl font-bold text-center mb-16 text-gray-800">
        Nos services
      </Motion>
      <!-- Cards animées -->
      <div class="grid md:grid-cols-3 gap-12">
        <Motion v-for="(service, index) in services" :key="index" :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 0.18, duration: 0.7 } }"
          class="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-[1.08] transition-transform duration-500 ease-in-out">
          <img :src="service.image" :alt="service.title" class="w-full h-60 object-cover" />
          <div class="p-4">
            <h3 class="text-2xl font-semibold mb-2 text-gray-900">{{ service.title }}</h3>
            <p class="text-gray-700 text-base">{{ service.text }}</p>
          </div>
        </Motion>
      </div>
    </div>
  </section>
</template>

<script setup>


const services = [
  {
    title: "Cocktails & Réceptions",
    text: "Des prestations raffinées pour vos événements privés ou professionnels.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Buffets sur-mesure",
    text: "Une cuisine élégante, créative et adaptée à toutes vos envies.",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Services en entreprise",
    text: "Des formules adaptées à vos besoins pour séminaires, conférences, repas.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
  },
]
</script>

<style scoped>
/* Intersect directive */
</style>
