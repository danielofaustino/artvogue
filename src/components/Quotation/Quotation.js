import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import logo from '../../assets/logo3.png';

export default function Quotation() {
  return (
    <Container className="mt-5">
      <Row>
        <Col cl={12}>
          <Jumbotron id="quotation">
            <img src={logo} alt="logo" height="68px" />
            <h3>SOLICITE UM ORÇAMENTO</h3>

            <p>
              <Button variant="primary">Orçamento</Button>
            </p>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}
