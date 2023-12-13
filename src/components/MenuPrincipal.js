import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const MenuPrincipal = () => {
  return (
<Container>
    <div>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container id='contnav'>
        <Navbar.Brand className='titulo'>CENTRO DE SALUD ALTO OBRAJES</Navbar.Brand> 
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='inicio'>INICIO</Nav.Link>
            <Nav.Link as={Link} to="/servicios" className='servicios'>SERVICIOS Y ESPECIALIDADES </Nav.Link>
            <Nav.Link as={Link} to="/infoPac" className='info'>INFORMACION PARA EL PACIENTE</Nav.Link>
            <Nav.Link as={Link} to="/novedades" className='nov'>NOVEDADES</Nav.Link>

            <NavDropdown title="Hospital" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/somos">Quienes Somos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/historia"> Historia</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/somos">Mision Vision</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/somos">Codigo de Etica </NavDropdown.Item>
            </NavDropdown>
        
          <NavDropdown title="Responsabilidad Social" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/extencion">Extencion Comunitaria</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/somos">Atencion a la Poblacion Vulnerable</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/somos">Como puedo Ayudar?</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className='consulMed'>
            <Nav.Link eventKey={2} as={Link} to="/contactos"> Consulta Medica Virtual</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  <Outlet/>
  </div>
</Container>
  
    
  )
}
