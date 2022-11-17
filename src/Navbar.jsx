import React from "react"
import  Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"


const NavbarLib = ({title}) => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <h1>{title}</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default NavbarLib