<template>
  <section class="mt-25 py-5 px-5 max-w-7xl mx-auto bg-gray-100 rounded-lg">
    <!-- Titre animé -->
    <Motion tag="h1" :initial="{ opacity: 0, y: 40 }" :enter="{ opacity: 1, y: 0, transition: { duration: 0.7 } }"
      class="text-3xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
      Nos créations
    </Motion>
    <Motion tag="p" :initial="{ opacity: 0, y: 40 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }"
      class="text-center text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
      Découvrez quelques-unes de nos plus belles réalisations : mariages, anniversaires, dîners d’entreprise et
      événements privés.
      <br />
      <span class="font-medium text-gray-800">L’escale gourmande</span> personnalise chaque prestation pour rendre votre
      événement vraiment unique !
    </Motion>

    <!-- Cartes animées -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Motion v-for="(creation, i) in creations" :key="i" :initial="{ opacity: 0, y: 40 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.18 } }"
        class="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col group hover:scale-[1.08] hover:shadow-2xl transition-transform duration-500">
        <video v-if="creation.video" :src="creation.video" :alt="creation.alt" class="w-full h-48 object-cover" autoplay
          loop muted playsinline></video>
        <div class="p-5 flex-1 flex flex-col">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">{{ creation.title }}</h2>
          <p class="text-gray-600 mb-4 flex-1">{{ creation.text }}</p>
          <span class="inline-block text-xs px-3 py-1 rounded-full font-semibold" :class="creation.tagColor">
            {{ creation.tag }}
          </span>
        </div>
      </Motion>
    </div>
  </section>
</template>

<script setup>
const creations = [
  {
    title: "Mariage : Sarah & Romain",
    text: "Cocktail dînatoire raffiné pour 100 invités à Paris. Buffet de desserts sur mesure, décoration florale et service attentionné.",
    tag: "Mariage",
    tagColor: "bg-pink-100 text-pink-700",
    video: "https://videos.pexels.com/video-files/20203976/20203976-uhd_2560_1440_30fps.mp4",
    alt: "Buffet de mariage",
  },
  {
    title: "Anniversaire : Emma, 30 ans",
    text: "Soirée méditerranéenne à domicile pour 20 amis : tapas, douceurs et gâteau personnalisé signés L’escale gourmande.",
    tag: "Anniversaire",
    tagColor: "bg-yellow-100 text-yellow-700",
    video: "https://videos.pexels.com/video-files/6206264/6206264-hd_1920_1080_25fps.mp4",
    alt: "Dîner d'anniversaire",
  },
  {
    title: "Déjeuner d'entreprise : Capgemini",
    text: "Déjeuner convivial et healthy pour un séminaire d’équipe. Options végétariennes, jus frais, présentation élégante.",
    tag: "Entreprise",
    tagColor: "bg-blue-100 text-blue-700",
    video: "https://videos.pexels.com/video-files/4170293/4170293-uhd_2732_1440_24fps.mp4",
    alt: "Déjeuner d'entreprise",
  },
]
</script>
