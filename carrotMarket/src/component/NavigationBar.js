import React from 'react';
import '../css/NavigationBar.css';
import home from '../assets/home.svg';
import building from '../assets/building.svg';
import mapPin from '../assets/mapPin.svg';
import chat from '../assets/chat.svg';
import user from '../assets/user.svg';

const NavigationBar = () => {
  return (
    <div className='navigation_bar'>
      <div className='navigation_bar__icons'>
        <div className='navigation_bar__icons--home'>
          <img src={home} alt='home' />
        </div>
        <div className='navigation_bar__title'>홈</div>
      </div>
      <div className='navigation_bar__icons'>
        <div className='navigation_bar__icons--building'>
          <img src={building} alt='building' />
        </div>
        <div className='navigation_bar__title'>동네생활</div>
      </div>
      <div className='navigation_bar__icons'>
        <div className='navigation_bar__icons--mapPin'>
          <img src={mapPin} alt='mapPin' />
        </div>
        <div className='navigation_bar__title'>내 근처</div>
      </div>
      <div className='navigation_bar__icons'>
        <div className='navigation_bar__icons--chat'>
          <img src={chat} alt='chat' />
        </div>
        <div className='navigation_bar__title'>채팅</div>
      </div>
      <div className='navigation_bar__icons'>
        <div className='navigation_bar__icons--user'>
          <img src={user} alt='user' />
        </div>
        <div className='navigation_bar__title'>나의 당근</div>
      </div>
    </div>
  )
}

export default NavigationBar;
