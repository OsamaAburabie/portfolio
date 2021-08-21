import Main from '@/components/Main';
import './Contact.css';
import React, { useState } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddIcon from '@material-ui/icons/Add';
import Crop32Icon from '@material-ui/icons/Crop32';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [focusedName, setFocusedName] = useState(true);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedMessage, setFocusedMessage] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <Main>
      <div className='bg-secondary h-full w-full  overflow-hidden '>
        <div className='contactPage overflow-x-auto p-4 '>
          <ol className='contact__list text-[0.8rem] md:text-[1.2rem]'>
            {/* eslint-disable-next-line */}
            <li style={{ color: 'grey' }}>/* Here is how to reach me */</li>
            <li></li>
            <li>
              .socials <span style={{ color: 'gold' }}>&nbsp;&nbsp;{'{'}</span>
            </li>
            <li></li>
            <li className='socialItem'>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <EmailIcon />
              <span>
                &nbsp;
                {/* eslint-disable-next-line */}
                <a href='' target='_blank'>
                  aburabie.osama@gmail.com
                </a>
              </span>
            </li>
            <li className='socialItem'>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <GitHubIcon />
              <span>
                &nbsp;
                {/* eslint-disable-next-line */}
                <a
                  href='https://github.com/OsamaAburabie'
                  rel='noreferrer'
                  target='_blank'
                >
                  OsamaAburabie
                </a>
              </span>
            </li>
            <li className='socialItem'>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <LinkedInIcon />
              <span>
                &nbsp;
                {/* eslint-disable-next-line */}
                <a
                  href='https://www.linkedin.com/in/osama-aburabi/'
                  rel='noreferrer'
                  target='_blank'
                >
                  Osama Aburabi'e
                </a>
              </span>
            </li>
            <li className='socialItem'>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <FacebookIcon />
              <span>
                &nbsp;
                {/* eslint-disable-next-line */}
                <a
                  href='https://www.facebook.com/osamajamell/'
                  rel='noreferrer'
                  target='_blank'
                >
                  Osama Jamil
                </a>
              </span>
            </li>
            <li className='socialItem'>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <TwitterIcon />
              <span>
                &nbsp;
                <a
                  href='https://twitter.com/Osama_Aburabie'
                  rel='noreferrer'
                  target='_blank'
                >
                  Osama_Aburabie
                </a>
              </span>
            </li>
            <li></li>
            <li>
              <span style={{ color: 'gold' }}>{'}'}</span>
            </li>
            <li></li>
            <li></li>
            <li></li>
            {/* eslint-disable-next-line */}
            <li style={{ color: 'grey' }}>
              /* You can also send me a direct message from bellow and I'll get
              back to you */
            </li>
          </ol>
        </div>
        {/* =================================================================================== */}
        <div className='terminal  text-white'>
          <div className='terminal__header'>
            <div className='terminal__header__left '>
              <div className='text-[0.6rem] md:text-[0.81rem]'>problems</div>
              <div className='text-[0.6rem] md:text-[0.81rem]'>output</div>
              <div className='text-[0.6rem] md:text-[0.81rem]'>terminal</div>
              <div className='text-[0.6rem] md:text-[0.81rem]'>
                debug console
              </div>
            </div>
            <div className='flex items-end'>
              <div className='h-full  items-center cursor-pointer ml-[0.3rem] hidden md:flex'>
                <ChevronRightIcon />
                <p>node</p>
              </div>
              <div className='h-full  items-center cursor-pointer ml-[0.3rem] hidden md:flex'>
                <AddIcon />
              </div>
              <div className='h-full  items-center cursor-pointer ml-[0.3rem] hidden md:flex'>
                <Crop32Icon />
              </div>
              <div className='h-full  items-center cursor-pointer ml-[0.3rem] hidden md:flex'>
                <DeleteIcon />
              </div>
              <div className='h-full  items-center cursor-pointer ml-[0.3rem] hidden md:flex'>
                <KeyboardArrowUpIcon />
              </div>
              <div className='h-full flex items-center cursor-pointer ml-[0.3rem] '>
                <CloseIcon />
              </div>
            </div>
          </div>
          <div className='terminal__body'>
            <form onSubmit={submitForm}>
              <label className='terminal__text__label'>
                <span>OsamaAburabie@Contact</span>:
                <span style={{ color: 'lightblue' }}>~</span>$ What is your
                name?
              </label>
              <div className='terminal__text'>
                <span id='terminal-show'>{name}</span>
                <div
                  id='terminal-cursor'
                  className={`animate-flicker ${focusedName ? '' : 'hidden'}`}
                ></div>
                <input
                  type='text'
                  id='terminal-input'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocusedName(true)}
                  onBlur={() => setFocusedName(false)}
                />
              </div>
              {/* ===================================================== */}
              <label className='terminal__text__label'>
                <span>OsamaAburabie@Contact</span>:
                <span style={{ color: 'lightblue' }}>~</span>$ What is your
                email?
              </label>
              <div className='terminal__text'>
                <span id='terminal-show'>{email}</span>
                <div
                  id='terminal-cursor'
                  className={`animate-flicker ${focusedEmail ? '' : 'hidden'}`}
                ></div>
                <input
                  type='text'
                  id='terminal-input'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedEmail(true)}
                  onBlur={() => setFocusedEmail(false)}
                />
              </div>
              {/* ===================================================== */}
              <label className='terminal__text__label'>
                <span>OsamaAburabie@Contact</span>:
                <span style={{ color: 'lightblue' }}>~</span>$ Write your
                message!
              </label>
              <div className='terminal__text'>
                <span id='terminal-show'>{message}</span>
                <div
                  id='terminal-cursor'
                  className={`animate-flicker ${
                    focusedMessage ? '' : 'hidden'
                  }`}
                ></div>
                <input
                  type='text'
                  id='terminal-input'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocusedMessage(true)}
                  onBlur={() => setFocusedMessage(false)}
                />
              </div>

              <button type='submit' className='sentButton'>
                <span>Send</span> <SendIcon fontSize='small' />
              </button>
            </form>
          </div>
        </div>
        {/* =================================================================================== */}
      </div>
    </Main>
  );
};

export default Contact;
