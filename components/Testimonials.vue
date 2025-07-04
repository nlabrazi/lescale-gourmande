<template>
  <section class="bg-gray-50 py-24">
    <div class="max-w-7xl mx-auto px-6">
      <!-- Titre animé -->
      <Motion tag="h2" :initial="{ opacity: 0, y: 40 }" :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
        class="text-4xl font-bold text-center mb-12 text-gray-800">
        Ce que disent nos clients
      </Motion>

      <!-- Carousel -->
      <div class="relative">
        <div class="grid md:grid-cols-3 gap-8 transition-all duration-700 ease-in-out">
          <Motion v-for="(testimonial, index) in visibleTestimonials" :key="index" :initial="{ opacity: 0, y: 40 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 0.15, duration: 0.7 } }"
            class="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-[1.02] transition">
            <div class="flex items-center mb-4">
              <img :src="testimonial.image" alt="avatar" class="w-14 h-14 rounded-full object-cover mr-4" />
              <div>
                <p class="font-semibold text-gray-800">{{ testimonial.name }}</p>
                <div class="flex text-yellow-400 text-sm">
                  <span v-for="n in 5" :key="n">★</span>
                </div>
              </div>
            </div>
            <p class="text-gray-700 text-base leading-relaxed">
              “{{ testimonial.comment }}”
            </p>
          </Motion>
        </div>
        <!-- Pagination -->
        <div class="flex justify-center mt-8 gap-2">
          <button v-for="(n, i) in totalPages" :key="i" class="w-3 h-3 rounded-full transition-all" :class="[
            currentIndex === i ? 'bg-gray-800' : 'bg-gray-300',
            'hover:bg-gray-500'
          ]" @click="currentIndex = i"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { ref, computed, onMounted, onUnmounted } from "vue";

const currentIndex = ref(0);
const testimonialsPerPage = 3;

const testimonials = [
  {
    name: "Julie D.",
    comment:
      "Une expérience incroyable ! Tout était délicieux, raffiné, et le service impeccable.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Thomas G.",
    comment:
      "L’escale gourmande a sublimé notre événement, invités conquis ! Merci au chef.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Fatima K.",
    comment:
      "Un service traiteur élégant, ponctuel, délicieux. Je recommande sans hésiter !",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Léa M.",
    comment:
      "Un sans faute du début à la fin. La présentation des plats est splendide.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Olivier R.",
    comment:
      "Réactivité, qualité, goût : une vraie signature culinaire pour notre mariage.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sophie L.",
    comment:
      "Nos collaborateurs ont été bluffés. Bravo à toute l’équipe de L’escale gourmande !",
    image:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=200&q=80",
  },
];

const totalPages = computed(() =>
  Math.ceil(testimonials.length / testimonialsPerPage),
);

const visibleTestimonials = computed(() => {
  const start = currentIndex.value * testimonialsPerPage;
  return testimonials.slice(start, start + testimonialsPerPage);
});

let interval;
onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % totalPages.value;
  }, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>
