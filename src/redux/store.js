import { createStore } from 'redux';
import invoiceReducer from './invoiceReducer';

const store = createStore(invoiceReducer);

export default store;