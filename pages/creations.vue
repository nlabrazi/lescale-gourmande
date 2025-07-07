<template>
  <section class="max-w-7xl mx-auto py-16 px-4">
    <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">Our Creations</h1>
    <p class="text-center text-gray-500 max-w-2xl mx-auto mb-10">
      Discover a selection of our finest achievements: weddings, birthdays, company dinners, and private events. <br>
      L’escale Gourmande tailors each experience to your needs and makes every event unique!
    </p>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <!-- Exemple carte 1 -->
      <div class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Wedding Buffet" class="w-full h-48 object-cover group-hover:scale-105 transition" />
        <div class="p-5 flex-1 flex flex-col">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">Wedding: Sarah & Romain</h2>
          <p class="text-gray-500 mb-4 flex-1">
            A refined cocktail dinner for 100 guests in Paris. Custom dessert buffet, floral decoration and attentive
            service.
          </p>
          <span class="text-xs text-yellow-600 font-medium">Wedding</span>
        </div>
      </div>
      <!-- Exemple carte 2 -->
      <div class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition">
        <img src="https://images.unsplash.com/photo-1457180147885-7c88d5ba2aab?auto=format&fit=crop&w=600&q=80"
          alt="Birthday Dinner" class="w-full h-48 object-cover group-hover:scale-105 transition" />
        <div class="p-5 flex-1 flex flex-col">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">Birthday: Emma, 30 years</h2>
          <p class="text-gray-500 mb-4 flex-1">
            A Mediterranean feast at home for 20 friends. Tapas, sweets and personalized cake by L’escale Gourmande.
          </p>
          <span class="text-xs text-yellow-600 font-medium">Birthday</span>
        </div>
      </div>
      <!-- Exemple carte 3 -->
      <div class="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
          alt="Corporate Lunch" class="w-full h-48 object-cover group-hover:scale-105 transition" />
        <div class="p-5 flex-1 flex flex-col">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">Corporate Lunch: Capgemini</h2>
          <p class="text-gray-500 mb-4 flex-1">
            Warm and healthy lunch for a company seminar. Vegetarian and vegan options, fresh juices, and beautiful
            presentation.
          </p>
          <span class="text-xs text-yellow-600 font-medium">Company Event</span>
        </div>
      </div>
      <!-- Ajoute d'autres cartes ici... -->
    </div>
  </section>
</template>

<script setup>
</script>
