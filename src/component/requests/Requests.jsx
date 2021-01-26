import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { resetInputAction } from '../../redux/invoiceAction';

import caretDown from '../../assets/caret_down.svg';
import './requests.scss';

const Requests = () => {
    const lastRow = true;
    const ungenerated = true;

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(resetInputAction(null));

        // scroll to the top on small browsers that have a smaller height
        window.scrollTo(0, 0);
    })

    return (
        <div className='requests width'>
            <button className="request-btn">request information</button>
            <div className="request-card">
                <div className="request-card-row">
                    <div className="request-card-col">
                        <span className="request-card-col-top">request type</span>
                        <span className="request-card-col-body">post-con</span>
                    </div>
                    <div className="request-card-col">
                        <span className="request-card-col-top">customer name</span>
                        <span className="request-card-col-body">peter abu-ekpeshie</span>
                    </div>
                    <div className="request-card-col">
                        <span className="request-card-col-top">cleaning date</span>
                        <span className="request-card-col-body">09-10-2019</span>
                    </div>
                </div>
                <div className="request-card-row">
                    <div className="request-card-col">
                        <span className="request-card-col-top">invoice status</span>
                        <span className={` ${ ungenerated ? 'ungenerated': '' } request-card-col-body`}>ungenerated</span>
                    </div>
                    <div className="request-card-col">
                        <span className="request-card-col-top">request date</span>
                        <span className="request-card-col-body">06-10-2016</span>
                    </div>
                    <div className="request-card-col">
                        <span className="request-card-col-top">request time</span>
                        <span className="request-card-col-body">8:00 a.m</span>
                    </div>
                </div>
                <div className={` ${lastRow ? 'request-last-row': 'request-card-row' }`}>
                    <div 
                        className="request-card-col"
                        style={{
                            marginRight: "4%"
                        }}
                    >
                        <span className="request-card-col-top">location</span>
                        <span className="request-card-col-body">8, yovi street, iwaya, onike, yaba.</span>
                    </div>
                    <div className="request-card-col">
                        <span className="request-card-col-top">house type</span>
                        <span className="request-card-col-body">5-bedroom duplex</span>
                    </div>
                </div>
                <div className="action">
                    <span className="action-text">Action</span>
                    <div className="caret">
                        <img src={caretDown} alt="caret"/>
                        <span className='nothing-really'></span>
                        <div className="action-choices">
                            <Link to="/" className="action-choice">Contact Customer</Link>
                            <Link to="/generate-invoice" className="action-choice">Generate Invoice</Link>
                            <Link to="/" className="action-choice">Reject Request</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Requests;
