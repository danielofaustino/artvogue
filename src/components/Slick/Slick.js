import { Container } from 'reactstrap';
import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { dataBase } from '../../data';

export default function Slick() {
  const { services } = dataBase[0];

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
        breakpoint: 1199,
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
          <div key={`Slider-${x.id}`}>
            <div className="services-item">
              <Link to={x.href}>
                <div className="img-container">
                  <img
                    src={x.iconSrc}
                    alt={x.alt}
                    Style="height:109px;width:120px"
                    className="mx-auto d-block"
                  />
                </div>
              </Link>
            </div>
            <Link to={x.href} className="destaque_title">
              {x.title.toUpperCase()}
            </Link>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
