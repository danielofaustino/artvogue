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
import { dataBase } from '../../data';

import logo from '../../assets/logo.svg';

const Header = () => {
  const { services } = dataBase[0];
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

                {services.map((x) => (
                  <DropdownItem key={`DropDown-${x.id}`} href={x.href}>
                    {x.title}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/contatos">CONTATOS</NavLink>
            </NavItem>
          </Nav>
          <a
            href="https://wa.me/5511981679358"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarText className="mr-2 ">11 98167-9358</NavbarText>
            <Whatsapp width="2em" height="2em" fill="#32875E" />
          </a>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
