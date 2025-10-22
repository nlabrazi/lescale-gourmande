<template>
  <section class="mt-15 bg-white text-gray-800 py-20 px-6 max-w-4xl mx-auto leading-relaxed">
    <h1 class="text-3xl font-bold mb-6">Mentions légales</h1>

    <p class="mb-4">
      Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la confiance
      dans l’économie numérique, nous informons les utilisateurs du site <strong>L’escale gourmande</strong> de ce qui
      suit :
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2">Éditeur du site</h2>
    <p>
      Le site <strong>lescalegourmande.fr</strong> est édité par :<br />
      <strong>L’escale gourmande</strong><br />
      Micro-entreprise — SIRET : 123 456 789 00000<br />
      Siège social : 81 quater rue des Champarts, 78520 Limay – France<br />
      Email : <a href="mailto:contact@lescalegourmande.fr"
        class="text-blue-600 underline">contact@lescalegourmande.fr</a>
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2">Responsable de publication</h2>
    <p>Nassim Labrazi</p>

    <h2 class="text-xl font-semibold mt-8 mb-2">Hébergeur</h2>
    <p>
      Le site est hébergé par :<br />
      <strong>Netlify, Inc.</strong><br />
      2325 3rd Street, Suite 296<br />
      San Francisco, California 94107 — USA<br />
      Site : <a href="https://www.netlify.com/" target="_blank" class="text-blue-600 underline">www.netlify.com</a>
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2">Propriété intellectuelle</h2>
    <p>
      L’ensemble des contenus présents sur ce site (textes, images, logo, etc.) est la propriété exclusive de L’escale
      gourmande, sauf mentions contraires, et ne peut être utilisé sans autorisation préalable.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2">Données personnelles</h2>
    <p>
      Aucune donnée personnelle n’est collectée sans votre consentement. Pour toute question relative à vos données,
      contactez-nous par email à <a href="mailto:contact@lescalegourmande.fr"
        class="text-blue-600 underline">contact@lescalegourmande.fr</a>.
    </p>

    <h2 class="text-xl font-semibold mt-8 mb-2">Cookies</h2>
    <p>
      Ce site n’utilise pas de cookies de suivi ou d’analyse. Uniquement des cookies nécessaires au bon fonctionnement
      technique du site peuvent être utilisés.
    </p>

    <p class="mt-12 text-sm text-gray-500">Dernière mise à jour : {{ new Date().toLocaleDateString('fr-FR') }}</p>
  </section>
</template>

<script setup>
</script>
