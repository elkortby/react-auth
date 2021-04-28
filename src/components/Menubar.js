import React from 'react'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './auth/AuthContext'
import Logo from './logo.png'
import Ouss from './ouss.jpg'

export default function Menubar() {

    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        try {
            await logout()
            history.push('/login')
        } catch {

        }
    }

    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/"><img src={Logo} alt="Logo" width="55"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"><h6><b>Menu</b></h6></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                    {
                        currentUser ? <>
                            <NavDropdown title={(<img src={Ouss} alt="Profile Pic" width="55" style={{ borderRadius: '100%' }} />)} id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link to="/update-profile" style={{ color: 'inherit', textDecoration: 'inherit' }}>Update Profile</Link></NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </> : <>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Button variant="light" onClick={() => window.location.href="/signup"}>Sign Up</Button>
                        </>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}