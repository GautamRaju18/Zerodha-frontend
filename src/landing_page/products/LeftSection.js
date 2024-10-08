import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='row p-3'>
                <div className='col-5 p-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-2'></div>
                <div className='col-4 p-5'>
                    <div>
                    <h1>{productName}</h1>
                    <p className='fs-5'>{productDescription}</p>
                    </div>
                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href={learnMore} style={{marginLeft:"50px", textDecoration:'none'}}>Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-3'>
                    <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore} style={{marginLeft:"50px"}}><img src='media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;