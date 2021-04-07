import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
  Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import logo from '../../assets/logo.svg';

export default function Quotation() {
  const [modal, setModal] = useState(false);

  const [agree, setAgree] = useState(false);
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  const toggle = () => setModal(!modal);
  return (
    <Container className="mt-5">
      <Row>
        <Col cl={12}>
          <Jumbotron className="quotation">
            <img
              className="quotation__img"
              src={logo}
              alt="logo"
              height="68px"
            />
            <h1 className="quotation__title">SEJA NOSSO PARCEIRO</h1>

            <p>
              <Button
                className="quotation__button"
                variant="primary"
                onClick={toggle}
              >
                Cadastro - Parceiros
              </Button>
            </p>
          </Jumbotron>

          <Modal isOpen={modal} toggle={toggle} className={modal}>
            <ModalHeader toggle={toggle}>Parceiros</ModalHeader>
            <ModalBody>
              <Form
                className="artvogue-forms"
                action="https://docs.google.com/forms/d/e/1FAIpQLSf5OxaWHAJ5mhYXpMUWrUcbitDa_-RCYdAWllh7N7KfnN9TUQ/formResponse"
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
                    className="form-control artvogue__font"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="836740015">Celular:</Label>
                  <Input
                    id="483006589"
                    type="text"
                    name="entry.483006589"
                    className="form-control artvogue__font"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="1795896370">Especialidades:</Label>
                  <Input
                    id="801317577"
                    name="entry.801317577"
                    className="form-control artvogue__font"
                    required
                  />
                </FormGroup>

                <FormGroup tag="fieldset">
                  <Label for="511292062">Região de Atendimento:</Label>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="entry.946292988"
                        value="São Paulo - Norte"
                      />{' '}
                      São Paulo - Norte
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="entry.946292988"
                        value="São Paulo - Sudeste"
                      />{' '}
                      São Paulo - Sudeste
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="entry.946292988"
                        value="São Paulo - Sudoeste"
                      />{' '}
                      São Paulo - Sudoeste
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="entry.946292988"
                        value="São Paulo - Oeste"
                      />{' '}
                      São Paulo - Oeste
                    </Label>
                  </FormGroup>
                </FormGroup>

                <FormGroup>
                  <Label for="334710371">Fale mais sobre você:</Label>
                  <Input
                    id="999199171"
                    name="entry.999199171"
                    className="form-control artvogue__font"
                  />
                </FormGroup>
                <FormGroup check>
                  <Label check className="privacy__term">
                    <Input
                      type="checkbox"
                      id="privacy-policy"
                      onChange={checkboxHandler}
                    />{' '}
                    Concordo com a{' '}
                    <a
                      className="privacy__term"
                      href="/politica-de-privadade"
                      target="_blank"
                    >
                      Politica de Privacidade
                    </a>
                  </Label>
                </FormGroup>
                <input type="hidden" name="fvv" value="1" />
                <input type="hidden" name="fbzx" value="1277207772728743201" />

                <Input type="hidden" name="pageHistory" value="0" />

                <Input
                  className="btn btn-secondary"
                  type="submit"
                  value="Enviar"
                  onClick={toggle}
                  disabled={!agree}
                />
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>
                Fechar
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}
