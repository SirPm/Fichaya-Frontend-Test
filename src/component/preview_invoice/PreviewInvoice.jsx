import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Invoice from '../invoice/Invoice';
import error from '../../assets/404_image.jpg';

import './preview-invoice.scss';

const PreviewInvoice = () => {
    const invoiceDetails = useSelector( state => state.invoiceDetails );    

    return (
        invoiceDetails === null ? (
            <div className="error-page" style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${error})`,
                    height: "91vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <span
                    style={{
                        fontWeight: 'bold',
                        color: '#DEA000',
                        fontSize: '18px',
                        textAlign: 'center',
                        width: '85%'
                    }}
                >Oops, something's definitely wrong. But do not fret simply use any of the links above to navigate anywhere on our website or click <Link to="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        fontWeight: "500"
                    }}
                >HERE</Link> to go to the requests page</span>
            </div>
        ) : (
            <Invoice invoiceInfo={invoiceDetails} />
        )
    )
}

export default PreviewInvoice;
