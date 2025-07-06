type NavLink = {
  label: string;
  to: string;
  isNuxtLink?: boolean;
};

export const useNavLinks = (): NavLink[] => [
  { label: 'Accueil', to: '/', isNuxtLink: true },
  { label: 'Événementiel', to: '/', isNuxtLink: true },
  { label: 'Notre histoire', to: '/about-page', isNuxtLink: true },
  { label: 'Sur-mesure', to: '/', isNuxtLink: true },
  { label: 'Contact', to: '/contact-page', isNuxtLink: true }
];
