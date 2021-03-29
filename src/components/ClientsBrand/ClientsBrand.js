import { Container } from 'reactstrap';

import React from 'react';
import Slider from 'react-slick';
import Eletrica from '../../assets/services/eletrica.svg';

export default function ClientsBrand() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    variableWidth: false,
    slidesToShow: 4,
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
    <Container className="container d-block" id="clients-brand">
      <Slider {...settings}>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
      </Slider>
    </Container>
  );
}
