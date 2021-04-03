/* eslint-disable import/prefer-default-export */

// importing icons
import Revestimentos from './assets/services/revestimentos.svg';
import Eletrica from './assets/services/eletrica.svg';
import Pintura from './assets/services/pintura.svg';
import Hidraulica from './assets/services/hidraulica.svg';
import Iluminacao from './assets/services/iluminacao.svg';
import Drywall from './assets/services/drywall.svg';
import Obra from './assets/services/obra.svg';
import Vidros from './assets/services/vidros e espelhos.svg';
import Climatizacao from './assets/services/climatização.svg';
import Marmoraria from './assets/services/marmoraria.svg';

// importing services-images
import espelho1 from './assets/imgservices/espelho-1.jpg';
import espelho2 from './assets/imgservices/espelho-2.jpeg';

import climatizacao1 from './assets/imgservices/climatizacao-1.jpg';
import climatizacao2 from './assets/imgservices/climatizacao-2.jpg';
import climatizacao3 from './assets/imgservices/climatizacao-3.jpg';

import eletrica1 from './assets/imgservices/eletrica-1.jpg';
import eletrica2 from './assets/imgservices/eletrica-2.jpg';
import eletrica3 from './assets/imgservices/eletrica-3.jpg';

import iluminacao1 from './assets/imgservices/iluminacao-1.jpeg';
import iluminacao2 from './assets/imgservices/iluminacao-2.jpeg';

import hidraulica1 from './assets/imgservices/hidraulica-1.jpg';

import pintura1 from './assets/imgservices/pintura-1.jpg';
import pintura2 from './assets/imgservices/pintura-2.jpg';

import gesso1 from './assets/imgservices/gesso-1.jpg';
import gesso2 from './assets/imgservices/gesso-2.jpg';
import gesso3 from './assets/imgservices/gesso-3.jpg';

import pisos1 from './assets/imgservices/pisos-1.JPG';
import pisos2 from './assets/imgservices/pisos-2.JPG';

import marmoraria1 from './assets/imgservices/marmoraria-1.jpg';
import marmoraria2 from './assets/imgservices/marmoraria-2.jpg';
import marmoraria3 from './assets/imgservices/marmoraria-3.jpg';

// importing galley images

import gallery1 from './assets/gallery/gallery1.jpg';
import gallery2 from './assets/gallery/gallery2.jpeg';
import gallery3 from './assets/gallery/gallery3.jpeg';
import gallery4 from './assets/gallery/gallery4.jpg';
import gallery5 from './assets/gallery/gallery5.jpg';

// importing clients images:

import clients1 from './assets/companies/lovenna.png';
import clients2 from './assets/companies/jac.png';
import clients3 from './assets/companies/emacademy.png';
import clients4 from './assets/companies/jetpizzas.png';
import clients5 from './assets/companies/quadrilatero.png';
import clients6 from './assets/companies/leroy.png';
import clients7 from './assets/companies/bic.png';
import clients8 from './assets/companies/citroen.png';
import clients9 from './assets/companies/jaguar.png';

