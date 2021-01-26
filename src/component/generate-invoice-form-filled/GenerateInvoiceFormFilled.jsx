import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { changeInputAction } from '../../redux/invoiceAction';

import Swal from 'sweetalert2';

const GenerateInvoiceFormFilled = ({ handleCancel, dispatch, today, invoiceDetails }) => {

    const [ newInvoiceInfo, setNewInvoiceInfo ] = useState({
        customer_or_company_name: invoiceDetails.customer_or_company_name,
        email_address: invoiceDetails.email_address,
        phone_number: invoiceDetails.phone_number,
        home_or_building_address: invoiceDetails.home_or_building_address,
        issue_date: invoiceDetails.issue_date,
        due_date: invoiceDetails.due_date,
        invoice_no: invoiceDetails.invoice_no,
        vat: invoiceDetails.vat,
        service_description: invoiceDetails.service_description,
        service_amount: invoiceDetails.service_amount,
        total_amount: invoiceDetails.total_amount,
        vat_amount: invoiceDetails.vat_amount
    });

    // scroll to the top of the component when it renders
    useEffect( () => {
        window.scrollTo(0, 0);
    }, []);
    
    const handleChange2 = (e) => {
        const { name, value } = e.target;

        setNewInvoiceInfo({
            ...newInvoiceInfo,
            [name]: value,
        });

        // Automatically calculate the total amount when typing in the service amount
        if(name === "service_amount") {
            let vatAmt = ( (Number(newInvoiceInfo.vat) / 100) * Number(value) );
            let totalAmt = (vatAmt + Number(value));
            setNewInvoiceInfo({
                ...newInvoiceInfo,
                service_amount: value,
                vat_amount: vatAmt.toFixed(2),
                total_amount: totalAmt.toFixed(2)
            })
        }

        // Also automatically calculate the total amount if for some reason the vat is been changed, only if the service amount is also filled
        if(name === "vat") {
            if(newInvoiceInfo.service_amount !== "") {
                let vatAmt = ( (Number(value) / 100) * Number(newInvoiceInfo.service_amount) );
                let totalAmt = (vatAmt + Number(newInvoiceInfo.service_amount));
                setNewInvoiceInfo({
                    ...newInvoiceInfo,
                    vat: value,
                    vat_amount: vatAmt.toFixed(2),
                    total_amount: totalAmt.toFixed(2)
                })
            }
        }
    }

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newInvoiceInfo.issue_date !== "" && newInvoiceInfo.due_date !== "") {
            if(newInvoiceInfo.issue_date < today) {
                Swal.fire('Oops...', 'Issue Date Cannot Be In The Past', 'error');
                return;
            } else if(newInvoiceInfo.issue_date >= newInvoiceInfo.due_date) {
                Swal.fire('Oops...', 'Due Date Must Be Greater Than The Issue Date', 'error');
            } else {
                dispatch( changeInputAction(newInvoiceInfo) );
                history.push('/generate-invoice/preview-your-invoice');
            }
        }
    }
    
    return (
        <form name="invoice_info_submit" onSubmit={ handleSubmit } className="invoice-info-div">
            <div className="invoice-info-card">
                <div className="invoice-info-card-sub-div">
                    <div className="input-div">
                        <label htmlFor="" className="input-label">Customer/Company name</label>
                        <input className="gen-invoice-input" required type="text" name="customer_or_company_name" value={newInvoiceInfo.customer_or_company_name} onChange={ handleChange2 } />
                    </div>
                    <div className="email-and-phone two-in-one-input-div">
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Email address</label>
                            <input className="gen-invoice-input" required type="email" name="email_address" value={newInvoiceInfo.email_address} onChange={ handleChange2 } />
                        </div>
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Phone number</label>
                            <input className="gen-invoice-input" required type="number" min="0" name="phone_number" value={newInvoiceInfo.phone_number} onChange={ handleChange2 } />
                        </div>
                    </div>
                    <div className="input-div">
                        <label htmlFor="" className="input-label">Home/Building Address</label>
                        <input className="gen-invoice-input" required type="text" name="home_or_building_address" value={newInvoiceInfo.home_or_building_address} onChange={ handleChange2 } />
                    </div>
                </div>
            </div>
            <div className="invoice-info-card invoice-info-card-l">
                <div className="invoice-info-card-sub-div">
                    <div className="issue-and-due-date two-in-one-input-div">
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Issue date</label>
                            <input className="gen-invoice-input" required type="date" name="issue_date" value={newInvoiceInfo.issue_date} onChange={ handleChange2 } />
                        </div>
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Due date</label>
                            <input className="gen-invoice-input" required type="date" name="due_date" value={newInvoiceInfo.due_date} onChange={ handleChange2 } />
                        </div>
                    </div>
                    <div className="invoiceno-and-vat two-in-one-input-div">
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Invoice number</label>
                            <input className="gen-invoice-input" required type="number" name="invoice_no" value={newInvoiceInfo.invoice_no} onChange={ handleChange2 } />
                        </div>
                        <div className="input-div">
                            <label htmlFor="" className="input-label">V.A.T %</label>
                            <input className="gen-invoice-input" required type="number" name="vat" value={newInvoiceInfo.vat} onChange={ handleChange2 } />
                        </div>
                    </div>
                    <div className="input-div"> 
                        <label htmlFor="" className="input-label">Service description</label>
                        <input className="gen-invoice-input" required type="text" name="service_description" value={newInvoiceInfo.service_description} onChange={ handleChange2 } />
                    </div>
                    <div className="service-and-total_amt two-in-one-input-div">
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Service amount</label>
                            <input className="gen-invoice-input" required type="number" name="service_amount" value={newInvoiceInfo.service_amount} onChange={ handleChange2 } />
                        </div>
                        <div className="input-div">
                            <label htmlFor="" className="input-label">Total amount</label>
                            <input className="gen-invoice-input" style={{ 
                                backgroundColor: "#EDEDED",
                                border: "none" 
                            }} readOnly id="total" type="number" min="0" step="any" name="total_amount" value={newInvoiceInfo.total_amount} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cancel-or-create-invoice-div">
                <input type="button" value="CANCEL" className="cancel coc-btn" onClick={ handleCancel } />
                <input type="submit" value="CREATE INVOICE" className="create-invoice coc-btn" />
            </div>
        </form>
    )
}

export default GenerateInvoiceFormFilled;
