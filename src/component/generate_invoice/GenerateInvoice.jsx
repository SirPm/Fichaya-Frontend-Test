import React, { useState } from 'react';

import './generate-invoice.scss';

const GenerateInvoice = () => {
    const [ invoiceInfo, setInvoiceInfo ] = useState({
        customer_or_company_name: "",
        email_address: "",
        phone_number: null,
        home_or_building_address: "",
        issue_date: null,
        due_date: null,
        invoice_no: null,
        service_description: "",
        service_amount: null,
        total_amount: null
    });   
          
    return (
        <div className='generate-invoice-div width'>
            <button className="request-btn">generate invoice</button>
            <span className="heading-text-gi">enter invoice info</span>
            <div className="invoice-info-div">
                <div className="invoice-info-card">
                    <div className="invoice-info-card-sub-div">
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Customer/Company name</label>
                            <input className="gen-invoice-input" type="text" name="customer_or_company_name" />
                        </div>
                        <div className="email-and-phone two-in-one-input-div">
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Email address</label>
                                <input className="gen-invoice-input" type="text" name="email_address" />
                            </div>
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Phone number</label>
                                <input className="gen-invoice-input" type="text" name="phone_number" />
                            </div>
                        </div>
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Home/Building Address</label>
                            <input className="gen-invoice-input" type="text" name="home_or_building_address" />
                        </div>
                    </div>
                </div>
                <div className="invoice-info-card">
                    <div className="invoice-info-card-sub-div">
                        <div className="issue-and-due-date two-in-one-input-div">
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Issue date</label>
                                <input className="gen-invoice-input" type="text" name="issue_date" />
                            </div>
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Due date</label>
                                <input className="gen-invoice-input" type="text" name="due_date" />
                            </div>
                        </div>
                        <div className="invoiceno-and-vat two-in-one-input-div">
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Invoice number</label>
                                <input className="gen-invoice-input" type="text" name="invoice_no" />
                            </div>
                            <div className="input-div">
                                <label htmlFor="" className="input-label">V.A.T %</label>
                                <input className="gen-invoice-input" type="text" name="vat" />
                            </div>
                        </div>
                        <div className="input-div"> 
                            <label htmlFor="" className="input-label">Service description</label>
                            <input className="gen-invoice-input" type="text" name="service_description" />
                        </div>
                        <div className="service-and-total_amt two-in-one-input-div">
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Service amount</label>
                                <input className="gen-invoice-input" type="text" name="service_amount" />
                            </div>
                            <div className="input-div">
                                <label htmlFor="" className="input-label">Total amount</label>
                                <input className="gen-invoice-input" type="text" name="total_amount" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cancel-or-create-invoice-div">
                    <button className="cancel">Cancel</button>
                    <button className="create-invoice">Create Invoice</button>
                </div>
            </div>
        </div>
    )
}

export default GenerateInvoice;
