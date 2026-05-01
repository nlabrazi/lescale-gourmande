import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars, faEnvelope, faPhone, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineNuxtPlugin } from "#app";

library.add(faBars, faTimes, faEnvelope, faPhone, faFacebook, faInstagram, faTwitter);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
