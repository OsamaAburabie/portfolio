import Main from '@/components/Main';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Typist from 'react-typist';
import './Home.css';
const Home = () => {
  return (
    <Main>
      <div className='bg-secondary h-full w-full p-4 overflow-auto'>
        <Typist
          avgTypingDelay={25}
          cursor={{ show: false, hideWhenDone: true }}
        >
          <ol className='text-[0.8rem] md:text-[1.2rem]'>
            <li></li>
            <li>&lt;body&gt;</li>
            <li>
              &nbsp;&nbsp;&lt;span&gt; <span>Hello There!</span> &lt;/span&gt;
            </li>
            <li>
              &nbsp;&nbsp;&lt;h1&gt;
              <span style={{ fontWeight: 'bold' }}>
                {' '}
                I'm Osama Aburabi'e
              </span>{' '}
              &lt;/h1&gt;
            </li>
            <li>
              &nbsp;&nbsp;&lt;p&gt;{' '}
              <span>
                I am a Full-Stack Developer. I strive to create simple,
              </span>
            </li>
            <li>
              <span> &nbsp;&nbsp;original and impactful User Experiences.</span>
            </li>
            <li>&nbsp;&nbsp;&lt;/p&gt;</li>
            <li>&lt;/body&gt;</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            {/* eslint-disable-next-line */}
            <li style={{ color: 'grey' }}>/* </li>
            <li style={{ color: 'grey' }}>
              wanna know more about me?! feel free to explore my editor :){' '}
            </li>
            <li></li>
            <li style={{ color: 'grey' }}>
              ps feel free to contact me if you need anything!
            </li>
            <li style={{ color: 'grey' }}>*/ </li>
          </ol>
          <NavLink to='/contact' className='contactButton'>
            Contact Me!
          </NavLink>
        </Typist>
      </div>
    </Main>
  );
};

export default Home;
