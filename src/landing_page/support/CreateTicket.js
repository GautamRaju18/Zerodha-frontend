import React from 'react';

function CreateTicket() {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='fs-4 mb-5 mt-5'>To create a ticket, select a relevant topic</h1>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <h4 className='fs-5 mb-4'><i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                    <a href='' className='text-small link-style'>Getting started</a> <br />
                    <a href='' className='text-small link-style'>Online</a> <br />
                    <a href='' className='text-small link-style'>Offline</a> <br />
                    <a href='' className='text-small link-style'>Charges</a> <br />
                    <a href='' className='text-small link-style'>Company, Partnership and HUF</a> <br />
                    <a href='' className='text-small link-style'>Non Resident Indian (NRI)</a> <br />
                </div>
                <div className='col-4'>
                    <h4 className='fs-5 mb-4'><i className="fa fa-user-o" aria-hidden="true"></i> Your Zerodha Account</h4>
                    <a href='' className='text-small link-style'>Login credentials</a> <br />
                    <a href='' className='text-small link-style'>Your Profile</a> <br />
                    <a href='' className='text-small link-style'>Account modification and segment addition</a> <br />
                    <a href='' className='text-small link-style'>CMR & DP ID</a> <br />
                    <a href='' className='text-small link-style'>Nomination</a> <br />
                    <a href='' className='text-small link-style'>Transfer and conversion of shares</a> <br />
                </div>
                <div className='col-4'>
                    <h4 className='fs-5 mb-4'><i className="fa fa-signal" aria-hidden="true"></i> Trading and Markets</h4>
                    <a href='' className='text-small link-style'>Trading FAQs</a> <br />
                    <a href='' className='text-small link-style'>Kite</a> <br />
                    <a href='' className='text-small link-style'>Margins</a> <br />
                    <a href='' className='text-small link-style'>Product and order types</a> <br />
                    <a href='' className='text-small link-style'>Corporate actions</a> <br />
                    <a href='' className='text-small link-style'>Kite features</a> <br />
                </div>
                <div className='col-4 mb-5'>
                    <h4 className='fs-5 mb-4'><i className="fa fa-envelope-o" aria-hidden="true"></i> Funds</h4>
                    <a href='' className='text-small link-style'>Fund withdrawal</a> <br />
                    <a href='' className='text-small link-style'>Adding funds</a> <br />
                    <a href='' className='text-small link-style'>Adding bank accounts</a> <br />
                    <a href='' className='text-small link-style'>eMandates</a> <br />
                </div>
                <div className='col-4 mb-5'>
                    <h4 className='fs-5 mb-4'><i className="fa fa-circle-o" aria-hidden="true"></i> Console</h4>
                    <a href='' className='text-small link-style'>IPO</a> <br />
                    <a href='' className='text-small link-style'>Referral program</a> <br />
                    <a href='' className='text-small link-style'>Portfolio</a> <br />
                    <a href='' className='text-small link-style'>Funds statement</a> <br />
                    <a href='' className='text-small link-style'>Profile</a> <br />
                    <a href='' className='text-small link-style'>Reports</a> <br />
                </div>
                <div className='col-4 mb-5'>
                    <h4 className='fs-5 mb-4'><i className="fa fa-circle-thin" aria-hidden="true"></i> Coin</h4>
                    <a href='' className='text-small link-style'>Understanding mutual funds and Coin</a> <br />
                    <a href='' className='text-small link-style'>Coin app</a> <br />
                    <a href='' className='text-small link-style'>Coin web</a> <br />
                    <a href='' className='text-small link-style'>Transaction and reports</a> <br />
                    <a href='' className='text-small link-style'>National Pension Scheme (NPS)</a> <br />
                </div>
            </div>
        </div>
    );
}

export default CreateTicket;
