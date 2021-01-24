import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import fichayaLogo from '../../assets/fichaya_logo.svg';
import person from '../../assets/person_icon.svg';
import notificationBell from '../../assets/notification_bell_icon.svg';
import caretDown from '../../assets/caret_down.svg';

import './header.scss';

const Header = () => {
    const [ open, setOpen ] = useState(false);
    const toggleMenu = () => setOpen(!open);

    return (
        <div className='header'>
            <div className="header-inner-div">
                <div className='logo'>
                    <img src={fichayaLogo} alt='fichaya logo' />
                </div>
                <div className={` ${ open ? 'open' : '' } nav`}>
                    <div className={` ${ open ? 'open menu-nav' : '' } links`}>
                        <Link className={` ${ open ? 'open' : '' }  menu-nav__item link`} onClick={ () => {
                            setOpen(!open)
                        }} to='/'>dashboard</Link>
                        <Link className={` ${ open ? 'open' : '' }  menu-nav__item link`} onClick={ () => {
                            setOpen(!open)
                        }} to='/'>customers</Link>
                        <Link className={` ${ open ? 'open' : '' }  menu-nav__item link`} onClick={ () => {
                            setOpen(!open)
                        }} to='/'>associates</Link>
                        <Link className={` ${ open ? 'open' : '' }  menu-nav__item link`} onClick={ () => {
                            setOpen(!open)
                        }} to='/'>requests</Link>
                        <Link className={` ${ open ? 'open' : '' }  menu-nav__item link`} onClick={ () => {
                            setOpen(!open)
                        }} to='/'>schedules</Link>
                        <Link className={` ${ open ? 'open' : '' }  menu-nav__item link`} onClick={ () => {
                            setOpen(!open)
                        }} to='/'>payments</Link>
                        <Link className={` ${ open ? 'open' : '' }  menu-nav__item link`} onClick={ () => {
                            setOpen(!open)
                        }} to='/'>settings</Link>
                    </div>
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
                <div className="menu-btn" onClick={toggleMenu}>
                    <span className={` ${ open ? 'open' : '' }  menu-btn__burger`}></span>
                </div>
            </div>
        </div>
    )
}

export default Header;
