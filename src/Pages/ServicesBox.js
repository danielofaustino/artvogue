import { React, useEffect, useState } from 'react';
import { Container, Col, Row, Button, UncontrolledCarousel } from 'reactstrap';
import { useParams } from 'react-router-dom';

import { servicesItens } from '../servicesData';

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
          <ul>
            {' '}
            {servicesItens[id - 1].description.map((x) => (
              <li>{x}</li>
            ))}
          </ul>

          <Button href={servicesItens[id - 1].form} color="secondary">
            Orçamentos
          </Button>
        </Col>
        <Col className="align-self-center" xl="7">
          <UncontrolledCarousel items={items} />
        </Col>
      </Row>
    </Container>
  );
}
