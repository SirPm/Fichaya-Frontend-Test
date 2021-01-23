import InvoiceTypes from './invoiceTypes';

export const changeInputAction = (invoiceDetailsObject) => {
    return {
        type: InvoiceTypes.INVOICE_DETAILS,
        payload: invoiceDetailsObject
    }    
}
