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

import logo from '../../assets/logo3.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="container-fluid d-block">
      <Navbar color="primary" fixed="top" light expand="md">
        <NavbarBrand href="/">
          <img className="logo" height="60px" src={logo} alt="Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar id="navbarScroll">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">HOME</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                QUEM SOMOS
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                SERVIÇOS
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/components/">CONTATOS</NavLink>
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
