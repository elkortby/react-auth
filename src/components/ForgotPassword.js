import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from './auth/AuthContext'

export default function ForgotPassword() {

    const emailRef = useRef()
    const { forgotPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()       
        try {
            setMessage('')
            setError("")
            setLoading(true)
            await forgotPassword(emailRef.current.value)
            setMessage('Check your email for instructions')
        } catch {
            setError('Failed to reset password')
            setLoading(false)
        }

        setLoading(false)
    }
    
    return (
        <>
        <Container 
                className="d-flex align-items-center justify-content-center" 
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Forgot Password</h2>
                            { error && <Alert variant="danger">{error}</Alert>}
                            { message && <Alert variant="danger">{message}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required ref={emailRef} />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <div className="w-100 text-center mt-3">
                                don't have an account? <Link to="/signup">Sign Up</Link> or <Link to="/login">Login</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
        </Container>
        </>
    )
}