import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5 mb-5'>
                <img src='media/images/largestBroker.svg' alt="largestbroker"></img>
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                    <ul>
                        <li><p>Futures and Options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                    </ul>
                        </div>
                        <div className='col-6'>
                        <ul>
                        <li><p>Stocks & IPOs</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and Govt. Securities</p></li>
                    </ul>  
                        </div>
                        <img src='media/images/pressLogos.png' style={{width:"100%"}} alt="awards"></img>
                    </div>
                </div>
            </div>
        </div>
     ) ;
}

export default Awards ;