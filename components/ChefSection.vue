<template>
  <section class="bg-white py-24">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <!-- Image animée -->
      <Motion tag="div" :initial="{ opacity: 0, x: -50 }" :enter="{ opacity: 1, x: 0, transition: { duration: 0.8 } }"
        class="w-full md:w-1/2">
        <img src="https://images.unsplash.com/photo-1577219492769-b63a779fac28?auto=format&fit=crop&w=800&q=80"
          alt="Chef L'escale gourmande" class="rounded-2xl shadow-xl w-full object-cover h-[500px]" />
      </Motion>
      <!-- Texte animé -->
      <Motion tag="div" :initial="{ opacity: 0, x: 50 }"
        :enter="{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } }" class="w-full md:w-1/2">
        <h2 class="text-4xl font-bold text-gray-800 mb-6">Notre chef, votre expert</h2>
        <p class="text-gray-700 text-lg mb-4">
          Avec plus de 15 ans d’expérience en cuisine gastronomique et évènementielle, notre chef met toute sa passion
          et son savoir-faire au service de votre événement.
        </p>
        <p class="text-gray-700 text-lg">
          De la conception des menus à la présentation, chaque détail est pensé pour offrir une expérience culinaire
          inoubliable.
        </p>
      </Motion>
    </div>
  </section>
</template>

<script setup>
</script>
