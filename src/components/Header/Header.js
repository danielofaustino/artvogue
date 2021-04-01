import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Whatsapp from 'react-bootstrap-icons/dist/icons/whatsapp';
import { servicesItens } from '../../data';

import logo from '../../assets/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-flex">
      <Navbar color="primary" fixed="top" light expand="md">
        <NavbarBrand href="/">
          <img className="logo" height="60px" src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar id="navbarScroll">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/about">QUEM SOMOS</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SERVIÇOS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/services/1">Serviços</DropdownItem>
                <DropdownItem divider />

                {servicesItens.map((x) => (
                  <DropdownItem href={x.href}>{x.title}</DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/contatos">CONTATOS</NavLink>
            </NavItem>
          </Nav>
          <Whatsapp width="2em" height="2em" fill="#067c38" />
          <NavbarText className="pl-1 pr-5">11 97548-9802</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
