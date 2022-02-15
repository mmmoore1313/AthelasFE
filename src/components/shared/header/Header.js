import { Link } from 'react-scroll'
import { Navbar } from 'react-bootstrap'
import './header.css'

const Header = () => {
  return (
    <nav>
      <ul className='header'>
        <li>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img src={`${process.env.PUBLIC_URL}/athelas.png`} alt='athelas-logo-main' id='main'/>
          </Link>
        </li>
        <li className='werds'>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className='werds'>
          <Link
            activeClass="active"
            to="volunteering"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Volunteering
          </Link>
        </li>
        <li className='werds'>
          <Link
            activeClass="active"
            to="programs"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Programs
          </Link>
        </li>
        <li className='werds'>
          <Link
            activeClass="active"
            to="horses"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Meet Our Horses
          </Link>
        </li>
        <li className='werds'>
          <Link
            activeClass="active"
            to="sponsorship"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Sponsorship
          </Link>
        </li>
        <li className='werds'>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
        <li className='werds'>
          <Link
            activeClass="active"
            to="downloads"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Downloads
          </Link>
        </li>
        <li className='werds'>
          <Link
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header