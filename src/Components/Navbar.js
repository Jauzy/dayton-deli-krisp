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
                            <h5 className="modal-title" id="">Our Legal Certificate</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <div aria-hidden="true">&times;</div>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='row p-5'>
                                <div className='col-md-4 d-flex'>
                                    <div className='m-auto'>
                                        <img src='./legal/IMG_6220.JPG' width='100%' />
                                    </div>
                                </div>
                                <div className='col-md d-flex'>
                                    <div className='m-auto'>
                                        <h3 className=''>
                                            CERTIFICATE OF "GOOD MANUFACTURING PRACTICES" DIRECTORATE GENERAL OF PRODUCT COMPETITIVENESS REPUBLIC OF INDONESIA
                                        </h3>
                                        <h5 className='text-secondary'>
                                            This Certificate is valid and met the sanitation and hygiene requirement in case of food safety violation.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='row p-5' style={{ background: 'black' }}>
                                <div className='col-md d-flex'>
                                    <div className='m-auto'>
                                        <h2 className='text-white'>
                                            HACCP - FQIAMINISTRY OF MARINE AFFAIRS AND FISHERIES REPUBLIC OF INDONESIA
                                        </h2>
                                        <h6 className='text-white font-roboto mt-3'>
                                            The establishment has effectively implemented of HACCP and complied with :
                                            <ul>
                                                <li className='my-2'>CAC/RCP1-1969,Rev.4(2003) General Principles of Food Hygiene.</li>
                                                <li className='my-2'>Decree of Minister of Marine Affairs and Fisheries No.KEP.52A/KEPMEN-KP/2013 laying down the Requirement for Quality Assurance and Safety of Product During Production, Processing and Distribution.</li>
                                                <li className='my-2'>US Food and Drug Administration (US-FDA) regulations 21 CFR Part 110 - Current Good Manufacturing Practice in Manufacturing, Packing or Holding Human Food;21 CFR Part 123 - Fish and Fishery Products.</li>
                                            </ul>
                                        </h6>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className=''>
                                        <img src='./legal/IMG_6219.JPG' width='100%' />
                                    </div>
                                </div>
                            </div>
                            <div className='row p-5'>
                                <div className='col-md-4 d-flex'>
                                    <div className='m-auto'>
                                        <img src='./legal/IMG_6222.JPG' width='100%' />
                                    </div>
                                </div>
                                <div className='col-md d-flex'>
                                    <div className='m-auto'>
                                        <h1 className=''>
                                            HALAL CERTIFICATE HALAL ASSURANCE SYSTEM STATUS
                                        </h1>
                                        <h5 className='text-secondary'>
                                            The Indonesian Council of Ulama, after examining, inspectin/ auditing and discussing the ingredients has declared that the undermentioned food, drug and cosmetic products as HALAL according to the Islamic Law and has been implementing Halal Assurance System.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='row p-5' style={{ background: 'black' }}>
                                <div className='col-md d-flex'>
                                    <div className='m-auto'>
                                        <h2 className='text-white'>
                                            BPOM RI MD THE NATIONAL AGENCY OF DRUG AND FOOD CONTROL OF REPUBLIC OF INDONESIA
                                        </h2>
                                        <h6 className='text-white font-roboto mt-3'>
                                            Government agency of Indonesia, who is responsible for protecting public health through the control and supervision of prescription and over the counter pharmaceutical drugs (medication), vaccines, biopharmaceuticals, dietary supplements, food safety and cosmetic.
                                        </h6>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className=''>
                                        <img src='./legal/IMG_6221.JPG' width='100%' />
                                    </div>
                                </div>
                            </div>
                            <div className='row p-5'>
                                <div className='col-md-4 d-flex'>
                                    <div className='m-auto'>
                                        <img src='./legal/IMG_6224.JPG' width='100%' />
                                    </div>
                                </div>
                                <div className='col-md d-flex'>
                                    <div className='m-auto'>
                                        <h1 className=''>
                                            REGISTRATION NUMBER TO SOUTH KOREAMINISTRY OF MARINE AFFAIRS AND FISHERIES REPUBLIC OF INDONESIA
                                        </h1>
                                        <h5 className='text-secondary'>
                                            Has implement the quality and safety assurance system & fulfill the requirement of country destination. This Certificate is effective as long as fish processing plant implemented the HACCP system and fulfill the requirements of country destination.
                                            </h5>
                                    </div>
                                </div>
                            </div>
                            <div className='row p-5' style={{ background: 'black' }}>
                                <div className='col-md d-flex'>
                                    <div className='m-auto'>
                                        <h2 className='text-white'>
                                            REGISTRATION NUMBER TO CHINAMINISTRY OF MARINE AFFAIRS AND FISHERIES REPUBLIC OF INDONESIA
                                        </h2>
                                        <h6 className='text-white font-roboto mt-3'>
                                            Has implement the quality and safety assurance system & fulfill the requirement of country destination. This Certificate is effective as long as fish processing plant implemented the HACCP system and fulfill the requirements of country destination.
                                        </h6>
                                    </div>
                                </div>
                                <div className='col-md-4'>
                                    <div className=''>
                                        <img src='./legal/IMG_6223.JPG' width='100%' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar