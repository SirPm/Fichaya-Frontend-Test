import React from 'react';
import { useHistory } from 'react-router-dom';

import fichayaLogo from '../../assets/fichaya_logo.svg';
import './invoice.scss';

const Invoice = (invoiceInfo) => {
    let paid = false;
    console.log(invoiceInfo.invoiceInfo.service_amount);
    let history = useHistory();

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
                                <span className={`${ !paid ? 'unpaid' : 'second'}`}>unpaid</span>
                            </div>
                            <div className="card-body-right-down">
                                <span className="third-first">created</span>
                                <span className="fourth">{invoiceInfo.invoiceInfo.issue_date}</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-body" style={{ margin: "8% 0"}}>
                        <div className="card-body-left">
                            <span className="first">bill to</span>
                            <span className="second" style={{ textTransform: 'capitalize'}}>{invoiceInfo.invoiceInfo.customer_or_company_name}</span>
                            <span className="third">{invoiceInfo.invoiceInfo.email_address}</span>
                            <span className="third" style={{ textTransform: "capitalize"}}>{invoiceInfo.invoiceInfo.home_or_building_address}</span>
                            <span className="third">{invoiceInfo.invoiceInfo.phone_number}</span>
                        </div>
                        <div className="card-body-right">
                            <div className="card-body-right-up">
                                <span className="first">due</span>
                                <span className="second">{invoiceInfo.invoiceInfo.due_date}</span>
                            </div>
                            <div className="card-body-right-down">
                                <span className="third-first">amount</span>
                                <span className="fourth">ngn {invoiceInfo.invoiceInfo.service_amount}</span>
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
                            <span className="description-body">{invoiceInfo.invoiceInfo.service_description}</span>
                            <span className="qty-body">1</span>  
                            <span className="unit-price-body">ngn {invoiceInfo.invoiceInfo.service_amount} </span>   
                            <span className="amount-body">ngn {invoiceInfo.invoiceInfo.service_amount}</span>
                        </div>
                        <div className="card-table-footer">
                            <div className="card-table-footer-top">
                                <span className="ctfl">sub-total</span>
                                <span className="vat-amt">ngn {invoiceInfo.invoiceInfo.service_amount}</span>
                            </div>
                            <div className="card-table-footer-middle">
                                <span className="ctfl">vat({invoiceInfo.invoiceInfo.vat}%)</span>
                                <span className="vat-amt">ngn {invoiceInfo.invoiceInfo.vat_amount}</span>
                            </div>
                            <div className="card-table-footer-bottom">
                                <span className="ctfl">total</span>
                                <span className="total-amt">ngn {invoiceInfo.invoiceInfo.total_amount}</span>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
            <div className="invoice-preview-btns">
                <button className="go-back sending-btn" onClick={ () => history.push('/generate-invoice')}>go back</button>
                <button className="send sending-btn">send to customer</button>
            </div>
        </div>
    )
}

export default Invoice;
