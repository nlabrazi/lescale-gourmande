<template>
  <section class="bg-gray-100 py-20 px-6">
    <div class="max-w-3xl mx-auto bg-white shadow-xl rounded-lg p-8">
      <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">Demande de devis</h2>

      <form class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700">Nom complet</label>
          <input type="text" v-model="form.name" class="mt-1 input-field text-gray-900" placeholder="Votre nom" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" v-model="form.email" class="mt-1 input-field text-gray-900" placeholder="Votre email" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Téléphone</label>
          <input type="tel" v-model="form.phone" class="mt-1 input-field text-gray-700"
            placeholder="ex : 06 12 34 56 78" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Type d’événement</label>
          <select v-model="form.eventType" class="mt-1 input-field text-gray-900">
            <option disabled value="">Sélectionnez un type</option>
            <option>Anniversaire</option>
            <option>Mariage</option>
            <option>Événement d’entreprise</option>
            <option>Autre</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Vous êtes</label>
          <div class="flex gap-4 mt-2">
            <label class="flex items-center gap-2">
              <input type="radio" value="Particulier" v-model="form.status" />
              <span class="text-gray-700">Particulier</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" value="Entreprise" v-model="form.status" />
              <span class="text-gray-700">Entreprise</span>
            </label>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Nombre d’invités</label>
          <input type="number" v-model="form.guests" class="mt-1 input-field text-gray-900" min="1"
            placeholder="ex : 50" />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Thème / Spécialité culinaire</label>
          <select v-model="form.theme" class="mt-1 input-field text-gray-900">
            <option disabled value="">Choisissez une spécialité</option>
            <option>Marocain</option>
            <option>Méditerranéen</option>
            <option>Asiatique</option>
            <option>Mix voyage</option>
          </select>
        </div>

        <div class="flex items-center">
          <label class="flex items-center gap-2">
            <input type="checkbox" v-model="form.callback" />
            <span class="text-gray-700">Je souhaite être recontacté</span>
          </label>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Message complémentaire</label>
          <textarea v-model="form.message" rows="4" class="mt-1 input-field text-gray-900"
            placeholder="Vos attentes ou précisions..."></textarea>
        </div>

        <div class="text-center pt-4">
          <button type="submit" @click.prevent="submitForm"
            class="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const form = reactive({
  name: "",
  email: "",
  phone: "",
  eventType: "",
  status: "",
  guests: "",
  theme: "",
  callback: false,
  message: "",
});

const submitForm = async () => {
  try {
    const res = await fetch("/api/send-quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      alert("Message envoyé avec succès");
      // Reset du formulaire après succès (optionnel)
      form.name = "";
      form.email = "";
      form.phone = "";
      form.eventType = "";
      form.status = "";
      form.guests = "";
      form.theme = "";
      form.callback = false;
      form.message = "";
    } else {
      alert("Erreur lors de l’envoi");
    }
  } catch (error) {
    console.error("Erreur envoi Telegram :", error);
    alert("Erreur lors de l’envoi");
  }
};
</script>



<style>
.input-field {
  width: 100%;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  outline: none;
  background-color: white;
  transition: border-color 0.3s ease;
}

.input-field:focus {
  border-color: #facc15;
  box-shadow: 0 0 0 3px rgba(234, 179, 8, 0.2);
}

/* Radios & Checkboxes */
input[type='radio'],
input[type='checkbox'] {
  accent-color: #facc15;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
}

/* Select dropdown fix */
select.input-field {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg fill='black' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
}
</style>
