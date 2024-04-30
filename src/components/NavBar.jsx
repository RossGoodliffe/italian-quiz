import React from 'react'

import { Container, Navbar } from 'react-bootstrap'

import logo from '../assets/logo.png'



const NavBar = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Italian Word Quiz
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar