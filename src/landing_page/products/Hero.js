import React from 'react';

function Hero() {
    return (  
        <div className='container border-bottom'>
            <div className='row mt-4'>
                <div className='col p-5 text-center'>
                    <h1>Technology</h1>
                    <h3 className='fs-4 mt-2 text-muted'>Sleek, modern, and intuitive trading platforms</h3>
                    <p className='mt-3'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings →</a> </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;