import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Main = ({ children }) => {
  return (
    <main className='flex-1 flex'>
      <Sidebar />
      <section className='w-[calc(100%-3rem)] md:w-[calc(100%-20rem)] bg-red-[7rem]0 flex flex-col justify-between'>
        <Topbar />
        <div className='bg-secondary h-full w-full'>{children}</div>
      </section>
    </main>
  );
};

export default Main;
