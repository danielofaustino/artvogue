import { React, useEffect, useState } from 'react';
import { Container, Col, Row, UncontrolledCarousel } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { servicesItens } from '../data';

export default function ServicesBox() {
  const { id } = useParams();

  const [items, setItems] = useState([]);

  function handleService(x) {
    setItems(x);
  }

  useEffect(() => {
    const service = servicesItens[id - 1].images.map((x) => ({
      src: x,
      altText: servicesItens[id - 1].alt,
      caption: '',
      header: '',
      key: servicesItens[id - 1].id,
    }));

    handleService(service);
  }, [id]);

  return (
    <Container id="gallery" className="mt-2">
      <Row>
        <Col className="content-box " xl="5">
          <h1 className="display-4">{servicesItens[id - 1].title}</h1>

          <h5>{servicesItens[id - 1].description}</h5>
        </Col>
        <Col className="align-self-center" xl="7">
          <UncontrolledCarousel items={items} />
        </Col>
      </Row>
    </Container>
  );
}
