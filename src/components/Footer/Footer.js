import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Telefone from 'react-bootstrap-icons/dist/icons/telephone';
import Whatsapp from 'react-bootstrap-icons/dist/icons/whatsapp';
import Inbox from 'react-bootstrap-icons/dist/icons/inbox';

export default function Footer() {
  return (
    <Container className="footer mt-5 mb-3">
      <Row>
        <Col lg={3}>
          <p>www.artvoguereformas.com.br</p>
        </Col>
        <Col lg={7} />
        <Col lg={2}>
          <a
            href="https://wa.me/5511981679358"
            target="_blank"
            rel="noreferrer"
          >
            <Whatsapp className="mx-1" size={35} fill="#3968b3" />
          </a>
          <a href="mailto:artvogueoficial@gmail.com">
            <Inbox className="mx-1" size={35} fill="#fe914e" />
          </a>
          <a href="tel:+55-11-98167-9358">
            <Telefone className="mx-1" size={35} fill="#005500" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
