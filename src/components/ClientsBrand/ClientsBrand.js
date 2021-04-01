import { Container } from 'reactstrap';

import React from 'react';
import Slider from 'react-slick';

import jet from '../../assets/companies/jetpizzas.png';
import jac from '../../assets/companies/jac.png';
import leroy from '../../assets/companies/leroy.png';
import lovenna from '../../assets/companies/lovenna.png';
import quadrilatero from '../../assets/companies/quadrilatero.png';
import emacademy from '../../assets/companies/emacademy.png';
import bic from '../../assets/companies/bic.png';
import citroen from '../../assets/companies/citroen.png';
import jaguar from '../../assets/companies/jaguar.png';

export default function ClientsBrand() {
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
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={lovenna} alt="loveena" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={jac} alt="jac" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img
                  src={emacademy}
                  alt="emacademy"
                  className="mx-auto d-block"
                />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={jet} alt="jet-pizzas" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img
                  src={quadrilatero}
                  alt="quadrilatero"
                  className="mx-auto d-block"
                />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={leroy} alt="leroy" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={bic} alt="bic" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={citroen} alt="citroen" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
        <div>
          <div className="brand-item">
            <a href="/" className="destaque">
              <div className="img-container">
                <img src={jaguar} alt="eletica" className="mx-auto d-block" />
              </div>
            </a>
          </div>
        </div>
      </Slider>
    </Container>
  );
}
