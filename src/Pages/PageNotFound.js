import React from 'react';
import { Container, Col, Row, Alert } from 'reactstrap';

export default function PageNotFund() {
  return (
    <Container id="page-not-found">
      <Row>
        <Col xl={12}>
          <Alert color="danger">Página não encontrada!</Alert>
        </Col>
      </Row>
    </Container>
  );
}
