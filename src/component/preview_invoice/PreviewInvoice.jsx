import React from 'react';
import { useSelector } from 'react-redux';

import Invoice from '../invoice/Invoice';

import './preview-invoice.scss';

const PreviewInvoice = () => {
    const invoiceDetails = useSelector( state => state.invoiceDetails );    

    return (
        invoiceDetails === null ? (
            <h1>nothing to see</h1>
        ) : (
            <Invoice invoiceInfo={invoiceDetails} />
        )
    )
}

export default PreviewInvoice;
