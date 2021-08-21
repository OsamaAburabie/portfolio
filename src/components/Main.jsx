import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Main = ({ children }) => {
  return (
    <main className='flex-1 flex overflow-hidden'>
      <Sidebar />
      <section className='w-[calc(100%-3rem)] md:w-[calc(100%-20rem)] bg-secondary flex flex-col justify-between'>
        <Topbar />
        {children}
      </section>
    </main>
  );
};

export default Main;
