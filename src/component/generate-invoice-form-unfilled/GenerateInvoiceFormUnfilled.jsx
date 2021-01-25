import React from 'react';
import { useHistory } from 'react-router-dom';

import { changeInputAction } from '../../redux/invoiceAction';

import Swal from 'sweetalert2';

const GenerateInvoiceFormUnfilled = ({ handleCancel, handleChange, dispatch, invoiceInfo, today }) => {

    const { customerName, email, phone, address, issueDate, dueDate, invoiceNo, vat, description, amount } = invoiceInfo;

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(invoiceInfo.issue_date !== "" && invoiceInfo.due_date !== "") {
            if(invoiceInfo.issue_date < today) {
                Swal.fire('Oops...', 'Issue Date Cannot Be In The Past', 'error');
                return;
            } else if(invoiceInfo.issue_date >= invoiceInfo.due_date) {
                Swal.fire('Oops...', 'Due Date Must Be Greater Than The Issue Date', 'error');
            } else {
                dispatch( changeInputAction(invoiceInfo) );
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
                <input type="submit" value="CREATE INVOICE" className="create-invoice coc-btn" />
            </div>
        </form>
    )
}

export default GenerateInvoiceFormUnfilled;
