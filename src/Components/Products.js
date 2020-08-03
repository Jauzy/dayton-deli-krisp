import React, { useState, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import { ProductSlider } from './Index'
import { Parallax } from 'react-parallax'
import { useStaticQuery, graphql } from 'gatsby'

const Products = () => {
    const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              name
              category
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  
    const [state, setState] = useState({
        toggleChips: false,
        toggleCrackers: false,
        toggleGinger: false
    })

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
                        We are striving to develop a companion spirit with our customer.
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
                                    <img src='./images/6TB.JPG' className='rounded-lg shadow' width='100%' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className=''>
                            <ProductSlider products={data.allMarkdownRemark.edges} category='cracker' backCardColor='#A9855B' />
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
                                    <img src='./images/2GOS.JPG' className='rounded-lg shadow' width='100%' />
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
                            <ProductSlider products={data.allMarkdownRemark.edges} category='ginger' backCardColor="#259DBF" />
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
                                    <img src='./images/8CCHS.JPG' className='rounded-lg shadow' width='100%' />
                                </div>
                                <div className='col-md-5 d-flex'>
                                    <div className='m-auto d-flex flex-column'>
                                        <h1 style={{ fontSize: '50px', color: '#A9855B' }} className=''>
                                            <strong style={{ fontSize: '70px' }}>Story</strong><br /> of Our Chips.
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
                            <ProductSlider products={data.allMarkdownRemark.edges} category='chips' backCardColor="#DFAC6E" />
                        </div>
                    </div>
                </Parallax>
            </section>

        </div>
    )
}

export default Products