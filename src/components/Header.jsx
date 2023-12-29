import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Logo from '../assets/images/png/Logo.png';
import CommonBtn from './CommonBtn';
import Dashboard from '../assets/images/png/Dasghboard2.png';
import { HomeDash, Orangebtn, Bluecurve, Shareicon, Fileicon, Staricon, Commentbox, BlueCard } from './Iconimg';
import Flowerpot from '../assets/images/png/flowerpot.png';

const Header = () => {
    const [show, setshow] = useState(true)
    return (
        <div className='bg_header'>
            <Container fluid className='px-xl-5 px-3 py-3'>
                <div className='d-flex align-items-center justify-content-between'>
                    <div className='mw_logo cur_pointer'>
                        <img src={Logo} alt="logo" className='w-100' />
                    </div>
                    <ul className={`${(show) ? "list-unstyled mb-0 op_0" : "list-unstyled mb-0 op_1"} nav_bar`}>
                        <li><a href="" className='fs_9sm fw-medium text-white lh_100 text-nowrap position-relative nav_link'>Home</a></li>
                        <li><a href="" className='fs_9sm fw-medium text-white lh_100 text-nowrap position-relative nav_link'>Your benefits</a></li>
                        <li><a href="" className='fs_9sm fw-medium text-white lh_100 text-nowrap position-relative nav_link'>Our process</a></li>
                        <li><a href="" className='fs_9sm fw-medium text-white lh_100 text-nowrap position-relative nav_link'>Our works</a></li>
                        <li><a href="" className='fs_9sm fw-medium text-white lh_100 text-nowrap position-relative nav_link'>Testimonials</a></li>
                        <li><a href="" className='fs_9sm fw-medium text-white lh_100 text-nowrap position-relative nav_link'>Start a project</a></li>
                        <li className='d-xl-none d-block'><CommonBtn btnname="Get started" /></li>
                    </ul>
                    <div className='d-none d-xl-block'>
                        <CommonBtn btnname="Get started" />
                    </div>
                    <div onClick={() => setshow(!show)} className={`${(show) ? "" : "cross"} nav_line`}>
                        <span className='line1 w-50 position-relative start-50'></span>
                        <span className='line2'></span>
                        <span className='line3 w-50'></span>
                    </div>
                </div>
            </Container>
            <Container className='py_header'>
                <h1 className='fs_xl fw-medium lh_120 text-white text-center mb-2'>A Digital Product Design Agency</h1>
                <p className='fs_md fw-normal lh_170 text-white text-center mb-0 op_08'>We are Creative and Professional Digital Agency</p>
                <div className='d-flex align-items-center justify-content-center mt-4'>
                    <CommonBtn btnname="Get Started" />
                </div>
                <div className='dash_img position-relative'>
                    <img src={Dashboard} alt="" className='w-100' />
                    <div className='Dash_btn position-absolute home_dash d-flex align-items-center'>
                        <HomeDash />
                        <p className='fs_6sm fw-medium lh_136 text_pur_700 mb-0'>Dashboard</p>
                    </div>
                    <div className='time_card position-absolute'>
                        <div className='time_card2'>
                            <p className='ff_nunito mb-0 fw-semibold fs_7sm text_pur_700 pb-2'>Total time</p>
                            <div className='d-flex align-items-center gap-3'>
                                <div className='d-flex align-items-center justify-content-center gap-1'>
                                    <p className='fs_4sm ff_nunito mb-0 fw-normal text_gray mb-0'>Ring ratio</p>
                                    <Orangebtn />
                                    <p className='fs_4sm ff_nunito fw-normal mb-0 text_orange'>60.59%</p>
                                </div>
                                <div className='d-flex align-items-center justify-content-center gap-1'>
                                    <p className='fs_4sm ff_nunito mb-0 fw-normal text_gray mb-0'>Year on year</p>
                                    <Orangebtn />
                                    <p className='fs_4sm ff_nunito fw-normal mb-0 text_orange'>58.93%</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between pt-4'>
                                <div className=''>
                                    <p className='ff_nunito fs_4sm mb-0 fw-normal text_blue3'>today</p>
                                    <p className='ff_nunito fs_4md mb-0 fw-bold text_voilet68 mt-2'>32,021</p>
                                </div>
                                <div>
                                    <Bluecurve />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ux_card position-absolute'>
                        <img src={Flowerpot} alt="Flowerpot" className='w-100 br_flower' />
                        <p className='fs_6sm fw-medium lh_136 text_pur_700 mt-2 mb-0'>UX Research</p>
                        <p className='fs_3sm fw-normal lh_180 text_black9 mb-0 mt-1'>Project January   | <span className='ps-1'>by Michael Miles</span></p>
                        <div className='d-flex gap-3 mt-2'>
                            <div className='link_circle d-flex align-items-center justify-content-center'>
                                <Shareicon />
                            </div>
                            <div className='link_circle d-flex align-items-center justify-content-center'>
                                <Fileicon />
                            </div>
                            <div className='link_circle d-flex align-items-center justify-content-center'>
                                <Staricon />
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-2'>
                                <Commentbox />
                                <p className='fs_3sm fw-normal lh_180 text_black9 mb-0'>14 Comments</p>
                            </div>
                            <div>
                                <BlueCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <h2 className='fs_sm' >hello world</h2>
        </div>
    )
}

export default Header;