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

import logo from '../../assets/logo3.png';

export default function Quotation() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Container className="mt-5">
      <Row>
        <Col cl={12}>
          <Jumbotron id="quotation">
            <img src={logo} alt="logo" height="68px" />
            <h3>Seja nosso Parceiro</h3>

            <p>
              <Button variant="primary" onClick={toggle}>
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
                  <Label for="836740015">Celular:</Label>
                  <Input
                    id="483006589"
                    type="text"
                    name="entry.483006589"
                    class="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="1795896370">Especialidades:</Label>
                  <Input
                    id="801317577"
                    name="entry.801317577"
                    class="form-control"
                    required
                  />
                </FormGroup>

                <FormGroup tag="fieldset">
                  <legend htmlFor="511292062">Região de Atendimento:</legend>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="entry.946292988"
                        value="São Paulo - Norte"
                      />{' '}
                      São Paulo - Norte
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="entry.946292988"
                        value="São Paulo - Sudeste"
                      />{' '}
                      São Paulo - Sudeste
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="entry.946292988"
                        value="São Paulo - Sudoeste"
                      />{' '}
                      São Paulo - Sudoeste
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
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
                    class="form-control"
                  />
                </FormGroup>
                <input type="hidden" name="fvv" value="1" />
                <input type="hidden" name="fbzx" value="1277207772728743201" />

                <Input type="hidden" name="pageHistory" value="0" />

                <Input class="btn btn-primary" type="submit" value="Enviar" />
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
