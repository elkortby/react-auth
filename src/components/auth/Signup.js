import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from './AuthContext'

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const cPasswordRef = useRef()
    const { signUp } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== 
            cPasswordRef.current.value) {
                return setError('Password not match')
        }
        
        try {
            setError("")
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create an account')
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
                            <h2 className="text-center mb-4">Sign Up</h2>
                            { error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required ref={emailRef} />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" required ref={passwordRef} />
                                </Form.Group>
                                <Form.Group id="cPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" required ref={cPasswordRef} />
                                </Form.Group>
                                <Button disabled={loading} variant="dark" className="w-100" type="submit">
                                    Sign Up
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Already have an account? <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit' }}><b>Log In</b></Link>
                    </div>
                </div>
            </Container>
        </>
    )
}
