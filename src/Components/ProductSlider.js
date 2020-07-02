import React, { useEffect } from 'react'
import Slider from 'react-slick'
import FlipCard from "react-flip-cards";
import '../../node_modules/react-flip-cards/build/index.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: '50%', marginRight: '30%' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

var defaultSettings = {
    className: 'd-flex justify-content-center',
    autoplay: true,
    infinite: true,
    arrows: true,
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        },
    ]
};

const ProductSlider = (props) => {

    const settings = props.settings ? props.settings : defaultSettings
    useEffect(() => {
    }, [])
    return (
        <div style={{ width: '100%' }}>
            <div className='align-items-center pb-5 slider-parent'>
                <div className="slider-child">
                    <Slider {...defaultSettings}>
                        {props.products.map((item, index) => (
                            <div className='px-3'>
                                <div className='slider-class d-flex justify-content-center align-items-center'>
                                    <div className='img-class p-5 d-flex flex-column'>
                                        <img src={item.img} className='m-auto img-height' />
                                        <img src='./images/dk_icon.jpg' width='80px' style={{ borderRadius: '50%', right: '70px', top: '70px' }} className='position-absolute logo' />
                                    </div>
                                    <div className=''>
                                        <div className='text-div'>
                                            <h1 className=''>{item.name}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ProductSlider