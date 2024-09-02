import React from 'react';

function Team() {
    return (  
        <div className='container'>
            <h1 className='text-center'>Team</h1>
            <div className='row'>
                <div className='col-6 text-center p-5'>
                    <img src='media/images/nithinKamath.jpg' style={{borderRadius:"100%", width:"35%"}}></img>
                    <h4 className='mt-3 text-muted fs-5'>Nithin Kamath</h4>
                    <p className='text-muted'>Founder, CEO</p>
                </div>
                <div className='col-6 p-5'>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>

                </div>
            </div>
        </div>

        
    );
}

export default Team;