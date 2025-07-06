<template>
  <section class="relative w-full h-screen bg-black text-white overflow-hidden">
    <!-- Image de fond plein écran -->
    <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1920&q=80"
      alt="background" class="absolute inset-0 w-full h-full object-cover z-0" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 z-10"></div>

    <!-- Contenu centré -->
    <div class="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
      <h1 class="text-4xl md:text-6xl font-light uppercase tracking-wide">
        L'escale gourmande
      </h1>
      <p class="mt-4 text-lg md:text-xl font-light">
        Goutez le monde en 5 bouchées <br>
        Créons ensemble l'événement qui vous ressemble
      </p>
      <NuxtLink to="/contact-page">
        <button class="mt-6 px-6 py-3 border border-white text-white hover:bg-white hover:text-gray-800 transition">
          Demander un devis
        </button>
      </NuxtLink>
    </div>
  </section>
</template>
