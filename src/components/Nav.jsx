import React from 'react';
import Logo from '../images/Logo.png';
import CloseIcon from '@material-ui/icons/Close';
import CropDinIcon from '@material-ui/icons/CropDin';
import MinimizeIcon from '@material-ui/icons/Minimize';
import './Header.css';
const Nav = () => {
  return (
    <nav className='bg-primary w-full h-[2rem] flex items-center pl-[0.7rem] pr-[0.2rem] text-white border-b-[1px] border-border select-none'>
      <div className='md:flex flex-grow-0 hidden '>
        <img src={Logo} alt='vscode-logo' className='Logo' />
        <p className='mr-2 hover:bg-secondary hover:cursor-pointer'>File</p>
        <p className='mr-2 hover:bg-secondary hover:cursor-pointer'>Edit</p>
        <p className='mr-2 hover:bg-secondary hover:cursor-pointer'>
          Selection
        </p>
        <p className='mr-2 hover:bg-secondary hover:cursor-pointer'>View</p>
        <p className='mr-2 hover:bg-secondary hover:cursor-pointer'>Go</p>
        <p className='mr-2 hover:bg-secondary hover:cursor-pointer'>Run</p>
        <p className='mr-2 hover:bg-secondary hover:cursor-pointer'>Termenal</p>
        <p className='mr-2 hover:bg-secondary hover:cursor-pointer'>Help</p>
      </div>
      <div className='flex-grow text-left md:text-center'>
        <p>Osama Aburabie - Visual Studio Code</p>
      </div>
      <div className='flex flex-row-reverse flex-grow-0'>
        <div className='red header__button'>
          <CloseIcon className='header__icons' />
        </div>
        <div className=' header__button'>
          <CropDinIcon className='header__icons' />
        </div>
        <div className='header__button'>
          <MinimizeIcon className='header__icons' />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
