import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MainContext } from '../context/mainContext';
import './Sidebar.css';

const Sidebar = () => {
  const { barItems, topBarItems, showExplorer, setShowExplorer } =
    useContext(MainContext);
  const [isOpen, setIsOpen] = useState(true);

  //this function will add item from sidebar to topbar if it does not exist
  function addItem(item) {
    var index = topBarItems.findIndex((x) => x.id === item.id);
    if (index === -1) {
      topBarItems.push(item);
    } else return;
  }
  // function to check if homepage
  window.homepagecheck = function () {
    var check = false;
    if (document.location.pathname === '/') {
      check = true;
    }
    return check;
  };
  //Check if on homepage then trigger sidebar
  const toggleExplorer = () => {
    if (window.homepagecheck()) {
      setShowExplorer(!showExplorer);
    }
  };
  return (
    <>
      <div
        id='first-bar'
        className='h-full w-[3rem] md:w-[4rem] bg-secondary flex flex-col justify-between border-r-[1px] border-border select-none'
      >
        <div className='flex flex-col '>
          <NavLink
            to='/'
            exact
            className={`w-[3rem] md:w-[4rem] h-[3rem] md:h-[4rem] grid place-items-center  hover:bg-primary fill-current text-[#968F8F] `}
            activeClassName='border-l-2 border-active side-active '
            onClick={toggleExplorer}
          >
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z'></path>
            </svg>
          </NavLink>

          <NavLink
            to='/projects'
            className='w-[3rem] md:w-[4rem]  h-[3rem] md:h-[4rem] grid place-items-center  hover:bg-primary fill-current text-[#968F8F]'
            activeClassName='border-l-2 border-active side-active fill-current text-green'
          >
            <svg
              width='32'
              height='32'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M4.708 5.578L2.061 8.224l2.647 2.646-.708.708-3-3V7.87l3-3 .708.708zm7-.708L11 5.578l2.647 2.646L11 10.87l.708.708 3-3V7.87l-3-3zM4.908 13l.894.448 5-10L9.908 3l-5 10z'></path>
            </svg>
          </NavLink>
          <NavLink
            to='/contact'
            className='w-[3rem] md:w-[4rem]  h-[3rem] md:h-[4rem] grid place-items-center  hover:bg-primary fill-current text-[#968F8F]'
            activeClassName='border-l-2 border-active side-active side-active'
          >
            <svg
              width='32'
              height='32'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M1 3.5l.5-.5h13l.5.5v9l-.5.5h-13l-.5-.5v-9zm1 1.035V12h12V4.536L8.31 8.9H7.7L2 4.535zM13.03 4H2.97L8 7.869 13.03 4z'></path>
            </svg>
          </NavLink>
        </div>
        <div className='flex flex-col'>
          <NavLink
            to='/contact'
            className='w-[3rem] md:w-[4rem]  h-[3rem] md:h-[4rem] grid place-items-center  hover:bg-primary fill-current text-[#968F8F]'
          >
            <svg
              width='32'
              height='32'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09.016.016.032.016.032.032.144.112.288.224.448.336.08.048.144.111.224.175A7.98 7.98 0 008.016 16a7.98 7.98 0 004.48-1.375c.08-.048.144-.111.224-.16.144-.111.304-.223.448-.335.016-.016.032-.016.032-.032 1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279.016-.128.048-.255.08-.383a4.17 4.17 0 01.416-.991c.176-.304.384-.576.64-.816.24-.24.528-.463.816-.639.304-.176.624-.304.976-.4A4.15 4.15 0 018 10.342a4.185 4.185 0 012.928 1.166c.368.368.656.8.864 1.295.112.288.192.592.24.911A7.03 7.03 0 018 14.993zm-2.448-7.4a2.49 2.49 0 01-.208-1.024c0-.351.064-.703.208-1.023.144-.32.336-.607.576-.847.24-.24.528-.431.848-.575.32-.144.672-.208 1.024-.208.368 0 .704.064 1.024.208.32.144.608.336.848.575.24.24.432.528.576.847.144.32.208.672.208 1.023 0 .368-.064.704-.208 1.023a2.84 2.84 0 01-.576.848 2.84 2.84 0 01-.848.575 2.715 2.715 0 01-2.064 0 2.84 2.84 0 01-.848-.575 2.526 2.526 0 01-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 00-.688-1.406 4.883 4.883 0 00-1.088-1.135 5.207 5.207 0 00-1.04-.608 2.82 2.82 0 00.464-.383 4.2 4.2 0 00.624-.784 3.624 3.624 0 00.528-1.934 3.71 3.71 0 00-.288-1.47 3.799 3.799 0 00-.816-1.199 3.845 3.845 0 00-1.2-.8 3.72 3.72 0 00-1.472-.287 3.72 3.72 0 00-1.472.288 3.631 3.631 0 00-1.2.815 3.84 3.84 0 00-.8 1.199 3.71 3.71 0 00-.288 1.47c0 .352.048.688.144 1.007.096.336.224.64.4.927.16.288.384.544.624.784.144.144.304.271.48.383a5.12 5.12 0 00-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 00-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 01-2.032 4.907z'></path>
            </svg>
          </NavLink>
          <NavLink
            to='/contact'
            className='w-[3rem] md:w-[4rem]  h-[3rem] md:h-[4rem] grid place-items-center  hover:bg-primary fill-current text-[#968F8F]'
          >
            <svg
              width='32'
              height='32'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M19.85 8.75l4.15.83v4.84l-4.15.83 2.35 3.52-3.43 3.43-3.52-2.35-.83 4.15H9.58l-.83-4.15-3.52 2.35-3.43-3.43 2.35-3.52L0 14.42V9.58l4.15-.83L1.8 5.23 5.23 1.8l3.52 2.35L9.58 0h4.84l.83 4.15 3.52-2.35 3.43 3.43-2.35 3.52zm-1.57 5.07l4-.81v-2l-4-.81-.54-1.3 2.29-3.43-1.43-1.43-3.43 2.29-1.3-.54-.81-4h-2l-.81 4-1.3.54-3.43-2.29-1.43 1.43L6.38 8.9l-.54 1.3-4 .81v2l4 .81.54 1.3-2.29 3.43 1.43 1.43 3.43-2.29 1.3.54.81 4h2l.81-4 1.3-.54 3.43 2.29 1.43-1.43-2.29-3.43.54-1.3zm-8.186-4.672A3.43 3.43 0 0112 8.57 3.44 3.44 0 0115.43 12a3.43 3.43 0 11-5.336-2.852zm.956 4.274c.281.188.612.288.95.288A1.7 1.7 0 0013.71 12a1.71 1.71 0 10-2.66 1.422z'></path>
            </svg>
          </NavLink>
        </div>
      </div>
      <div
        id='second-bar'
        className='h-full w-[16rem] bg-primary hidden md:flex flex-col items-start border-r-[1px] border-border p-[0.5rem] select-none '
      >
        <div className='explorer__header'>EXPLORER</div>
        <label onClick={() => setIsOpen(!isOpen)} className='explorer__folder'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className={`${isOpen ? 'rotate-90deg' : ''}`}
          >
            <path d='M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z'></path>
          </svg>
          <p>Portfolio</p>
        </label>
        <div className={`explorer__files ${isOpen ? '' : 'hide-files'}`}>
          {barItems.map((item) => {
            return (
              <NavLink
                onClick={() => addItem(item)}
                key={item.id}
                to={item.to}
                exact={item.exact}
                className='file'
                activeClassName='active-file'
              >
                <img src={item.ico} alt={item.text} />
                <p>{item.text}</p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
