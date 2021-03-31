import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Contacts() {
  return (
    <Container className="mt-5">
      <Row>
        <Col cl={12} id="contact">
          <h1>Formulário de Contato</h1>

          <Form
            action="https://docs.google.com/forms/d/e/1FAIpQLSfSeXLfs-EyXolAsr9_tcMws5GS-p7tyXXru4RC9kuuC1asXQ/formResponse"
            target="_self"
            id="bootstrapForm"
            method="POST"
          >
            <FormGroup>
              <Label for="732073748">Nome:</Label>
              <Input
                id="175199926"
                type="text"
                name="entry.175199926"
                class="form-control"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="732073748">Celular:</Label>
              <Input
                id="175199926"
                type="text"
                name="entry.175199926"
                class="form-control"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="1795896370">Mensagem:</Label>
              <Input
                type="textarea"
                id="801317577"
                name="entry.801317577"
                class="form-control"
              />
            </FormGroup>
            <Input type="hidden" name="fvv" value="1" />
            <Input type="hidden" name="fbzx" value="-1866383347728037200" />

            <Input type="hidden" name="pageHistory" value="0" />

            <Input class="btn btn-primary" type="submit" value="Enviar" />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
