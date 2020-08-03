import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import $ from 'jquery'

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query {
            markdownRemark(fileAbsolutePath: {regex: "/static/legal/content.md/"}) {
                frontmatter {
                    title
                }
                html
            }
    }
    `)
    
    const post = data.markdownRemark

    useEffect(() => {
        $('#navbarSupportedContent ul .nav-link').click(() => {
            $('#navbarSupportedContent').removeClass('show')
        })
    }, [])
    const scrollTo = (e) => {
        $('html,body').animate({
            scrollTop: $(e).offset().top
        },
            'slow');
    }
    return (
        <div>
            <div className=' font-roboto'>
                <nav className="fixed-top navbar navbar-expand-lg py-3" style={{ backgroundColor: 'black' }}>
                    <div className='container'>
                        {/* <a className="navbar-brand" href="#">Navbar</a> */}
                        <div className='navbar-toggler'>
                            <img src='./images/square_logo.jpg' width='40px' className='' />
                        </div>

                        <button className="navbar-toggler py-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <div className=''>
                                <i className='fa fa-bars text-white' />
                            </div>
                        </button>

                        <div className="collapse navbar-collapse row">
                            <div className='col-md d-flex'>
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={() => scrollTo("#products")}>Products</a>
                                    </li>
                                    <li className="nav-item mx-auto">
                                        <a className="nav-link" href="#" onClick={() => scrollTo("#vision-mission")}>Vision & Mission</a>
                                    </li>
                                    <li className='nav-item'>
                                        <a className='nav-link' href='#' data-toggle="modal" data-target="#legalModal">
                                            Legal
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-md d-flex justify-content-center'>
                                <div className='position-fixed rounded-circle' style={{ width: '200px', height: '200px', top: '-15px' }}>
                                    <img src='./images/logo.jpg' width='100%' className='rounded-circle' />
                                </div>
                            </div>
                            <div className='col-md d-flex'>
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={() => scrollTo("#crackersSection")}>Kroepoek</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={() => scrollTo("#gingerSection")}>Ginger</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#" onClick={() => scrollTo("#chipsSection")}>Chips</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Hamburger */}
                    <div className="collapse" id="navbarSupportedContent" style={{ width: '100%' }}>
                        <ul className="navbar-nav">
                            <li className="nav-item d-flex align-items-center text-white">
                                <i className='fa fa-boxes mr-2' /><a className="nav-link" href="#products">Our Products</a>
                            </li>
                            <li className="nav-item d-flex align-items-center text-white">
                                <i className='fa fa-building mr-2' /><a className="nav-link" href="#vision-mission">Mission & Vision</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#chipsSection">Products: Chips</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#crackersSection">Products: Kroepoek</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#gingerSection">Products: Ginger Powder Drink</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#' data-toggle="modal" data-target="#legalModal">
                                    Legal
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >

            <div className="modal fade" id="legalModal" tabIndex="-1" role="dialog" aria-labelledby="legalmodal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="">{post.frontmatter.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <div aria-hidden="true">&times;</div>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div dangerouslySetInnerHTML={{ __html: post.html }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar