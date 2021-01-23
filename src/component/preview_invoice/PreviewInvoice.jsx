import React from 'react';
import { useSelector } from 'react-redux';

import './preview-invoice.scss';

const PreviewInvoice = () => {
    const invoiceDetails = useSelector( state => state );

    console.log(invoiceDetails);

    return (
        <div>
            Preview Invoice
        </div>
    )
}

export default PreviewInvoice;
