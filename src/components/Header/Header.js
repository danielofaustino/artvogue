import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/">
          <NavbarBrand>
            <img className="logo" height="60px" src={logo} alt="Logo" />
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar id="navbarScroll">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">
                <NavLink>HOME</NavLink>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/about" className="nav-link">
                <NavLink>QUEM SOMOS</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar className="nav-link">
              <DropdownToggle nav caret>
                SERVIÇOS
              </DropdownToggle>
              <DropdownMenu right>
                <Link to="/services/1">
                  <DropdownItem>Serviços</DropdownItem>
                </Link>
                <DropdownItem divider />

                {services.map((x) => (
                  <Link key={`DropDown-${x.id}`} to={x.href} onClick={toggle}>
                    <DropdownItem>{x.title}</DropdownItem>
                  </Link>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/contatos" className="nav-link">
                <NavLink>CONTATOS</NavLink>
              </Link>
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
