import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './auth/AuthContext'
import { SiFacebook } from 'react-icons/si'
import { SiYoutube } from 'react-icons/si'
import { SiInstagram } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'
// import Logo from './logo.png'
import Logo from './redlogo.png'
import Ouss from './ouss.jpg'

export default function Menubar() {

    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try {
            await logout()
            history.push('/login')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Navbar collapseOnSelect style={{ backgroundColor: '#750643'}} expand="md" bg="white" variant="dark">
            <Navbar.Brand href="/"><img src={Logo} alt="Logo" width="40"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"><h6><b>Menu</b></h6></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
            {
                currentUser ? <>
                    <Nav className="mr-auto"></Nav>
                    <NavDropdown title={(<img src={Ouss} alt="Profile Pic" width="55" style={{ borderRadius: '100%' }} />)} id="collasible-nav-dropdown">
                        <NavDropdown.Item><Link to="/update-profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>Update Profile</Link></NavDropdown.Item>
                        <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                </> : <>
                    <Nav className="ml-2">
                        {/* <Nav.Link href="/">About</Nav.Link> */}
                        {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
                        {/* <Nav.Link href="/">Contact</Nav.Link> */}
                    </Nav>
                    <Nav className="mr-auto"></Nav>
                    <Nav>
                        <Nav.Link href="https://www.facebook.com/osaftechnologies"><SiFacebook size={24} color="#750643"/></Nav.Link>
                        <Nav.Link href="https://www.youtube.com/channel/UCw8uFFQM7qU0uc_dJNePljA"><SiYoutube size={24} color="#750643"/></Nav.Link>
                        <Nav.Link href="https://www.instagram.com/osaftech"><SiInstagram size={24} color="#750643"/></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/company/osaftechnologies"><SiLinkedin size={24} color="#750643"/></Nav.Link>
                    </Nav>
                </>
            }
            </Navbar.Collapse>
        </Navbar>
    )
}