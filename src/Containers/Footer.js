import React from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {
    const { className } = props
    return (
        <div>
            <div className={"bg-dark text-white font-roboto " + className}>
                <div className="px-10">
                    <div className="px-5 py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="font-weight-bolder text-white mb-2 mt-3 font-roboto">About Us</h6>
                                <h4 className="font-weight-bolder">Dytona Deli Krisp</h4>
                                <p className="text-break">
                                    Established in 2015, PT DYTONA DELI KRISP is the Indonesia's Authentic Crackers manufacturing company in Indonesia and has distributed in Indonesia and around the world. Based on these foundations, the company has introduced variety of famous Indonesian Authentic Crackers product.
                                    In 2018 our company decided to provide Powder Drink manufacturing particularly, the ready to serve and ready to drink.
                                </p>
                            </div>
                            <div className="col-md d-flex flex-column">
                                <h6 className="font-weight-bolder text-white mb-2 mt-3 font-roboto">Address</h6>
                                <p>PT DYTONA DELI KRISP Jln. Mutiara III No 3, Rt.01 Rw.02, Kelurahan Curug, Kecamatan Gunung Sindur, Kabupaten Bogor, Provinsi Jawa Barat, Indonesia, 16340.</p>

                                <a className='mt-auto btn btn-light my-2' href="tel:+62-251-8618-620">
                                    <i className='fa fa-phone' /> (+62) 251 8618 620
                                </a>
                                <a className='mt-auto btn btn-light my-2' href='https://api.whatsapp.com/send?phone=6281283275271'>
                                    <i className='fab fa-whatsapp' /> 0812 83275271
                                </a>
                            </div>
                            <div className="col-md d-flex flex-column">
                                <h6 className="font-weight-bolder text-white mb-2 mt-3 font-roboto">Our Products</h6>
                                <ul className="navbar-nav mb-3">
                                    <li className="nav-item"><a className="text-decoration-none text-white" href='#chipsSection'>Chips</a></li>
                                    <li className="nav-item"><a className="text-decoration-none text-white" href='#crackersSection'>Kroepoek</a></li>
                                    <li className="nav-item"><a className="text-decoration-none text-white" href='#gingerSection'>Ginger Powder Drink</a></li>
                                </ul>
                                <a className='mt-auto btn btn-light my-2 text-wrap' href='mailto:dytonadelikrisp@ yahoo.co.id'>
                                    <i className='fa fa-envelope' /> dytonadelikrisp@ yahoo.co.id
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-10 bg-secondary">
                    <div className="px-4 py-2 d-flex flex-row">
                        <div className="align-self-center mr-auto">
                            <div className="text-decoration-none px-1 text-white">@ 2020 DYTONA DELI KRISP. All rights reserved.</div>
                        </div>
                        <div className="align-self-center pt-1 pb-2 justify-content-end ml-auto">
                            <Link to="/" className="text-decoration-none px-1 text-white">Terms & Condition</Link>/
                        <Link to="/" className="text-decoration-none px-1 text-white">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer