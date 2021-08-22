import React, { createContext, useState } from 'react';
import ReactLogo from '../images/ReactLogo.svg';
import JsLogo from '../images/JavascriptLogo.svg';
import CssLogo from '../images/CssLogo.svg';
import HtmlLogo from '../images/HtmlLogo.svg';

export const MainContext = createContext();

const MainContextProvider = (props) => {
  const [showExplorer, setShowExplorer] = useState(true);
  const barItems = [
    { id: 1, to: '/', text: 'Home.html', ico: HtmlLogo, exact: true },
    { id: 2, to: '/about', text: 'About.js', ico: JsLogo, exact: false },
    { id: 3, to: '/contact', text: 'Contact.css', ico: CssLogo, exact: false },
    {
      id: 4,
      to: '/projects',
      text: 'Projects.jsx',
      ico: ReactLogo,
      exact: false,
    },
  ];

  const [topBarItems, setTopBarItems] = useState(barItems);

  //you can use funtion
  return (
    <MainContext.Provider
      value={{
        barItems,
        topBarItems,
        setTopBarItems,
        showExplorer,
        setShowExplorer,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
