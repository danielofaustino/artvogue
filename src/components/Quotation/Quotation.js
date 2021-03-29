import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import logo from '../../assets/logo3.png';

export default function Quotation() {
  return (
    <Container id="quotation">
      <Row>
        <Col sm={12} id="quotation-logo">
          <img
            src={logo}
            alt="logo"
            height="5px"
            weight="150px"
            className="img-fluid"
          />
        </Col>
      </Row>
      <Row>
        <Col sm={12} id="quotation-text">
          <h2> Solitice um Orçamento</h2>
        </Col>
      </Row>
      <Row>
        <Col id="quotation-button">
          <Button>Orçamento</Button>
        </Col>
      </Row>
    </Container>
  );
}
