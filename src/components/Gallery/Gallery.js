import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import Carousell from '../Carousel/Carousell';

const Gallery = () => (
  <>
    <Container>
      <Row>
        <Col xl="5">
          <Jumbotron>
            <p className="display-4">SERVIÇOS</p>
            <p className="display-4">OBRAS</p>
            <p className="display-4">E REFORMAS</p>
            <p className="lead">
              <Row>
                <Col>
                  <Button color="secondary">Orçamentos</Button>
                </Col>
                <Col>
                  <Button color="secondary">Portifólio</Button>
                </Col>
              </Row>
            </p>
          </Jumbotron>
        </Col>
        <Col xl="7">
          <Carousell />
        </Col>
      </Row>
    </Container>
  </>
);

export default Gallery;
