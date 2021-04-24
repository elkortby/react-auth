import React, { useRef } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import { useAuth } from './AuthContext'

export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const cPasswordRef = useRef()
    const { signUp  } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signUp(emailRef.current.value, passwordRef.current.value)
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form>
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
                            <Form.Control type="cPassword" required ref={cPasswordRef} />
                        </Form.Group>
                        <Button className="w-100" type="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Log In
            </div>
        </>
    )
}
