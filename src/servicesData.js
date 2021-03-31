/* eslint-disable import/prefer-default-export */
// importing assets
import Revestimentos from './assets/services/revestimentos.svg';
import Eletrica from './assets/services/eletrica.svg';
import Pintura from './assets/services/pintura.svg';
import Hidraulica from './assets/services/hidraulica.svg';
import Iluminacao from './assets/services/iluminacao.svg';

import foto from './assets/gallery/gallery1.png';

export const servicesItens = [
  {
    id: 1,
    title: 'Revestimentos',
    iconSrc: Revestimentos,
    alt: 'Revestimentos',
    href: `/services/`,
    form: 'https://www.google.com.br',
    description: [
      'Instalação Elétrica Residencial',
      'Instalação Eletrica Predial',
      'Instalação Eletrica Comercial',
    ],
    images: [foto, foto, foto],
  },
  {
    id: 2,
    title: 'Elétrica',
    iconSrc: Eletrica,
    alt: 'Elétrica',
    href: `/services/`,
  },
  {
    id: 3,
    title: 'Pintura',
    iconSrc: Pintura,
    alt: 'Pintura',
    href: `/services/`,
  },
  {
    id: 4,
    title: 'Hidraulica',
    iconSrc: Hidraulica,
    alt: 'Hidraulica',
    href: `/services/`,
  },
  {
    id: 5,
    title: 'Iluminação',
    iconSrc: Iluminacao,
    alt: 'Iluminação',
    href: `/services/`,
  },
  {
    id: 6,
    title: 'Eletrica',
    iconSrc: Eletrica,
    alt: 'Eletrica',
    href: `/services/`,
  },
  {
    id: 7,
    title: 'Eletrica',
    iconSrc: Eletrica,
    alt: 'Eletrica',
    href: `/services/`,
  },
];
