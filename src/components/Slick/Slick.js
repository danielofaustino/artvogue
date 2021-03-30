import { Container } from 'reactstrap';

import React from 'react';
import Slider from 'react-slick';

// importing assets
import Revestimentos from '../../assets/services/revestimentos.svg';
import Eletrica from '../../assets/services/eletrica.svg';
import Pintura from '../../assets/services/pintura.svg';
import Hidraulica from '../../assets/services/hidraulica.svg';
import Iluminacao from '../../assets/services/iluminacao.svg';

export default function Slick() {
  const services = [
    {
      title: 'Revestimentos',
      src: Revestimentos,
      alt: 'Revestimentos',
      href: '/',
    },
    {
      title: 'Elétrica',
      src: Eletrica,
      alt: 'Elétrica',
      href: '/',
    },
    {
      title: 'Pintura',
      src: Pintura,
      alt: 'Pintura',
      href: '/',
    },
    {
      title: 'Hidraulica',
      src: Hidraulica,
      alt: 'Hidraulica',
      href: '/',
    },
    {
      title: 'Iluminação',
      src: Iluminacao,
      alt: 'Iluminação',
      href: '/',
    },
    {
      title: 'Eletrica',
      src: Eletrica,
      alt: 'Eletrica',
      href: '/',
    },
    {
      title: 'Eletrica',
      src: Eletrica,
      alt: 'Eletrica',
      href: '/',
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    variableWidth: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <Container className="container my-5" id="services">
      <Slider {...settings}>
        {services.map((x) => (
          <div>
            <div className="services-item">
              <a href={x.href} className="destaque">
                <div className="img-container">
                  <img
                    src={x.src}
                    alt={x.alt}
                    Style="height:109px;width:120px"
                    className="mx-auto d-block"
                  />
                </div>
              </a>
            </div>
            <a href="/" className="destaque_title">
              {x.title.toUpperCase()}
            </a>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
