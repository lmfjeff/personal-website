import React from 'react'
import { Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'

const Header = () => {
    return (
        <Navbar expand="sm" bg="light" sticky="top" className="">
            <NavbarBrand href="#top" className="ml-5">Jeff Lau</NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse >
                <Nav className="ml-auto mr-5">
                    <NavLink href="#top" className="mx-3">Home</NavLink>
                    <NavLink href="#work" className="mx-3">Work</NavLink>
                    <NavLink href="#about" className="mx-3">About</NavLink>
                    <NavLink href="#contact" className="mx-3">Contact</NavLink>
                </Nav>
            </NavbarCollapse>
        </Navbar>
    )
}

export default Header
