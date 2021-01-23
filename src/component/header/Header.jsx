import React from 'react';
import { Link } from 'react-router-dom';

import fichayaLogo from '../../assets/fichaya_logo.svg';
import person from '../../assets/person_icon.svg';
import notificationBell from '../../assets/notification_bell_icon.svg';
import caretDown from '../../assets/caret_down.svg';

import './header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-inner-div">
                <div className='logo'>
                    <img src={fichayaLogo} alt='fichaya logo' />
                </div>
                <div className='links'>
                    <Link className='link' to='/'>dashboard</Link>
                    <Link className='link' to='/'>customers</Link>
                    <Link className='link' to='/'>associates</Link>
                    <Link className='link' to='/'>requests</Link>
                    <Link className='link' to='/'>schedules</Link>
                    <Link className='link' to='/'>payments</Link>
                    <Link className='link' to='/'>settings</Link>
                </div>
                <div className='icons'>
                    <div className="notification-icon-div icon">
                        <img src={notificationBell} alt="notification bell icon"/>
                    </div>
                    <div className="person-icon-div icon">
                        <div className="person-icon-sub-div">
                            <img src={person} alt="person"/>
                            <img src={caretDown} alt="caret down"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
