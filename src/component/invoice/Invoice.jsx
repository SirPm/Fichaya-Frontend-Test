import React from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

import fichayaLogo from '../../assets/fichaya_logo.svg';
import './invoice.scss';

const Invoice = (invoiceInfo) => {
    let paid = false;
    // console.log(invoiceInfo.invoiceInfo.service_amount);
    let history = useHistory();

    function capitalizeFirstLetters(str){
        return str.toLowerCase().replace(/^\w|\s\w/g, function (letter) {
          return letter.toUpperCase();
        })
    }

    let customerName = capitalizeFirstLetters(invoiceInfo.invoiceInfo.customer_or_company_name);
  

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const convertDate = (date_str) => {
        let temp_date = date_str.split("-");
        return months[Number(temp_date[1]) - 1] + " " + temp_date[2] + ", " + temp_date[0];
    }

    let issueDate = convertDate(invoiceInfo.invoiceInfo.issue_date);
    let dueDate = convertDate(invoiceInfo.invoiceInfo.due_date);

    const formatAmount = new Intl.NumberFormat("en-GB");

    return (
        <div className="preview-invoice width">
            <button className="gi-btn">generate invoice</button>
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
                                <span className="fourth">{issueDate}</span>
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
                                <span className="second">{dueDate}</span>
                            </div>
                            <div className="card-body-right-down">
                                <span className="third-first">amount</span>
                                <span className="fourth">ngn {formatAmount.format(Number(invoiceInfo.invoiceInfo.total_amount))}</span>
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
                            <span className="unit-price-body">ngn {formatAmount.format(Number(invoiceInfo.invoiceInfo.service_amount))} </span>   
                            <span className="amount-body">ngn {formatAmount.format(Number(invoiceInfo.invoiceInfo.service_amount))}</span>
                        </div>
                        <div className="card-table-footer">
                            <div className="card-table-footer-top">
                                <span className="ctfl">sub-total</span>
                                <span className="vat-amt">ngn {formatAmount.format(Number(invoiceInfo.invoiceInfo.service_amount))}</span>
                            </div>
                            <div className="card-table-footer-middle">
                                <span className="ctfl">vat({invoiceInfo.invoiceInfo.vat}%)</span>
                                <span className="vat-amt">ngn {formatAmount.format(Number(invoiceInfo.invoiceInfo.vat_amount))}</span>
                            </div>
                            <div className="card-table-footer-bottom">
                                <span className="ctfl">total</span>
                                <span className="total-amt">ngn {formatAmount.format(Number(invoiceInfo.invoiceInfo.total_amount))}</span>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
            <div className="invoice-preview-btns">
                <button className="go-back sending-btn" onClick={ () => history.push('/generate-invoice')}>go back</button>
                <button className="send sending-btn" onClick={ () => {
                    Swal.fire('Congrats', `Invoice Successfully Sent To ${customerName}`, 'success');
                    history.push('/');
                }}>send to customer</button>
            </div>
        </div>
    )
}

export default Invoice;
