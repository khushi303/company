import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import Brand1 from '../assets/images/png/brandmazda.png';
import Brand2 from '../assets/images/png/brandaltassian.png';
import Brand3 from '../assets/images/png/brandsmashing.png';
import Brand4 from '../assets/images/png/brandqantas.png';
import Brand5 from '../assets/images/png/brandbuysell.png';
import Brands1 from '../assets/images/png/brandnitro.png';
import Brands2 from '../assets/images/png/brandcssmania.png';
import Brands3 from '../assets/images/png/brandpopsugar.png';
import Brands4 from '../assets/images/png/brandtalentbin.png';
import Brands5 from '../assets/images/png/brandcivicrm.png';

const Brands = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    var settings1 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2100,
        autoplaySpeed: 2100,
        cssEase: "linear",
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id='testimonial' className='py_brand'>
            <Container  className='custom_container'>
                <p data-aos="fade-down" className='mb-0 fs_6sm fw-bold lh_122 ls_18 text-uppercase text_green77 text-center'>BRANDS</p>
                <h2 data-aos="fade-down" className='fs_lg mb-0 fw-medium lh_122 text_blue3b mt-3 pt-1 mx-auto text-center mw_897'>We work with thousands of the world’s leading brands</h2>
                <Slider {...settings} className='mt-4 pt-2'>
                    <div>
                        <img src={Brand1} alt="Brand1" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brand2} alt="Brand2" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brand3} alt="Brand3" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brand4} alt="Brand4" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brand5} alt="Brand5" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brand3} alt="Brand3" className='w-100 mw_143' />
                    </div>
                </Slider>
                <Slider {...settings1} className='mt-4 pt-2'>
                    <div>
                        <img src={Brands1} alt="Brand1" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brands2} alt="Brand2" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brands3} alt="Brand3" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brands4} alt="Brand4" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brands5} alt="Brand5" className='w-100 mw_143' />
                    </div>
                    <div>
                        <img src={Brands3} alt="Brand3" className='w-100 mw_143' />
                    </div>
                </Slider>
                <p data-aos="fade-up" className='fw-normal fs_9sm lh_148 mw_381 text-center mx-auto mt-4 pt-2 mb-0 text_black42'>You're going to be in good company. We work with world's leading brands.</p>
            </Container>
        </div>
    )
}


export default Brands;