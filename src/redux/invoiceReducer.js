import InvoiceTypes from './invoiceTypes';

const INITIAL_STATE = {
    invoiceDetails: null
}

const invoiceReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case InvoiceTypes.INVOICE_DETAILS:
            return {
                ...state,
                invoiceDetails: action.payload
            }
        default:
            return state
    }
}

export default invoiceReducer;