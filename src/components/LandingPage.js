import React from 'react'
import Menubar from './Menubar'
import { Container } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        <>
            <Menubar />
            <Container 
                className="" 
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100 mt-5" style={{ maxWidth: "400px" }}>
                    <div className="w-100 text-center">
                        <h1><b>Lorem Ipsum</b></h1>
                        <h1><b>Lorem Ipsum</b></h1>
                        <h1><b>Lorem Ipsum</b></h1>
                    </div>
                </div>
            </Container>
        </>
    )
}
