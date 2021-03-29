import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Carousell from '../Carousel/Carousell';

const Gallery = () => (
  <div id="gallery">
    <Container>
      <Row>
        <Col className="content-box align-self-center" xl="5">
          <h1 className="display-4">SERVIÇOS</h1>
          <h1 className="display-4">OBRAS</h1>
          <h1 className="display-4">E REFORMAS</h1>

          <Button color="secondary">Orçamentos</Button>

          <Button color="secondary">Portifólio</Button>
        </Col>
        <Col className="align-self-center" xl="7">
          <Carousell />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Gallery;