export const dataBase = [
  {
    services: [
      {
        id: 1,
        title: 'Climatização',
        iconSrc: Climatizacao,
        alt: 'Climatização',
        href: `/services/1`,
        form: 'https://www.google.com.br',
        description:
          'Temos uma equipe especializada em instalação, conserto, manutenção preventiva e corretiva de ar-condicionado nos segmentos do ramo industrial e residencial.',
        images: [climatizacao1, climatizacao2, climatizacao3],
      },

      {
        id: 2,
        title: 'Elétrica',
        iconSrc: Eletrica,
        alt: 'Elétrica',
        href: `/services/2`,
        form: 'https://www.google.com.br',
        description:
          'Serviços especializados de instalação, manutenção e reparo na Elétrica Residencial, Comercial e Predial.',
        images: [eletrica1, eletrica2, eletrica3],
      },
      {
        id: 3,
        title: 'Iluminação',
        iconSrc: Iluminacao,
        alt: 'Iluminação',
        href: `/services/3`,
        form: 'https://www.google.com.br',
        description:
          'Fazemos o planejamento e execução de iluminação, para valorizar a decoração e a arquitetura do seu projeto. Fazendo com que cada ambiente transmita conforto e harmonia.',
        images: [iluminacao1, iluminacao2],
      },

      {
        id: 4,
        title: 'Hidráulica',
        iconSrc: Hidraulica,
        alt: 'Hidráulica',
        href: `/services/4`,
        form: 'https://www.google.com.br',
        description:
          'Serviços para o sistema de abastecimento, distribuição e escoamento de água fria e quente; instalações de esgoto sanitário, águas pluviais e sistemas de combate a incêndio.',
        images: [hidraulica1],
      },
      {
        id: 5,
        title: 'Pintura',
        iconSrc: Pintura,
        alt: 'Pintura',
        href: `/services/5`,
        form: 'https://www.google.com.br',
        description:
          'Pintura de alto padrão que segue as mais diversas tendências do mercado para pintura predial, comercial e residencial.',
        images: [pintura1, pintura2],
      },

      {
        id: 6,
        title: 'Drywall',
        iconSrc: Drywall,
        alt: 'Drywall',
        href: `/services/6`,
        form: 'https://www.google.com.br',
        description:
          'Nossos serviços com gesso vão desde a construção de paredes e forros até instalação de sancas, elaboração de móveis, expositores ou placas de gesso 3D.',
        images: [gesso1, gesso2, gesso3],
      },
      {
        id: 7,
        title: 'Obras',
        iconSrc: Obra,
        alt: 'Obras',
        href: `/services/7`,
        form: 'https://www.google.com.br',
        description:
          'Temos uma equipe completa e especializada para tirar a sua reforma do papel.',
        images: [gallery1],
      },
      {
        id: 8,
        title: 'Vidros e Espelhos',
        iconSrc: Vidros,
        alt: 'Vidros e Espelhos',
        href: `/services/8`,
        form: 'https://www.google.com.br',
        description:
          'Produção e instalação de box para banheiro, guarda corpo, sacadas, janelas de vidro, portas e divisórias ou vidros e espelhos no geral sob medida.',
        images: [espelho1, espelho2],
      },
      {
        id: 9,
        title: 'Revestimentos',
        iconSrc: Revestimentos,
        alt: 'Revestimentos',
        href: `/services/9`,
        form: 'https://www.google.com.br',
        description:
          'Instalação de pisos e revestimentos em diversos tipos de superfícies: piscinas, fachadas, balcões, paredes, halls, varandas, áreas comuns externas ou internas. Além de revestimentos para comércios, restaurantes e estabelecimentos comerciais.',

        images: [pisos1, pisos2],
      },

      {
        id: 10,
        title: 'Marmoraria',
        iconSrc: Marmoraria,
        alt: 'Marmoraria',
        href: `/services/10`,
        form: 'https://www.google.com.br',
        description:
          'Trabalhamos com uma grande diversidade e tonalidades de pedras nacionais e importadas.',
        images: [marmoraria1, marmoraria2, marmoraria3],
      },
    ],
    gallery: [
      {
        src: gallery1,
        altText: 'Slide 1',
        caption: '',
        header: '',
        key: '1',
      },
      {
        src: gallery2,
        altText: 'Slide 2',
        caption: '',
        header: '',
        key: '2',
      },
      {
        src: gallery3,
        altText: 'Slide 3',
        caption: '',
        header: '',
        key: '3',
      },
      {
        src: gallery4,
        altText: 'Slide 4',
        caption: '',
        header: '',
        key: '4',
      },
      {
        src: gallery5,
        altText: 'Slide 5',
        caption: '',
        header: '',
        key: '5',
      },
    ],
    clients: [
      {
        src: clients1,
        alt: 'loveena',
        key: '1',
      },
      {
        src: clients2,
        alt: 'jac-motors',
        key: '2',
      },
      {
        src: clients3,
        alt: 'em-academy',
        key: '3',
      },
      {
        src: clients4,
        alt: 'jetpizzas',
        key: '4',
      },
      {
        src: clients5,
        alt: 'quadrilatero',
        key: '5',
      },
      {
        src: clients6,
        alt: 'leroy-merlin',
        key: '6',
      },
      {
        src: clients7,
        alt: 'bic',
        key: '7',
      },
      {
        src: clients8,
        alt: 'citroen',
        key: '8',
      },
      {
        src: clients9,
        alt: 'jaguar',
        key: '9',
      },
    ],
  },
];
