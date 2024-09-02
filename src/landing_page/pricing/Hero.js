import React from 'react';

function Hero() {
    return ( 
        <div className='container border-bottom'>
        <div className='row border-bottom p-5'>
            <div className='col text-center p-5 mt-5'>
                <h1 className='fs-1'>Pricing</h1>
                <p className='text-muted fs-5'>Free equity investments and flat ₹20 intraday and F&O trades</p>
            </div>
        </div>
        <div className='row mt-5 p-5'>
        <div className='col-4'>
            <img src='media/images/pricingEquity.svg'></img>
            <h2>Free equity delivery</h2>
            <p className='text-muted fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className='col-4'>
            <img src='media/images/intradayTrades.svg'></img>
            <h2>Intraday and F&O trades</h2>
            <p className='text-muted fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className='col-4 '>
            <img src='media/images/pricingEquity.svg'></img>
            <h2>Free direct MF</h2>
            <p className='text-muted fs-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
        </div>
        </div>
     );
}

export default Hero;