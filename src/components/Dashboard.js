import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from './auth/AuthContext'
import Menubar from './Menubar'

export default function Dashboard() {

    const { currentUser } = useAuth()

    return (
        <>
            {
                (currentUser.email === 'admin@test.com') ? <>
                    <Menubar type={0} />
                    <Container 
                        className="d-flex align-items-center justify-content-center" 
                        style={{ minHeight: "100vh" }}
                    >
                        <div className="w-100" style={{ maxWidth: "400px" }}>
                            <Card>
                                <Card.Body>
                                    <h2 className="text-center mb-4">Admin Dashboard</h2>
                                    <strong> Email: </strong>{currentUser.email}
                                    <Link to="/update-profile" className="btn btn-dark w-100 mt-3">Update Profile</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </Container>
                </> : <>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Dashboard</h2>
                            <strong> Email: </strong>{currentUser.email}
                            <Link to="/update-profile" className="btn btn-dark w-100 mt-3">Update Profile</Link>
                        </Card.Body>
                    </Card>
                </>
            }
        </>
    )
}
