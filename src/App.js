import React, {useState} from "react";
import {Link, Outlet} from "react-router-dom"
import {Container, Nav} from "react-bootstrap";



function App() {



  return (
      <Container fluid>
      <div className="App">
          <Nav defaultActiveKey="/" as="ul">
              <Nav.Item>
                  <Nav.Link as={Link} to="categories">Categories</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                  <Nav.Link as={Link} to="makers">Makers</Nav.Link>
              </Nav.Item>
          </Nav>
          <Outlet />
      </div>
      </Container>
  );
}

export default App;
