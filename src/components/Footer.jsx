import React from 'react'
import { Container } from 'react-bootstrap';
import Footerlogo from '../assets/images/png/footerlogo.png';
import { Facebook, Insta, Tweet } from './Iconimg';

const Footer = () => {
    return (
        <div className='bg-black py_footer'>
            <Container className='custom_container'>
                <div className='d-flex align-items-center justify-content-xl-between gap-xl-0 gap-4 flex-xl-row flex-column mb-4'>
                    <div className='mw_176'>
                        <img src={Footerlogo} alt="Footerlogo" className='w-100 cur_pointer' />
                    </div>
                    <ul className='list-unstyled mb-0 d-flex align-items-center gap-lg-4 gap-3 flex-wrap'>
                        <li><a href="#home" className='fs_9sm fw-medium text_graylightrg lh_100 text-nowrap position-relative foot_link nav_link'>Home</a></li>
                        <li><a href="#benifit" className='fs_9sm fw-medium text_graylightrg lh_100 text-nowrap position-relative foot_link nav_link'>Your benefits</a></li>
                        <li><a href="#process" className='fs_9sm fw-medium text_graylightrg lh_100 text-nowrap position-relative foot_link nav_link'>Our process</a></li>
                        <li><a href="#work" className='fs_9sm fw-medium text_graylightrg lh_100 text-nowrap position-relative foot_link nav_link'>Our works</a></li>
                        <li><a href="#testimonial" className='fs_9sm fw-medium text_graylightrg lh_100 text-nowrap position-relative foot_link nav_link'>Testimonials</a></li>
                        <li><a href="#project" className='fs_9sm fw-medium text_graylightrg lh_100 text-nowrap position-relative foot_link nav_link'>Start a project</a></li>
                    </ul>
                    <div className='d-flex gap-4 align-items-center'>
                        <Facebook />
                        <Insta />
                        <Tweet />
                    </div>
                </div>
                <div className='border_footer'>
                </div>
                <div className='pt-4 d-flex align-items-md-center justify-content-md-between gap-3 gap-md-0 flex-md-row flex-column'>
                    <p className='fs_8sm fw-normal lh_166 text_graylightrg mb-0'>© 2021 Company</p>
                    <div className='d-flex gap-4 align-items-center'>
                        <a href='' className='fs_8sm fw-normal lh_166 text_graylightrg mb-0 foot_link'>Privacy policy</a>
                        <a href='' className='fs_8sm fw-normal lh_166 text_graylightrg mb-0 foot_link'>Term of service</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer;