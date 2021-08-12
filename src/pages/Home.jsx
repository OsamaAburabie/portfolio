import Main from '@/components/Main';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Typist from 'react-typist';
import './Home.css';
const Home = () => {
  return (
    <Main>
      <Typist avgTypingDelay={25} cursor={{ show: false, hideWhenDone: true }}>
        <ol>
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
              I am a Full-Stack Developer. I strive to create simple, original
              and impactful User Experiences.
            </span>{' '}
            &lt;/p&gt;
          </li>
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
    </Main>
  );
};

export default Home;
