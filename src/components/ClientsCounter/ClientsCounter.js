import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import Plus from 'react-bootstrap-icons/dist/icons/plus';

export default function ClientsCounter() {
  return (
    <Container id="clients-counter">
      <Row>
        <Col className="counter">
          <div className="icon">
            <Plus color="#fe914e" size={96} />
          </div>

          <div className="text"> DE 1000 REFORMAS CONCLUIDAS</div>
        </Col>
      </Row>
    </Container>
  );
}
