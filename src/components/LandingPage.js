import React, { useState, useEffect } from 'react'
import Menubar from './Menubar'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import LandingPic from './LandingPic.svg'

// communicate mission, vision, values, goal, roadmap in the landing page

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: '#343a40',
    },
    bar: {
      borderRadius: '5px',
      backgroundColor: '#f50057',
    },
}))(LinearProgress);

export default function LandingPage() {

    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0) 
    
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
            if (oldProgress === 100) {
                setLoading(false)
                return 0;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, 100);
            });
        }, 50);
    
        return () => {
            clearInterval(timer);
        };
    }, [])

    return (
    <>
    {
    loading === true ? <>
        <Container
            className="d-flex justify-content-center align-items-center"
            fluid={true}
            style={{ backgroundColor: '#343a40', minHeight: "100vh" }}
        >
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <Card>
                    <Card.Body>
                        <BorderLinearProgress variant="determinate" value={progress}/>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    </> : <>
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
        <section
            className="pt-5"
            style={{ backgroundColor: '#750643', minHeight: "150px", color: '#ffffff' }}
        >
            <div className="text-center">
                <h1><b>The Future is smart</b></h1>
            </div>
        </section>
        <Container className="p-5">
            <Row>
                <Col md={4} lg={3} className="pt-5">
                    <p className="pt-2 Light-Font">OUR MISSION ———</p>
                </Col>
                <Col md={8} lg={7}>
                    <h1><b>Artificial Intelligence...?</b></h1>
                    <p className="Light-Font">"Intelligence is the ability to avoid doing work, yet getting the work done." —Linus Torvalds: The Linux Founder. </p>
                    <p className="Light-Font">Technologies are all about serving humanity and people's well-being, so we made our mission clear, to use a tool that is avilable right now, which is artificial intelligence.</p>
                    <p className="Light-Font">The mission is not easy, it requires a lot of smart brains and coders all working and beliving in the team work, integrating the modern computing technologies to create the future of people's well-being.</p>
                    <h6 className="Spacing"><b>Welcome to OSAF TECHNOLOGIES</b></h6>
                </Col>
            </Row>
        </Container>
        <section style={{ backgroundColor: '#343a40', minHeight: "250px" }}>
            <Container>
                <Row >
                    <Col className="mt-5">
                        <Link to="/" style={{ color: '#cccecf', textDecoration: 'inherit' }}><h4>About</h4></Link>
                        <Link className="m-1" to="/" style={{ color: '#cccecf', textDecoration: 'inherit' }}><h4>Blog</h4></Link>
                        <Link className="m-1" to="/" style={{ color: '#cccecf', textDecoration: 'inherit' }}><h4>Contact</h4></Link>
                    </Col>
                    <Col className="mt-5" style={{ color: '#cccecf'}} >
                        <h4>Contact Us</h4>
                        <p>Rdv Elaakid Bougasmi Tayeb (Bazar Ferhat) - Médéa 26000 - Algérie</p>
                        <p>Mob: +213 5 50 89 43 48</p>
                    </Col>
                    <Col className="mt-5">
                        <iframe title="sarl osaf technologies in google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.993778786601!2d2.7553987164594345!3d36.263929980062656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f6b0b9bb9e209%3A0x618a7ca8e554e860!2sSARL%20OSAF%20TECHNOLOGIES!5e0!3m2!1sen!2sdz!4v1619661969218!5m2!1sen!2sdz" ></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    }
    </>
    )    
}
