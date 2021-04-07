import { React, useEffect, useState } from 'react';

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Row,
  UncontrolledCarousel,
} from 'reactstrap';

import { useParams } from 'react-router-dom';

import { dataBase } from '../data';

export default function ServicesBox() {
  const { services } = dataBase[0];
  const { id } = useParams();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [items, setItems] = useState([]);
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };

  function handleService(x) {
    setItems(x);
  }

  useEffect(() => {
    const service = services[id - 1].images.map((x) => ({
      src: x,
      altText: services[id - 1].alt,
      caption: '',
      header: '',
      key: services[id - 1].id,
    }));

    handleService(service);
  }, [id]);

  return (
    <Container className="gallery mt-2">
      <Row>
        <Col className="gallery__box " xl="5">
          <h1 className="display-4">{services[id - 1].title}</h1>

          <p>{services[id - 1].description}</p>
          <Button color="secondary" onClick={toggle}>
            Orçamento - {services[id - 1].title}{' '}
          </Button>
        </Col>
        <Col className="align-self-center" xl="7">
          <UncontrolledCarousel items={items} />
        </Col>
      </Row>
      <Modal isOpen={modal} toggle={toggle} className={modal}>
        <ModalHeader toggle={toggle}>Orçamentos</ModalHeader>
        <ModalBody>
          <Form
            className="artvogue-forms"
            action="https://docs.google.com/forms/d/e/1FAIpQLSdkPgmpQG_ylq5bGCCfZUWHqsFI8J7CGAtMGIC_7DdNczGpMw/formResponse"
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
              <Label for="409924997">Endereço:</Label>
              <Input
                id="1422977614"
                name="entry.1422977614"
                className="form-control artvogue__font"
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label for="1795896370">Serviço para Cotação:</Label>

              {services.map((x) => (
                <FormGroup key={x.id} check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="entry.801317577"
                      value={x.title}
                    />{' '}
                    {x.title}
                  </Label>
                </FormGroup>
              ))}
            </FormGroup>

            <FormGroup>
              <Label for="1791839778">Descreva a sua necessidade:</Label>
              <Input
                type="textarea"
                id="979805659"
                name="entry.979805659"
                className="form-control artvogue__font"
                required
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
                  className="privacy__policy"
                  href="/politica-de-privadade"
                  target="_blank"
                >
                  Politica de Privacidade
                </a>
              </Label>
            </FormGroup>
            <Input type="hidden" name="fvv" value="1" />
            <Input type="hidden" name="fbzx" value="-4638860087270209793" />

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
    </Container>
  );
}
