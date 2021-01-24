import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { changeInputAction } from '../../redux/invoiceAction';

import './generate-invoice.scss';

const GenerateInvoice = () => {
    const [ invoiceInfo, setInvoiceInfo ] = useState({
        customer_or_company_name: "",
        email_address: "",
        phone_number: "",
        home_or_building_address: "",
        issue_date: "",
        due_date: "",
        invoice_no: "",
        vat: "",
        service_description: "",
        service_amount: "",
        total_amount: "",
        vat_amount: ""
    });  

    let history = useHistory();
    
    // console.log(invoiceInfo);
    const { customerName, email, phone, address, issueDate, dueDate, invoiceNo, vat, description, amount } = invoiceInfo;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInvoiceInfo({
            ...invoiceInfo,
            [name]: value,
        });

        // console.log(name);
        // console.log(invoiceInfo.vat);
        if(name === "service_amount") {
            let vatAmt = ( (Number(invoiceInfo.vat) / 100) * Number(value) );
            let totalAmt = Math.round(vatAmt + Number(value));
            setInvoiceInfo({
                ...invoiceInfo,
                service_amount: value,
                vat_amount: vatAmt,
                total_amount: totalAmt
            })
        }
    }

    const dispatch = useDispatch();

    const handleCancel = () => {
        history.push('/');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/generate-invoice/preview-your-invoice');
    }

    return (
        <div className='generate-invoice-div width'>
            <button className="request-btn">generate invoice</button>
            <span className="heading-text-gi">enter invoice info</span>
            <form name="invoice_info_submit" onSubmit={ handleSubmit } className="invoice-info-div">
                <div className="invoice-info-card">
                    <div className="invoice-info-card-sub-div">
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Customer/Company name</label>
                            <input className="gen-invoice-input" required type="text" name="customer_or_company_name" value={customerName} onChange={ handleChange } />
                        </div>
                        <div className="email-and-phone two-in-one-input-div">
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Email address</label>
                                <input className="gen-invoice-input" required type="email" name="email_address" value={email} onChange={ handleChange } />
                            </div>
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Phone number</label>
                                <input className="gen-invoice-input" required type="number" min="0" name="phone_number" value={phone} onChange={ handleChange } />
                            </div>
                        </div>
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Home/Building Address</label>
                            <input className="gen-invoice-input" required type="text" name="home_or_building_address" value={address} onChange={ handleChange } />
                        </div>
                    </div>
                </div>
                <div className="invoice-info-card invoice-info-card-l">
                    <div className="invoice-info-card-sub-div">
                        <div className="issue-and-due-date two-in-one-input-div">
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Issue date</label>
                                <input className="gen-invoice-input" required type="date" name="issue_date" value={issueDate} onChange={ handleChange } />
                            </div>
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Due date</label>
                                <input className="gen-invoice-input" required type="date" name="due_date" value={dueDate} onChange={ handleChange } />
                            </div>
                        </div>
                        <div className="invoiceno-and-vat two-in-one-input-div">
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Invoice number</label>
                                <input className="gen-invoice-input" required type="number" name="invoice_no" value={invoiceNo} onChange={ handleChange } />
                            </div>
                            <div className="input-div">
                                <label htmlFor="" className="input-label">V.A.T %</label>
                                <input className="gen-invoice-input" required type="number" name="vat" value={vat} onChange={ handleChange } />
                            </div>
                        </div>
                        <div className="input-div"> 
                            <label htmlFor="" className="input-label">Service description</label>
                            <input className="gen-invoice-input" required type="text" name="service_description" value={description} onChange={ handleChange } />
                        </div>
                        <div className="service-and-total_amt two-in-one-input-div">
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Service amount</label>
                                <input className="gen-invoice-input" required type="number" name="service_amount" value={amount} onChange={ handleChange } />
                            </div>
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Total amount</label>
                                <input className="gen-invoice-input" style={{ 
                                    backgroundColor: "#EDEDED",
                                    border: "none" 
                                }} readOnly id="total" type="number" min="0" step="any" name="total_amount" value={invoiceInfo.total_amount} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cancel-or-create-invoice-div">
                    <input type="button" value="CANCEL" className="cancel coc-btn" onClick={ handleCancel } />
                    <input type="submit" value="CREATE INVOICE" className="create-invoice coc-btn" onClick={ 
                        () => dispatch( changeInputAction(invoiceInfo) )
                    } />
                </div>
            </form>
        </div>
    )
}

export default GenerateInvoice;
