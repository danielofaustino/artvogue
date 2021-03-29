import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Telefone from 'react-bootstrap-icons/dist/icons/telephone';
import Whatsapp from 'react-bootstrap-icons/dist/icons/whatsapp';
import Inbox from 'react-bootstrap-icons/dist/icons/inbox';

export default function Footer() {
  return (
    <Container className="mb-2">
      <Row>
        <Col lg={3}>
          <p>www.artvogue.com.br - 2021</p>
        </Col>
        <Col lg={7} />
        <Col lg={2}>
          <Whatsapp className="mx-1" size={35} fill="#3968b3" />
          <Inbox className="mx-1" size={35} fill="#fe914e" />
          <Telefone className="mx-1" size={35} fill="#42b37c" />
        </Col>
      </Row>
    </Container>
  );
}
