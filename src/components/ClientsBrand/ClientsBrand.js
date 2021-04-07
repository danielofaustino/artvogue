import { Container } from 'reactstrap';

import React from 'react';
import Slider from 'react-slick';
import { dataBase } from '../../data';

export default function ClientsBrand() {
  const { clients } = dataBase[0];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
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
          dots: false,
        },
      },
    ],
  };
  return (
    <Container className="container d-block my-2" id="clients-brand">
      <Slider {...settings}>
        {clients.map((x) => (
          <div key={`Clients-${x.id}`}>
            <div className="clients-brand__item">
              <div className="clients-brand__img-container">
                <img src={x.src} alt={x.alt} className="mx-auto d-block" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
