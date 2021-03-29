import { Container } from 'reactstrap';

import React from 'react';
import Slider from 'react-slick';
import Eletrica from '../../assets/services/eletrica.svg';

export default function Slick() {
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
    <Container className="container d-block" id="services">
      <Slider {...settings}>
        <div>
          <div className="services-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
          <a href="/" className="destaque_title">
            ELETRICA
          </a>
        </div>
        <div>
          <div className="services-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
          <a href="/" className="destaque_title">
            ELETRICA
          </a>
        </div>
        <div>
          <div className="services-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
          <a href="/" className="destaque_title">
            ELETRICA
          </a>
        </div>
        <div>
          <div className="services-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
          <a href="/" className="destaque_title">
            ELETRICA
          </a>
        </div>
        <div>
          <div className="services-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
          <a href="/" className="destaque_title">
            ELETRICA
          </a>
        </div>
        <div>
          <div className="services-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
          <a href="/" className="destaque_title">
            ELETRICA
          </a>
        </div>
        <div>
          <div className="services-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={Eletrica} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
          <a href="/" className="destaque_title">
            ELETRICA
          </a>
        </div>
      </Slider>
    </Container>
  );
}
