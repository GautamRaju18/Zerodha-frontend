import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container '>
            <div className='row'>
                <div className='col-5 p-5 mb-3'>
                    <div>
                    <h1>{productName}</h1>
                    <p className='fs-5'>{productDescription}</p>
                    </div>
                    <div>
                    <a href={learnMore} style={{textDecoration:'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <img src={imageURL} alt="product" />
                </div>
            </div>
        </div>
     );
}

export default RightSection;