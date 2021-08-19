import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Home from './pages/Home';
import MainContextProvider from './context/mainContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

const App = () => {
  return (
    <MainContextProvider>
      <div className='h-screen w-screen flex-col flex justify-between '>
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects' component={Projects} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </MainContextProvider>
  );
};

export default App;
