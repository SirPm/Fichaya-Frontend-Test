import React from 'react';
import { useSelector } from 'react-redux';

import fichayaLogo from '../../assets/fichaya_logo.svg';

import './preview-invoice.scss';

const PreviewInvoice = () => {
    const invoiceDetails = useSelector( state => state );

    console.log(invoiceDetails);

    return (
        <div className="preview-invoice width">
            <button className="request-btn">generate invoice</button>
            <span className="heading-text-gi">preview your invoice</span>
            <div className="preview-invoice-card">
                <div className="preview-invoice-card-inner">
                    <div className="card-heading">
                        <img src={fichayaLogo} alt="fichaya logo"/>
                        <span>invoice</span>
                    </div>
                    <div className="card-body">
                        <div className="card-body-left">
                            <span className="first">from</span>
                            <span className="second">fichaya</span>
                            <span className="third">finance@fichaya.com</span>
                            <span className="fourth">+2348177141611</span>
                        </div>
                        <div className="card-body-right">
                            <div className="card-body-right-up">
                                <span className="first">status</span>
                                <span className="second">unpaid</span>
                            </div>
                            <div className="card-body-right-down">
                                <span className="third-first">created</span>
                                <span className="fourth">October 8, 2020</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{ margin: "8% 0"}}>
                        <div className="card-body-left">
                            <span className="first">bill to</span>
                            <span className="second" style={{ textTransform: 'capitalize'}}>spleet nigeria limited</span>
                            <span className="third">info@spleet.ng</span>
                            <span className="third" style={{ textTransform: "capitalize"}}>51, iwaya road, onike yaba</span>
                            <span className="third">+2348140564969</span>
                        </div>
                        <div className="card-body-right">
                            <div className="card-body-right-up">
                                <span className="first">due</span>
                                <span className="second">October 11, 2020</span>
                            </div>
                            <div className="card-body-right-down">
                                <span className="third-first">amount</span>
                                <span className="fourth">ngn 45,454</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-table">
                        <div className="card-table-heading">
                            <span className="description">description</span>      
                            <span className="qty">qty</span> 
                            <span className="unit-price">unit price</span>
                            <span className="amount">amount</span>
                        </div>
                        <div className="card-table-body">
                            <span className="description-body">5 bedroom duplex post-con cleaning</span>
                            <span className="qty-body">1</span>  
                            <span className="unit-price-body">ngn 45,000 </span>   
                            <span className="amount-body">ngn 45,000</span>
                        </div>
                        <div className="card-table-footer">
                            <div className="card-table-footer-left">
                                <span className="ctfl">sub-total</span>
                                <span className="ctfl">vat(5.5%)</span>
                                <span className="ctfl">total</span>
                            </div>
                            <div className="card-table-footer-right">
                                <span className="vat-amt">ngn 45,000</span>
                                <span className="vat-amt">ngn 3373</span>
                                <span className="total-amt">ngn 48373</span>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
            <div className="invoice-preview-btns">
                <button className="go-back sending-btn">go back</button>
                <button className="send sending-btn">send to customer</button>
            </div>
        </div>
    )
}

export default PreviewInvoice;
