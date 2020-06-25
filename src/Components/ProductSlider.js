import React, { useEffect } from 'react'
import Slider from 'react-slick'
import FlipCard from "react-flip-cards";
import '../../node_modules/react-flip-cards/build/index.css';

var defaultSettings = {
    className: 'd-flex justify-content-center',
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows:false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 860,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
};

const ProductSlider = (props) => {

    const settings = props.settings ? props.settings : defaultSettings
    useEffect(() => {
    }, [])
    return (
        <div>
            <Slider {...settings}>
                {props.products?.map((item, index) => (
                    <div className='px-3'>
                        <div style={{ height: '400px' }}>
                            <FlipCard img={item.img}
                                backTitle={item.name}
                                bgColor={props.backCardColor} // back card background color
                            />
                        </div>
                    </div>
                ))}
            </Slider>
            <hr style={{borderBottom:'2px solid #C8A786'}} className='mt-5'/>
            <hr style={{ border: '1px solid #FFD92A', transform: 'rotate(90deg)', width: '60px'}} className='mt-5 mb-3' />
        </div>
    )
}

export default ProductSlider