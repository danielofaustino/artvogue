import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function About() {
  return (
    <Container id="about">
      <Row>
        <Col className="about-content my-5">
          <h1>SOBRE NÓS</h1>
          <p>
            Somos uma empresa especializada nos mais diversos tipos de reformas
            (apartamentos, casas, escritórios, consultórios, lojas e comércio em
            geral). São mais de 10 anos de experiência e mais de 20.000m2 de
            obras realizadas.
          </p>
        </Col>
      </Row>
    </Container>
  );
}
