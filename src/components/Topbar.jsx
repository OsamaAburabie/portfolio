import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MainContext } from '../context/mainContext';
import CloseIcon from '@material-ui/icons/Close';
import './Topbar.css';

const Topbar = () => {
  const { topBarItems, setTopBarItems } = useContext(MainContext);
  //close the top bar
  const closeTab = (id) => {
    setTopBarItems(topBarItems.filter((item) => item.id !== id));
  };
  return (
    <div className='h-[2rem] w-full bg-primary flex justify-start overflow-x-auto topbar'>
      {/* <div className='w-full bg-blue-600 '> */}
      {topBarItems &&
        topBarItems.map((item) => {
          return (
            <NavLink
              key={item.id}
              to={item.to}
              exact={item.exact}
              className='top-file bg-primary px-4 md:px-2'
              activeClassName='bg-secondary border-active border-b-2 '
            >
              <img src={item.ico} alt={item.text} />
              <p>{item.text}</p>
              <CloseIcon
                onClick={() => {
                  closeTab(item.id);
                }}
                className='top-file-close'
              />
            </NavLink>
          );
        })}
    </div>
  );
};

export default Topbar;
