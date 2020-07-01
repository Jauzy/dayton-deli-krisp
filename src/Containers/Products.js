import React, { useState } from 'react'
import anime from 'animejs/lib/anime.es.js';
import { ProductSlider } from '../Components/Index'
import $ from 'jquery'
import { Parallax } from 'react-parallax'
import Slider from 'react-slick'

const chips = './images/Chips/'
const crackers = './images/Crackers/'
const ginger = './images/Ginger/'

const Products = (props) => {
    const [state, setState] = useState({
        toggleChips: false,
        toggleCrackers: false,
        toggleGinger: false
    })

    const chipsProducts = [
        {
            name: 'Garlic Crackers',
            img: chips + '1GC.JPG',
            desc: 'The basic ingredients of crackers, that we dusting with garlic seasoning. We would like to present Garlic Crackers.'
        },
        {
            name: 'Sweet Banana Chips',
            img: chips + '2SBC.JPG',
            desc: 'Banana with the best quality and natural sugar. By using natural ingredients without using artificial sweeteners, food coloring, and preservatives. We would like to present Sweet Banana Chips.'
        },
        {
            name: 'Salty Banana Chips',
            img: chips + '3SBC.JPG',
            desc: 'Banana with the best quality and natural salt. By using natural ingredients without using artificial sweeteners, food coloring, and preservatives. We would like to present Salty Banana Chips.'
        },
        {
            name: 'Banana Cheese',
            img: chips + '4BC.JPG',
            desc: 'Banana with the best quality and premium cheese seasoning. We would like to present Banana Cheese.'
        },
        {
            name: 'Cassava Chips Original',
            img: chips + '5CCO.JPG',
            desc: 'We use selected cassava, then we dusting with a premium original seasoning. We would like to present Cassava Chips Original.'
        },
        {
            name: 'Cassava Chips Sea Salt',
            img: chips + '6CCSS.JPG',
            desc: 'We use selected cassava, then we dusting with a premium sea salt seasoning. We would like to present Cassava Chips Sea Salt.'
        },
        {
            name: 'Cassava Chips BBQ',
            img: chips + '7CCB.JPG',
            desc: 'We use selected cassava, then we dusting with a premium bbq seasoning. We would like to present Cassava Chips BBQ.'
        },
        {
            name: 'Cassava Chips Hot & Spicy',
            img: chips + '8CCHS.JPG',
            desc: 'We use selected cassava, then we dusting with a premium hot & spicy seasoning. We would like to present Cassava Chips Hot & Spicy.'
        },
        {
            name: 'Cassava Chips Balado',
            img: chips + '9CCB.JPG',
            desc: 'We use selected cassava, then we dusting with a premium balado seasoning. We would like to present Cassava Chips Balado.'
        },
    ]

    const crackersProducts = [
        {
            name: 'Tonk\'y PPT',
            img: crackers + '1TP.JPG',
            desc: 'Our crackers are processed with natural ingredients without using artificial sweeteners, food coloring, and preservatives.'
        },
        {
            name: 'Tonk\'y Fish',
            img: crackers + '2TF.JPG',
            desc: 'Our crackers that we use with the best quallity of fish, with natural ingredients, without using artificial sweeteners, food coloring, and preservatives.'
        },
        {
            name: 'Tonk\'y Shrimp',
            img: crackers + '3TS.JPG',
            desc: 'Our crackers are processed with natural ingredients and the best quality product, without using artificial sweeteners, food coloring, and preservatives. Our crackers has a smooth texture.'
        },
        {
            name: 'Tonk\'y OGC',
            img: crackers + '4TO.JPG',
            desc: 'Our crackers are processed with natural ingredients without using artificial sweeteners, food coloring, and preservatives. Tonk\'y OGC has a round shape with a hole in the middle.'
        },
        {
            name: 'Tonk\'y OGS',
            img: crackers + '5TO.JPG',
            desc: 'Our crackers are processed with natural ingredients without using artificial sweeteners, food coloring, and preservatives. Tonk\'y OGS has a square shape with a hole in the middle.'
        },
        {
            name: 'Tonk\'y BWG',
            img: crackers + '6TB.JPG',
            desc: 'Our crackers are processed with natural ingredients without using artificial sweeteners, food coloring, and preservatives. Tonk\'y BWG has a white color and smooth texture.'
        },
        {
            name: 'Papatonk Shrimp Crackers',
            img: crackers + '7PSC.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China, United Harvest Indonesia, Pesona Papatonk Indonesia), we present Papatonk Shrimp Crackers. Our crackers are processed with natural ingredients without using artificial sweeteners, food coloring, and preservatives.'
        },
        {
            name: 'Papatonk Fish Crackers',
            img: crackers + '8PFC.JPG',
            desc: 'In collaboration with Papatonk (United Harvest Indonesia, Pesona Papatonk Indonesia), we present Papatonk Fish Crackers. Our crackers are processed with natural ingredients without using artificial sweeteners, food coloring, and preservatives.'
        },
    ]

    const gingersProducts = [
        {
            name: 'Habba tusauda Powder Drink',
            img: ginger + '1HPD.JPG',
            desc: 'In collaboration with PT. Pendekar Dua Nama, we present Habbatussauda Ginger Instant Powder Drink. With the all natural ingredients of the highest quality, without using artificial sweeteners, food coloring, and preservatives.',
        },
        {
            name: 'Ginger Original Sachet',
            img: ginger + '2GOS.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China, United Harvest Indonesia, Pesona Papatonk Indonesia), we present Original Ginger Powder Drink. With the all natural ingredients of the highest quality, without using artificial sweeteners, food coloring, and preservatives.',
        },
        {
            name: 'Ginger Extra Hot Sachet',
            img: ginger + '3GEHS.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China, United Harvest Indonesia, Pesona Papatonk Indonesia), we present Extra Hot Ginger Powder Drink. With the extra ginger and all natural ingredients of the highest quality, without using artificial sweeteners, food coloring, and preservatives',
        },
        {
            name: 'Ginger Cinnamon Sachet',
            img: ginger + '4GCS.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China, United Harvest Indonesia, Pesona Papatonk Indonesia), we present Cinnamon Ginger Powder Drink. We also provide cinnamon and the all natural ingredients of the highest quality, without using artificial sweeteners, food coloring, and preservatives.',
        },
        {
            name: 'Ginger Clove Sachet',
            img: ginger + '5GCS.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China, United Harvest Indonesia, Pesona Papatonk Indonesia), we present Clove Ginger Powder Drink. We also provide clove and the all natural ingredients of the highest quality, without using artificial sweeteners, food coloring, and preservatives.',
        },
        // {
        //     name: 'Ginger Original with Carton Box',
        //     img: ginger + '6GOCB.JPG',
        //     desc: 'In collaboration with Papatonk (United Harvest China, United Harvest Indonesia, Pesona Papatonk Indonesia), we present Original Ginger With a Carton Box. There are 10 sachets of original ginger, in every box.',
        // },
        {
            name: 'Ginger Extra Hot with Carton Box',
            img: ginger + '7GEHCB.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China, United Harvest Indonesia, Pesona Papatonk Indonesia), we present Extra Hot Ginger With a Carton Box. There are 10 sachets of extra hot ginger, in every box.',
        },
        {
            name: 'Ginger Cinnamon with Carton Box',
            img: ginger + '8GCCB.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China, United Harvest Indonesia, Pesona Papatonk Indonesia), we present Cinnamon Ginger With a Carton Box. There are 10 sachets of cinnamon ginger, in every box.',
        },
        {
            name: 'Ginger Clove with Carton Box',
            img: ginger + '9GCCB.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China, United Harvest Indonesia, Pesona Papatonk Indonesia), we present Clove Ginger With a Carton Box. There are 10 sachets of clove ginger, in every box.',
        },
        {
            name: 'Ginger Original with Standing Pouch',
            img: ginger + '10GOSP.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China), we present Original Ginger With a Standing Pouch. There are 5 sachets of original ginger, in every pouch.',
        },
        {
            name: 'Ginger Extra Hot with Standing Pouch',
            img: ginger + '11GEHSP.JPG',
            desc: 'In collaboration with Papatonk (United Harvest China), we present Extra Hot Ginger With a Standing Pouch. There are 5 sachets of extra hot ginger, in every pouch.',
        },
    ]

    const toggleChips = () => {
        anime({
            targets: '#toggleChips',
            duration: 7000,
            delay: 500,
            opacity: 1,
        });
        setState({ ...state, toggleChips: true })
    }

    const toggleCrackers = () => {
        anime({
            targets: '#toggleCrackers',
            duration: 7000,
            delay: 500,
            opacity: 1,
        });
        setState({ ...state, toggleCrackers: true })
    }

    const toggleGinger = () => {
        anime({
            targets: '#toggleGinger',
            duration: 7000,
            delay: 500,
            opacity: 1,
        });
        setState({ ...state, toggleGinger: true })
    }

    var defaultSettings = {
        className: 'd-flex justify-content-center',
        autoplay: false,
        infinite: true,
        arrows: true,
        dots: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className=''>

            <section className='bg-light py-5' id='products'>
                <div className="container">
                    <hr />
                    <h1 className='text-center' style={{ fontSize: '80px' }}>Our products</h1>
                    <h5 className='text-center mx-auto text-secondary pb-3' style={{ maxWidth: '400px' }}>
                        We are striving to develop to become a companion with our customer.
                    </h5>
                    <hr />
                    <hr style={{ border: '2px solid #FFD92A', transform: 'rotate(90deg)', width: '60px' }} className='mt-5' />
                </div>
            </section>

            {/* Crackers */}
            <section id='crackersSection' className='bg-lght' style={{ backgroundColor: '#F8F9FA' }}>
                <Parallax bgImage={require('./images/blob-right.svg')} blur={{ min: -15, max: 15 }} strength={400} className='parallax-header'>
                    <div className='container-sm'>
                        <div className='p-5'>
                            <div className='row'>
                                <div className='col-md-5 d-flex'>
                                    <div className='m-auto d-flex flex-column'>
                                        <h1 style={{ fontSize: '40px', color: '#A9855B' }} className=''>
                                            <strong style={{ fontSize: '70px' }}>Kroepoek</strong><br /> the shrimp crackers.
                                    </h1>
                                        {!state.toggleCrackers && <figure className='mx-auto mt-3 font-playfair' onClick={toggleCrackers}>
                                            <div>
                                                <span>Learn More</span>
                                                <span>Learn More</span>
                                            </div>
                                        </figure>}
                                        <p hidden={!state.toggleCrackers} id='toggleCrackers' className='font-balsa mt-3' style={{ textIndent: '20px', textAlign: 'justify', textJustify: 'inter-word', opacity: 0, color: '#A9855B' }}>
                                            Kroepoek in The Netherlands is a popular snack in part of East And Southeast Asia. Krupuk are deep fried crackers made from starch and other ingredients that usually give the taste.
                                    </p>
                                    </div>
                                </div>
                                <div className='col-md'>
                                    <img src='./images/Crackers/6TB.JPG' className='rounded-lg shadow' width='100%' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <ProductSlider products={crackersProducts} backCardColor='#A9855B' />
                        </div>
                    </div>
                </Parallax>
            </section>

            <div className='bg-light p-5'>
                <div className='container text-center'>
                    <hr />
                    <h1>
                        "Having provided natural ingredients and safe food - drink to over billion people cross the world and above all, trying to understand their desire."
                    </h1>
                    <hr />
                    <hr style={{ border: '2px solid #FFD92A', transform: 'rotate(90deg)', width: '60px' }} className='mt-5' />
                </div>
            </div>

            {/* Ginger */}
            <section id='gingerSection' style={{ backgroundColor: '#F8F9FA' }}>
                <Parallax bgImage={require('./images/blob-center.svg')} blur={{ min: -15, max: 15 }} strength={500} className='parallax-header'>
                    <div className='container-sm'>
                        <div className='p-5'>
                            <div className='row'>
                                <div className='col-md'>
                                    <img src='./images/Ginger/2GOS.JPG' className='rounded-lg shadow' width='100%' />
                                </div>
                                <div className='col-md-5 d-flex'>
                                    <div className='m-auto d-flex flex-column'>
                                        <h1 style={{ fontSize: '50px', color: '#A9855B' }} className=''>
                                            <strong style={{ fontSize: '70px' }}>Ginger</strong><br /> powder drink.
                                    </h1>
                                        {!state.toggleGinger && <figure className='mx-auto mt-3 font-playfair' onClick={toggleGinger}>
                                            <div>
                                                <span>Learn More</span>
                                                <span>Learn More</span>
                                            </div>
                                        </figure>}
                                        <p hidden={!state.toggleGinger} id='toggleGinger' className='font-balsa mt-3' style={{ textIndent: '20px', textAlign: 'justify', textJustify: 'inter-word', opacity: 0, color: '#A9855B' }}>
                                            Is an Indonesia traditional beverage made from Fresh Java Ginger and all natural ingredients without any preservatives, coloring, and additives it only brings the good nature of the infamous ginger ingredient in a modern and convenient way as your drink.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <ProductSlider products={gingersProducts} backCardColor="#259DBF" />
                        </div>
                    </div>
                </Parallax>
            </section>

            <div className='bg-light p-5'>
                <div className='container text-center'>
                    <hr />
                    <h1>
                        "Our product made from natural ingredients without any preservatives, coloring, and additives it only brings the good nature of the infamous spice."
                    </h1>
                    <hr />
                    <hr style={{ border: '2px solid #FFD92A', transform: 'rotate(90deg)', width: '60px' }} className='mt-5' />
                </div>
            </div>

            {/* Chips */}
            <section id='chipsSection' style={{ backgroundColor: '#F8F9FA' }}>
                <Parallax bgImage={require('./images/blob-left.svg')} blur={{ min: -15, max: 15 }} strength={500} className='parallax-header'>
                    <div className='container-sm'>
                        <div className='p-5'>
                            <div className='row'>
                                <div className='col-md'>
                                    <img src='./images/Chips/8CCHS.JPG' className='rounded-lg shadow' width='100%' />
                                </div>
                                <div className='col-md-5 d-flex'>
                                    <div className='m-auto d-flex flex-column'>
                                        <h1 style={{ fontSize: '50px', color: '#A9855B' }} className=''>
                                            <strong style={{ fontSize: '70px' }}>Story</strong><br /> of Our Crisp.
                                    </h1>
                                        {!state.toggleChips && <figure className='mx-auto mt-3 font-playfair' onClick={toggleChips}>
                                            <div>
                                                <span>Learn More</span>
                                                <span>Learn More</span>
                                            </div>
                                        </figure>}
                                        <p hidden={!state.toggleChips} id='toggleChips' className='font-balsa mt-3' style={{ textIndent: '20px', textAlign: 'justify', textJustify: 'inter-word', opacity: 0, color: '#A9855B' }}>
                                            Our Chips are made from fresh roots, fresh cassava and sweet banana with added natural flavouring and ingredients, that has a rich source of protein, carbohydrates, fiber and iron. The rich and diverse flavour of our chips crackers makes it an ideal snack food favorite of classes A to E market.
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <ProductSlider products={chipsProducts} backCardColor="#DFAC6E" />
                        </div>
                    </div>
                </Parallax>
            </section>

        </div>
    )
}

export default Products