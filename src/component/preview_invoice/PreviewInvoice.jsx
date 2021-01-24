import React from 'react';
import { useSelector } from 'react-redux';

import Invoice from '../invoice/Invoice';
import NotFound from '../NotFound';

import './preview-invoice.scss';

const PreviewInvoice = () => {
    const invoiceDetails = useSelector( state => state.invoiceDetails );    

    return (
        invoiceDetails === null ? (
            <NotFound />
        ) : (
            <Invoice invoiceInfo={invoiceDetails} />
        )
    )
}

export default PreviewInvoice;
