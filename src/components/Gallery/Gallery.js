import { React } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import Carousell from '../Carousel/Carousell';

export default function Gallery() {
  return (
    <Container id="gallery" className="mt-2">
      <Row>
        <Col className="content-box " xl="5">
          <h1 className="display-4">SERVIÇOS</h1>
          <h1 className="display-4">OBRAS</h1>
          <h1 className="display-4">E REFORMAS</h1>

          <a
            href="https://www.instagram.com/artvogueoficial/"
            target="_blank"
            rel="noreferrer"
          >
            <Button color="secondary">Visite nosso Instagram</Button>
          </a>
        </Col>
        <Col className="align-self-center" xl="7">
          <Carousell />
        </Col>
      </Row>
    </Container>
  );
}
