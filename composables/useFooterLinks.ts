type FooterLink = {
  label: string
  to?: string
  href?: string
  isNuxtLink?: boolean
  target?: string
  rel?: string
}

export const useFooterLinks = (): FooterLink[] => [
  { label: 'Accueil', to: '/', isNuxtLink: true },
  { label: 'Événementiel', to: '/event-page', isNuxtLink: true },
  { label: 'Notre histoire', to: '/about-page', isNuxtLink: true },
  { label: 'Contact', to: '/contact-page', isNuxtLink: true },
  { label: 'Blog', href: 'https://medium.com/@lescalegourmande', isNuxtLink: false, target: '_blank', rel: 'noopener' }
]
