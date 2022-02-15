import NavBar from './navbar/NavBar'
import { Nav, Navbar } from 'react-bootstrap'
import './header.css'

const Header = () => {
  return (
    <NavBar bg="primary" variant="dark" expand="md">
      <Navbar.Brand href="#">
        <img src={`${process.env.PUBLIC_URL}/athelas.png`} alt='main'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <ul className='header'>
          <li>main</li>
          <li>About</li>
          <li>Volunteering</li>
          <li>Programs</li>
          <li>Meet Our Horses</li>
          <li>Sponsorship</li>
          <li>Contact Us</li>
          <li>Downloads</li>
          <li>FAQ</li>
        </ul>
      </Nav>
    </Navbar.Collapse>
  </NavBar>
  )
}

export default Header