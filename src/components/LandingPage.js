import React from 'react'
import Menubar from './Menubar'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LandingPic from './LandingPic.svg'

export default function LandingPage() {
    return (
        <>
            <Menubar />
            <Container       
                style={{ marginTop: '200px', marginBottom: '200px'}}
            >
                <Row>
                    <Col className="mt-5">
                        <div className="w-100"  style={{ maxWidth: "400px" }}>
                            <h1><b>SARL OSAF TECHNOLOGIES</b></h1>
                            <p>
                                Integrate human and artificial intelligence to
                                develop products that serve people's well-being.
                            </p>
                            <Button size="lg" variant="dark">Learn More</Button>
                        </div>
                    </Col>
                    <Col style={{ minWidth: "400px" }}>
                        <img src={LandingPic} alt="Landing Pic"/>
                    </Col>
                </Row>
            </Container>
            <section className="mt-auto" style={{ backgroundColor: '#750643', minHeight: "150px", color: '#ffffff' }}>
                <div className="d-flex justify-content-center pt-5">
                    <h1><b>Website Under Construction</b></h1>
                </div>
                <div className="w-100"  style={{ maxWidth: "400px", color: '#cccecf' }}>
                </div>
            </section>
            <section style={{ backgroundColor: '#343a40', minHeight: "250px" }}>
                <Container>
                    <Row >
                        <Col className="mt-5">
                            <Link to="/" style={{ color: '#cccecf', textDecoration: 'inherit' }}><h5>About</h5></Link>
                            <Link to="/" style={{ color: '#cccecf', textDecoration: 'inherit' }}><h5>Blog</h5></Link>
                            <Link to="/" style={{ color: '#cccecf', textDecoration: 'inherit' }}><h5>Contact</h5></Link>
                        </Col>
                        <Col className="mt-5" style={{ color: '#cccecf'}} >
                            <h4>Contact Us</h4>
                            <p>Rdv Elaakid Bougasmi Tayeb (Bazar Ferhat) - Médéa 26000 - Algérie</p>
                            <p>Mob: +213 5 50 89 43 48</p>
                        </Col>
                        <Col className="mt-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.993778786601!2d2.7553987164594345!3d36.263929980062656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f6b0b9bb9e209%3A0x618a7ca8e554e860!2sSARL%20OSAF%20TECHNOLOGIES!5e0!3m2!1sen!2sdz!4v1619661969218!5m2!1sen!2sdz" ></iframe>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
