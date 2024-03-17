import React from 'react';
import Tutorial from '../Video/3D_VISUALIZATION_2.webm'
import imgStep1 from '../Image/view_step1.webp'
import imgStep2 from '../Image/view_step2.webp'
import imgStep3 from '../Image/view_step3.webp'
import { Col, Container, Image, Row } from 'react-bootstrap';

function tutorial() {
    return (
        <>
            <Container className='mt-5 pt-5'>
                <Row>
                    <Col sm={12} className='step-head mb-5'>See how to create amazing visuals with Coohom</Col>
                </Row>
                <Row className='mt-5 pt-3'>
                    <Col sm={4}>
                        <Row className='step-bg'>
                            <Col sm={12}><div className="step">STEP 1:</div></Col>
                            <Col sm={12}><Image className='step-img' src={imgStep1}></Image></Col>
                            <Col sm={12} className='step-titl'><org>Render</org> the angles you desire with precision</Col>
                            <Col sm={12} className='step-line'>Select the style you want - perspective view, 360° walkthrough, or top view. Simply drag your camera angle to any desired position for rendering. Move it up, down, left, right, or rotate it freely...</Col>
                            <center><Col sm={12} className='step-link'>Check it now <ir>icon</ir></Col></center>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row className='step-bg'>
                            <Col sm={12}><div className="step">STEP 1:</div></Col>
                            <Col sm={12}><Image className='step-img' src={imgStep1}></Image></Col>
                            <Col sm={12} className='step-titl'><org>Render</org> the angles you desire with precision</Col>
                            <Col sm={12} className='step-line'>Select the style you want - perspective view, 360° walkthrough, or top view. Simply drag your camera angle to any desired position for rendering. Move it up, down, left, right, or rotate it freely...</Col>
                            <center><Col sm={12} className='step-link'>Check it now <ir>icon</ir></Col></center>
                        </Row>
                    </Col>
                    <Col sm={4}>
                        <Row className='step-bg'>
                            <Col sm={12}><div className="step">STEP 1:</div></Col>
                            <Col sm={12}><Image className='step-img' src={imgStep1}></Image></Col>
                            <Col sm={12} className='step-titl'><org>Render</org> the angles you desire with precision</Col>
                            <Col sm={12} className='step-line'>Select the style you want - perspective view, 360° walkthrough, or top view. Simply drag your camera angle to any desired position for rendering. Move it up, down, left, right, or rotate it freely...</Col>
                            <center><Col sm={12} className='step-link'>Check it now <ir>icon</ir></Col></center>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className="tutorial-video-bg mt-5">
                <video className='main-firstVideo' src={Tutorial} controls autoPlay muted loop></video>
            </div>
        </>
    )
}

export default tutorial