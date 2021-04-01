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

import { servicesItens } from '../data';

export default function ServicesBox() {
  const { id } = useParams();

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [items, setItems] = useState([]);

  function handleService(x) {
    setItems(x);
  }

  useEffect(() => {
    const service = servicesItens[id - 1].images.map((x) => ({
      src: x,
      altText: servicesItens[id - 1].alt,
      caption: '',
      header: '',
      key: servicesItens[id - 1].id,
    }));

    handleService(service);
  }, [id]);

  return (
    <Container id="gallery" className="mt-2">
      <Row>
        <Col className="content-box " xl="5">
          <h1 className="display-4">{servicesItens[id - 1].title}</h1>

          <h5>{servicesItens[id - 1].description}</h5>
          <Button color="secondary" onClick={toggle}>
            Orçamento - {servicesItens[id - 1].title}{' '}
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
              <Label for="409924997">Endereço:</Label>
              <Input
                id="1422977614"
                name="entry.1422977614"
                class="form-control"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Serviços</Label>
              <Input
                type="select"
                multiple
                id="1795896370"
                name="entry.801317577"
                class="form-control"
              >
                <option value="Climatização">Climatização</option>
                <option value="Elétrica">Elétrica</option>
                <option value="Iluminação">Iluminação</option>
                <option value="Hidráulica">Hidráulica</option>
                <option value="Pintura">Pintura</option>
                <option value="Drywall">Drywall</option>
                <option value="Obra">Obra</option>
                <option value="Vidros e Espelhos">Vidros e Espelhos</option>
                <option value="Revestimentos">Revestimentos</option>
                <option value="Marmoraria">Marmoraria</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="1791839778">Descreva a sua necessidade:</Label>
              <Input
                type="textarea"
                id="979805659"
                name="entry.979805659"
                class="form-control"
                required
              />
            </FormGroup>
            <Input type="hidden" name="fvv" value="1" />
            <Input type="hidden" name="fbzx" value="-4638860087270209793" />

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
    </Container>
  );
}
