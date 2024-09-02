import React from 'react';

function Hero() {
    return (
        <section className='container-fluid' id='supportHero'>
          <div className='p-5' id='supportWrapper'>
            <h4>Support Portal</h4>
            <a href='' style={{color:'white'}}>Track tickets</a>
          </div>
          <div className='row p-3' id='supportMain'>
          <div className='col-6 '>
            <h2 className='fs-3'>Search for an answer or browse help topics to create a ticket</h2>
            <input type='text' placeholder='Eg: how to activate F&O,why is my order getting rejected...' className='form-control mt-4 fs-6' /> <br />
            <a href='' style={{color:'white'}}>Track account opening</a> &nbsp;
            <a href='' style={{color:'white'}}>Track segment activation</a> &nbsp;
            <a href='' style={{color:'white'}}>Intraday margins</a> &nbsp; <br />
            <a href='' style={{color:'white'}}>Kite user manual</a>
          </div>
          <div className='col-2'></div>
          <div className='col-4 mb-3'>
            <h2 className='fs-3'>Featured</h2>
            <ol>
            <li><a href='' style={{color:'white'}}>Right Entitlement list in July 2024</a> &nbsp;</li>
            <li><a href='' style={{color:'white'}}>Latest Intraday leverages and Square off timings</a> &nbsp;</li>
            </ol>
          </div>
          </div>
        </section>
      );
}

export default Hero;