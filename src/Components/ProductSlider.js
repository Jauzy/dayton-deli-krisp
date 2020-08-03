import React from 'react'
import Slider from 'react-slick'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' custom-arrow'}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className + ' custom-arrow-prev'}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

var defaultSettings = {
    className: 'd-flex justify-content-center',
    autoplay: true,
    infinite: true,
    focusOnSelect: true,
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
    let products = []
    props.products.map(item => {
        if (props.category === item.node.frontmatter.category) {
            products.push({ name: item.node.frontmatter.name, img: item.node.frontmatter.image.childImageSharp.fluid.src })
        }
    })

    return (
        <div style={{ width: '100%' }}>
            <div className='align-items-center pb-5 slider-parent'>
                <div className="slider-child">
                    <Slider {...defaultSettings}>
                        {products.map((item, index) => (
                            <div key={index} className='px-3'>
                                <div className='slider-class d-flex justify-content-center align-items-center'>
                                    <div className='img-class p-5 d-flex flex-column'>
                                        <img src={item.img} className='m-auto img-height' />
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