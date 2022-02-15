import { useState, useEffect } from 'react'
import './navbar.css'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)
  
  const trackScreenWidth = () => {
    const width = window.innerWidth
    setScreenWidth(width)
    if (width > 800) {
      setOpen(true)
    }
  }
  
  const handleClose = () => {
    if (screenWidth < 800) {
      setOpen(false)
    }
  }
  
  useEffect(() => {
    trackScreenWidth()
    window.addEventListener("resize", trackScreenWidth)
    return () => window.removeEventListener('resize', trackScreenWidth)
  }, [])
  
  return (
    <nav className='navbar'>
      <div className='nav-wrapper'>
        <div className='logo'>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/athelas.png`}
              alt='main'
            />
          </div>
        </div>
        <div className='list-wrapper'>
          <img 
            src='https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true'
            alt='close'
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open)
            }}
          />
          <img 
            src='https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true'
            alt='menu'
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open)
            }}
          />
          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <div
                onClick={handleClose}
              >
                About Us
              </div>
            </li>
            <li>
              <div
                onClick={handleClose}
              >
                Volunteering
              </div>
            </li>
            <li>
              <div
                onClick={handleClose}
              >
                Programs
              </div>
            </li>
            <li>
              <div
                onClick={handleClose}
              >
                Meet Our Horses
              </div>
            </li>
            <li>
              <div
                onClick={handleClose}
              >
                Sponsorship
              </div>
            </li>
            <li>
              <div
                onClick={handleClose}
              >
                Contact Us
              </div>
            </li>
            <li>
              <div
                onClick={handleClose}
              >
                Downloads
              </div>
            </li>
            <li>
              <div
                onClick={handleClose}
              >
                FAQ
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar