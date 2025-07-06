import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faEnvelope, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faBars, faTimes, faEnvelope, faPhone, faFacebook, faInstagram, faTwitter)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
