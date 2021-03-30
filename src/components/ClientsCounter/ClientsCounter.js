import React from 'react';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'reactstrap';
import Plus from 'react-bootstrap-icons/dist/icons/plus';

export default function ClientsCounter() {
  return (
    <Container id="clients-counter" className="mt-2 mb-5">
      <Row>
        <Col className="counter">
          <div className="icon">
            <Plus color="#fe914e" size={85} />
          </div>

          <div className="text">
            DE{' '}
            <b>
              <CountUp delay={3} duration={5} end={1000} />
            </b>{' '}
            REFORMAS CONCLUIDAS
          </div>
        </Col>
      </Row>
    </Container>
  );
}
