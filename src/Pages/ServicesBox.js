import React from 'react';
import { Container, Col, Row, Button } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Carousell from '../components/Carousel/Carousell';

// import Eletrica from '../../assets/services/eletrica.svg';

export default function ServicesBox() {
  const { title } = useParams();

  return (
    <Container id="gallery" className="mt-2">
      <Row>
        <Col className="content-box " xl="5">
          <h1 className="display-4">{title}</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <Button color="secondary">Orçamentos</Button>
        </Col>
        <Col className="align-self-center" xl="7">
          <Carousell />
        </Col>
      </Row>
    </Container>
  );
}
