import React, { useState } from 'react';
import '../css/NavigationBar.css';
import home from '../assets/home.svg';
import solidHome from '../assets/(solid)home.svg';
import building from '../assets/building.svg';
import solidBuilding from '../assets/(solid)building.svg';
import mapPin from '../assets/mapPin.svg';
import solidMapPin from '../assets/(solid)mapPin.svg';
import chat from '../assets/chat.svg';
import solidChat from '../assets/(solid)chat.svg';
import user from '../assets/user.svg';
import solidUser from '../assets/(solid)user.svg';

const NavigationBar = () => {
  const [NavMenu,setNavMenu] = useState([
    { idx: 1, outlineIcon: home, solidIcon: solidHome, title:'홈'},
    { idx: 2, outlineIcon: building, solidIcon: solidBuilding, title:'동네생활'},
    { idx: 3, outlineIcon: mapPin, solidIcon: solidMapPin, title:'내 근처'},
    { idx: 4, outlineIcon: chat, solidIcon: solidChat, title:'채팅'},
    { idx: 5, outlineIcon: user, solidIcon: solidUser, title:'나의 당근'},
  ]);

  // 핵심은 클릭되었을때 그 클릭한 것의 인덱스 값을 받아와서
  // 그 클릭한 개체에게 신호를 보내주는 것
  const [menuNum, setMenuNum] = useState(1);

  return (
    <div className='navigation_bar'>
      {NavMenu.map((item,idx)=>{
        return(
          <div className='navigation_bar__icons' key={idx}
          onClick={()=>setMenuNum(item.idx)}>
            <div className='navigation_bar__icons--img'>
              {item.idx === menuNum ?
              (<img src={item.solidIcon} alt={item.title} />)
              :
              (<img src={item.outlineIcon} alt={item.title} />)}
              
            </div>
            <div className='navigation_bar__title'>{item.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default NavigationBar;
