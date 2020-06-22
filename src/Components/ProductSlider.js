import React from 'react'
import Slider from 'react-slick'
import FlipCard from "react-flip-cards";
import '../../node_modules/react-flip-cards/build/index.css';

var defaultSettings = {
    className: 'd-flex justify-content-center',
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
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

    return (
        <div>
            <Slider {...settings}>
                {props.products?.map((item, index) => (
                    <div className='px-2 mx-auto'>
                        <div style={{ height: '400px' }}>
                            <FlipCard img={item.img} // all props
                                fontTitle={item.name}
                                backTitle={item.name}
                                backText={item.desc}
                                bgColor={props.backCardColor} // back card background color
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ProductSlider