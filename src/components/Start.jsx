import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Starttime from '../assets/images/png/starttime.png';
import CommonBtn from './CommonBtn';

const Start = () => {
    return (
        <div id='project' className='bg-start'>
            <Container id='work' className='custom_container'>
                <Row>
                    <Col lg={6} className='d-flex justify-content-center flex-column'>
                        <p data-aos="fade-down" className='fs_6sm fw-bold lh_122 ls_18 text-uppercase opacity-50 text-white mb-0'>start with us</p>
                        <h2 data-aos="fade-down" className='fs_lg fw-medium text-white lh_122 mw_414 mb-0 mt-3'>Start working faster today</h2>
                        <p data-aos="fade-down" className='fs_md fw-normal text-white lh_170 mb-0 mt-3 mw_414 mb-3'>We know the best solution for all of your business ideas and we can help you solve all business problems</p>
                        <CommonBtn btnname="Get started" />
                    </Col>
                    <Col data-aos="zoom-out" lg={6} className='mt-lg-0 mt-5'>
                        <img src={Starttime} alt="Starttime" className='w-100' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Start