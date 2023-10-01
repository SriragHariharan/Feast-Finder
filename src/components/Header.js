import{ Container, Nav, Navbar, NavDropdown }from 'react-bootstrap';
import logo from '../../public/assets/logo.png'
import { useState } from 'react';

// 0 => light default theme &&&&&&& 1 => dark theme

function Header() {
    const [theme, setTheme] = useState(true)
    
    // function to change theme
    const changeTheme = () => {
        setTheme(!theme)
    }

  return (
        <Navbar collapseOnSelect expand="lg" bg={theme ? "light" : "dark" } data-bs-theme={theme ? "light" : "dark" }>
            <Container>
                <Navbar.Brand>
                    <img
                    alt="logo"
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Brand>
                    <h2>Feast Finder</h2>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About Us</Nav.Link>
                    <Nav.Link>Contact Us</Nav.Link>
                    <Nav.Link><button className="px-2 py-1 fa-solid fa-moon" onClick={changeTheme} style={{color: "#005eff"}}></button></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar> 
  )
}

export default Header