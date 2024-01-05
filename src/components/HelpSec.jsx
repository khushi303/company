import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Helpsvg1, Helpsvg2, Helpsvg3, Helpsvg4, Helpsvg5, Helpsvg6 } from './Iconimg';
import Quedrent from '../assets/images/png/shape.png';
import Bluetriangle from '../assets/images/png/shape2.png'

const HelpSec = () => {
    return (
        <div id='benifit' className='py_help position-relative'>
            <Container className='position-relative z-2 custom_container'>
                <p data-aos="fade-right" className='fs_6sm fw-bold text_green77 mb-0 text-uppercase ls_18 opacity-50'>features</p>
                <p data-aos="fade-right" className='fs_lg fw-medium lh_122 mb-0 mw_500 text_blue3b mt-3 mb-4'>We are here to help you with</p>
                <Row className='pt-2'>
                    <Col data-aos="fade-right" lg={4} md={6} className='col-12'>
                        <div className='help_whcard'>
                            <div>
                                <Helpsvg1 />
                            </div>
                            <p className='fs_3md fw-bold lh_136 text_blue3b mb-0 mt-3 pt-1'>Grow your business</p>
                            <p className='fs_9sm fw-normal lh_150 text_gray64 mb-0 mt-3'><span className='fw-bold'>The magic wand</span> for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-down" lg={4} md={6} className='col-12 mt-md-0 mt-4'>
                        <div className='help_whcard'>
                            <div>
                                <Helpsvg2 />
                            </div>
                            <p className='fs_3md fw-bold lh_136 text_blue3b mb-0 mt-3 pt-1'>Drive more sales</p>
                            <p className='fs_9sm fw-normal lh_150 text_gray64 mb-0 mt-3'>A potential customer, once lost, is hard to retain back. But <span className='fw-bold'>keeping some critical</span> factors in mind, we can, for sure, use these loyalty programs as customer retention tools.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-left" lg={4} md={6} className='col-12 mt-lg-0 mt-4'>
                        <div className='help_whcard'>
                            <div>
                                <Helpsvg3 />
                            </div>
                            <p className='fs_3md fw-bold lh_136 text_blue3b mb-0 mt-3 pt-1'>Handle by Expert</p>
                            <p className='fs_9sm fw-normal lh_150 text_gray64 mb-0 mt-3'>We know how we candevelop deep, trust-based relationships with our clients, and work together more collaboratively</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-right" lg={4} md={6} className='col-12 mt-4'>
                        <div className='help_whcard'>
                            <div>
                                <Helpsvg4 />
                            </div>
                            <p className='fs_3md fw-bold lh_136 text_blue3b mb-0 mt-3 pt-1'>UX Research</p>
                            <p className='fs_9sm fw-normal lh_150 text_gray64 mb-0 mt-3'>UX research is the systematic study of target users and their requirements, to add realistic contexts and insights to design processes.</p>
                        </div>
                    </Col>
                    <Col data-aos="fade-up" lg md={6} className='col-12 mt-4'>
                        <div className='help_whcard'>
                            <div>
                                <Helpsvg5 />
                            </div>
                            <p className='fs_3md fw-bold lh_136 text_blue3b mb-0 mt-3 pt-1'>Business Audit</p>
                            <p className='fs_9sm fw-normal lh_150 text_gray64 mb-0 mt-3'>An audit examines your business's financial records to verify they are accurate. This is done through a systematic review of your transactions. </p>
                        </div>
                    </Col>
                    <Col data-aos="fade-left" lg md={6} className='col-12 mt-4'>
                        <div className='help_whcard'>
                            <div>
                                <Helpsvg6 />
                            </div>
                            <p className='fs_3md fw-bold lh_136 text_blue3b mb-0 mt-3 pt-1'>Data tracking</p>
                            <p className='fs_9sm fw-normal lh_150 text_gray64 mb-0 mt-3'>The hardware and software, which when used together allows you to know where something is at any point in time</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='position-absolute mw_761 quad_circle end-0 w-100'>
                <img src={Quedrent} alt="Quedrent" className='w-100' />
            </div>
            <div className='position-absolute bluetriangle start-0 w-100'>
                <img src={Bluetriangle} alt="Bluetriangle" className='w-100' />
            </div>
        </div>
    )
}

export default HelpSec