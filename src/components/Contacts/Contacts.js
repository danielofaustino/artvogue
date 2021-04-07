import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

export default function Contacts() {
  const [agree, setAgree] = useState(false);
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col cl={12}>
          <div className="contact__layout">
            <h1 className="contact__title">Formulário de Contato</h1>

            <Form
              action="https://docs.google.com/forms/d/e/1FAIpQLSfSeXLfs-EyXolAsr9_tcMws5GS-p7tyXXru4RC9kuuC1asXQ/formResponse"
              target="_blank"
              id="bootstrapForm"
              method="POST"
            >
              <FormGroup>
                <Label for="732073748">Nome:</Label>
                <Input
                  id="175199926"
                  type="text"
                  name="entry.175199926"
                  className="contact__input"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="732073748">Celular:</Label>
                <Input
                  id="175199926"
                  type="text"
                  name="entry.175199926"
                  className="contact__input"
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="1795896370">Mensagem:</Label>
                <Input
                  type="textarea"
                  id="801317577"
                  name="entry.801317577"
                  className="contact__textarea"
                />
              </FormGroup>
              <Input type="hidden" name="fvv" value="1" />
              <Input type="hidden" name="fbzx" value="-1866383347728037200" />

              <Input type="hidden" name="pageHistory" value="0" />
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="privacy-policy"
                    onChange={checkboxHandler}
                  />{' '}
                  Concordo com a{' '}
                  <a
                    href="/politica-de-privadade"
                    className="contact__policy"
                    target="_blank"
                  >
                    Politica de Privacidade
                  </a>
                </Label>
              </FormGroup>
              <Input
                class="btn btn-primary"
                type="submit"
                className="contact__submit"
                value="Enviar"
                disabled={!agree}
              />
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
