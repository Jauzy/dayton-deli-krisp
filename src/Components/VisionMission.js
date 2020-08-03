import React from 'react'

const VisionMission = (props) => {
    return (
        <section className='blob-bg' id='vision-mission'>
            <div className='container text-white'>
                <div className='row mb-5'>
                    <div className='col-md text-right bg-dark p-5 rounded-lg mx-2 my-2'>
                        <h1 className=''>Vision</h1>
                        <h6 className=''>
                            To produce high quality products, emphasis on sustainable economic growth and human resource development, technology management and good corporate governance.
                        </h6>
                    </div>
                    <div className='col-md bg-dark p-5 rounded-lg mx-2 my-2'>
                        <h1 className=''>Mission</h1>
                        <ul>
                            <li>Provide excellent services to all customers.</li>
                            <li>Provide quality products.</li>
                            <li>Emphasize on food hygiene and safety.</li>
                            <li>Continuously innovating to achieve customer satisfaction.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='shape-wave-bottom'></div>
        </section>
    )
}

export default VisionMission