import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { resetInputAction } from '../../redux/invoiceAction';

import GenerateInvoiceFormUnfilled from '../generate-invoice-form-unfilled/GenerateInvoiceFormUnfilled';
import GenerateInvoiceFormFilled from '../generate-invoice-form-filled/GenerateInvoiceFormFilled';

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

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInvoiceInfo({
            ...invoiceInfo,
            [name]: value,
        });

        if(name === "service_amount") {
            let vatAmt = ( (Number(invoiceInfo.vat) / 100) * Number(value) );
            let totalAmt = (vatAmt + Number(value));
            setInvoiceInfo({
                ...invoiceInfo,
                service_amount: value,
                vat_amount: vatAmt.toFixed(2),
                total_amount: totalAmt.toFixed(2)
            })
        }

        if(name === "vat") {
            if(invoiceInfo.service_amount !== "") {
                let vatAmt = ( (Number(value) / 100) * Number(invoiceInfo.service_amount) );
                let totalAmt = (vatAmt + Number(invoiceInfo.service_amount));
                setInvoiceInfo({
                    ...invoiceInfo,
                    vat: value,
                    vat_amount: vatAmt.toFixed(2),
                    total_amount: totalAmt.toFixed(2)
                })
            }
        }
    }

    const dispatch = useDispatch();
    const invoiceDetails = useSelector( state => state.invoiceDetails );

    const history = useHistory();

    const handleCancel = () => {
        dispatch( resetInputAction(null) );
        history.push('/');
    }

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();

    month = String(month);

    if(month.includes('0')){
        // don't do anything
    } else{
        month = `0${month}`;
    }

    let today = `${year}-${month}-${date}`;    

    console.log(invoiceDetails);
    
    return (
        <div className='generate-invoice-div width'>
            <button className="gi-btn">generate invoice</button>
            <span className="heading-text-gi">enter invoice info</span>
            {
                invoiceDetails === null ? (
                    <GenerateInvoiceFormUnfilled handleChange = { handleChange } dispatch = { dispatch } handleCancel = { handleCancel } invoiceInfo = { invoiceInfo } today = { today } />
                ) : (
                    <GenerateInvoiceFormFilled handleChange = { handleChange } dispatch = { dispatch } handleCancel = { handleCancel } invoiceInfo = { invoiceInfo } invoiceDetails = { invoiceDetails } today = { today } />
                )
            }
        </div>
    )
}

export default GenerateInvoice;
