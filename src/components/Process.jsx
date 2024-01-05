import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Processgreentimeimg from '../assets/images/png/process1.png';
import Graphimg from '../assets/images/png/graphimg.png';
import Processuser from '../assets/images/png/process-user.png';
import { ProcessSearch, ProcessMsg, ProcessFile } from './Iconimg';

const Process = () => {
    return (
        <div id='process' className='bg_process'>
            <Container className='custom_container dash_line position-relative'>
                <p data-aos="fade-down" className='fs_6sm fw-bold lh_122 ls_18 text-white opacity-50 text-center text-uppercase mb-1'>how it works</p>
                <p data-aos="fade-down" className=' fs_lg fw-medium lh_122 text-white mb-0 pt-2 pb-4 text-center'>Our Process</p>
                <p data-aos="fade-down" className='fs_md fw-normal lh_170 text-center text-white mw_710 mx-auto pb-1 mb-4'>We know the best solution for all of your business ideas and we can help you solve all business problems</p>
                <div className='px-3'>
                    <Row className='process_card py-lg-0'>
                        <Col data-aos="zoom-out-right" lg={6} className=''>
                            <img src={Processgreentimeimg} alt="Processgreentimeimg" className='w-100' />
                        </Col>
                        <Col data-aos="fade-down"  lg={6} className=' d-flex flex-column justify-content-center px-lg-3 px-4'>
                            <ProcessSearch />
                            <h3 data-aos="fade-down" className='fs_3md fw-bold lh_136 text_blue3b mt-3 pt-1 mb-3'>Business Audit</h3>
                            <p data-aos="fade-down" className='fs_9sm fw-normal lh_150 text_gray64 mb-0'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                        </Col>
                    </Row>
                </div>
                <div className='px-3 mt-4 pt-2'>
                    <Row className='process_card py-lg-0'>
                        <Col data-aos="zoom-out-right" lg={6} className=''>
                            <img src={Graphimg} alt="Graphimg" className='w-100' />
                        </Col>
                        <Col lg={6} className=' d-flex flex-column justify-content-center px-lg-3 px-4'>
                            <ProcessMsg />
                            <h3 data-aos="fade-down" className='fs_3md fw-bold lh_136 text_blue3b mt-3 pt-1 mb-3'>Data tracking</h3>
                            <p data-aos="fade-down" className='fs_9sm fw-normal lh_150 text_gray64 mb-0'>The hardware and software, which when used together allows you to know where something is at any point in time</p>
                        </Col>
                    </Row>
                </div>
                <div className='px-3 mt-4 pt-2'>
                    <Row className='process_card py-lg-0'>
                        <Col data-aos="zoom-out-right" lg={6} className=''>
                            <img src={Processuser} alt="Processuser" className='w-100' />
                        </Col>
                        <Col lg={6} className=' d-flex flex-column justify-content-center px-lg-3 px-4'>
                            <ProcessFile />
                            <h3 data-aos="fade-down" className='fs_3md fw-bold lh_136 text_blue3b mt-3 pt-1 mb-3'>Results</h3>
                            <p data-aos="fade-down" className='fs_9sm fw-normal lh_150 text_gray64 mb-0'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Process