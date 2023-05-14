import React from 'react';
import '../css/Header.css';
import chartBar from '../assets/chart-bar.svg';
import wifi from '../assets/wifi.svg';
import battery from '../assets/battery.svg';
import arrow from '../assets/arrow.svg';
import search from '../assets/search.svg';
import menu from '../assets/menu.svg';
import bell from '../assets/bell.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className='info-bar'>
                <div className='info-bar__time'>20:55</div>
                <div className='info-bar__icons'>
                    <img src={chartBar} alt='chart-bar' />
                    <img src={wifi} alt='wifi' />
                    <img src={battery} alt='battery' />
                </div>
            </div>
            <div className='menu-bar'>
                <div className='menu-bar__location'>
                    <span>공항동</span>
                    <div className='menu-bar__location--icon'>
                        <img src={arrow} alt='arrow' />
                    </div>
                </div>
                <div className='menu-bar__icons'>
                    <img src={search} alt='search' />
                    <img src={menu} alt='menu' />
                    <img src={bell} alt='bell' />
                </div>
            </div>
        </div>
    )
}

export default Header;
