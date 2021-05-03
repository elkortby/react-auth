import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Menubar from './Menubar'

export default function Blog() {
    return (
        <>
            <Menubar />
            <Container       
                style={{ marginTop: '200px', marginBottom: '200px'}}
            >
                <Row>
                    <Col className="">
                        <h4>Blog</h4>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>            
        </>
    )
}
