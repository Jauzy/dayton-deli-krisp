import React, { useEffect } from 'react'
import $ from 'jquery'

const Navbar = (props) => {
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
        <div className='sticky-top font-roboto'>

            <nav className="navbar navbar-expand-lg py-3" style={{ backgroundColor: 'black' }}>
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
                <div class="collapse" id="navbarSupportedContent" style={{ width: '100%' }}>
                    <ul class="navbar-nav">
                        <li class="nav-item d-flex align-items-center text-white">
                            <i className='fa fa-boxes mr-2' /><a class="nav-link" href="#products">Our Products</a>
                        </li>
                        <li class="nav-item d-flex align-items-center text-white">
                            <i className='fa fa-building mr-2' /><a class="nav-link" href="#vision-mission">Mission & Vision</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#chipsSection">Products: Chips</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#crackersSection">Products: Kroepoek</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link" href="#gingerSection">Products: Ginger Powder Drink</a>
                        </li>
                    </ul>
                </div>

            </nav>
            {/* <nav className='navbar navbar-light bg-light position-absolute d-flex' style={{ top: '0', width: '100%', height: '34px', fontSize: '13px' }}>
                <div className='container font-balsa'>
                    <div className='mr-auto'>
                        <small style={{ textDecoration: 'underline' }} className='mx-1'>(+62) 251 8618 620</small>
                    </div>
                    <div className='ml-auto'>
                        <small style={{ textDecoration: 'underline' }} className='mx-1'>dytonadelikrisp@yahoo.co.id</small>
                        <small style={{ textDecoration: 'underline' }} className='mx-1'>PT. Daytona Deli Krisp</small>
                    </div>
                </div>
            </nav> */}
        </div >
    )
}

export default Navbar