import React from 'react';

function Pricing() {
    return ( 
        <div className='container p-5 '>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-3'>Unbeatable pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=''>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-6 p-5'>
                    <div className='row p-5 text-center'>
                        <div className='col-6 p-3 border'>
                            <h1 className='fs-1 mb-3'>₹0</h1>
                            <p className='text-muted'>Free equity delivery and <br></br> direct mutual funds</p>
                        </div>
                        <div className='col-6 p-3 border'>
                            <h2 className='fs-1 mb-3'>₹20</h2>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
     );
}

export default Pricing;