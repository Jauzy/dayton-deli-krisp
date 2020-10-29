import React from 'react'

const Quotes = (props) => {
    return (
        <div className='bg-light p-5'>
            <div className='container text-center'>
                <hr/>
                <h1>
                    "The Spices The Ingredients That Were Used by Our Folks, Will be Able to Gratify the World's Needs for those Authentic Tropical Taste and Experiences"
                </h1>
                <div className='d-flex mt-4'>
                    <div className='mx-auto px-5 py-3 text-white rounded-lg bg-dark'>PT. DYTONA DELI KRISP</div>
                </div>
                <hr/>
                <hr style={{ border: '2px solid #FFD92A', transform: 'rotate(90deg)', width: '60px' }} className='mt-5' />
            </div>
        </div>
    )
}

export default Quotes