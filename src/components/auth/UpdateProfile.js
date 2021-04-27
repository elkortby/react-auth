import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function UpdateProfile() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const cPasswordRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        if(passwordRef.current.value !== 
            cPasswordRef.current.value) {
                setLoading(false)
                return setError("Passwords do not match")
        }

        const promises = []

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push('/')
        }).catch(() => {
            setError('Failed to update profile')
        }).finally(() => {
            setLoading(false)
        })

    }
    
    return (
        <Container 
            className="d-flex align-items-center justify-content-center" 
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Update Profile</h2>
                        { error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} />
                            </Form.Group>
                            <Form.Group id="cPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" ref={cPasswordRef} />
                            </Form.Group>
                            <Button variant="dark" disabled={loading} className="w-100" type="submit">
                                Submit
                            </Button>
                            <div className="w-100 text-center mt-3">
                                <Link to="dashboard" style={{ color: 'inherit', textDecoration: 'inherit' }}>Back To Dashboard</Link>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}