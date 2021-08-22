import React from 'react';
// import './Footer.css';
const Footer = () => {
  return (
    <footer className='bg-primary w-full h-[1.7rem] border-t-[1px] border-border flex justify-between items-center text-white px-[0.7rem] select-none'>
      <div className='flex justify-center'>
        <div className='flex items-center text-[0.8rem]'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
          >
            <path d='M7.389 12.99l-1.27-1.27.67-.7 2.13 2.13v.7l-2.13 2.13-.71-.71L7.349 14h-1.85a2.49 2.49 0 01-2.5-2.5V5.95a2.59 2.59 0 01-1.27-.68 2.52 2.52 0 01-.54-2.73A2.5 2.5 0 013.499 1a2.45 2.45 0 011 .19 2.48 2.48 0 011.35 1.35c.133.317.197.658.19 1a2.5 2.5 0 01-2 2.45v5.5a1.5 1.5 0 001.5 1.5h1.85zm-4.68-8.25a1.5 1.5 0 002.08-2.08 1.55 1.55 0 00-.68-.56 1.49 1.49 0 00-.86-.08 1.49 1.49 0 00-1.18 1.18 1.49 1.49 0 00.08.86c.117.277.311.513.56.68zm10.33 6.3c.48.098.922.335 1.27.68a2.51 2.51 0 01.31 3.159 2.5 2.5 0 11-3.47-3.468c.269-.182.571-.308.89-.37V5.49a1.5 1.5 0 00-1.5-1.5h-1.85l1.27 1.27-.71.71-2.13-2.13v-.7l2.13-2.13.71.71-1.27 1.27h1.85a2.49 2.49 0 012.5 2.5v5.55zm-.351 3.943a1.5 1.5 0 001.1-2.322 1.55 1.55 0 00-.68-.56 1.49 1.49 0 00-.859-.08 1.49 1.49 0 00-1.18 1.18 1.49 1.49 0 00.08.86 1.5 1.5 0 001.539.922z'></path>
          </svg>
          <p className='ml-[0.2rem]'>main</p>
        </div>
        <div className='flex ml-[1rem] items-center text-[0.8rem]'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
          >
            <path d='M8.6 1c1.6.1 3.1.9 4.2 2 1.3 1.4 2 3.1 2 5.1 0 1.6-.6 3.1-1.6 4.4-1 1.2-2.4 2.1-4 2.4-1.6.3-3.2.1-4.6-.7-1.4-.8-2.5-2-3.1-3.5C.9 9.2.8 7.5 1.3 6c.5-1.6 1.4-2.9 2.8-3.8C5.4 1.3 7 .9 8.6 1zm.5 12.9c1.3-.3 2.5-1 3.4-2.1.8-1.1 1.3-2.4 1.2-3.8 0-1.6-.6-3.2-1.7-4.3-1-1-2.2-1.6-3.6-1.7-1.3-.1-2.7.2-3.8 1-1.1.8-1.9 1.9-2.3 3.3-.4 1.3-.4 2.7.2 4 .6 1.3 1.5 2.3 2.7 3 1.2.7 2.6.9 3.9.6zM7.9 7.5L10.3 5l.7.7-2.4 2.5 2.4 2.5-.7.7-2.4-2.5-2.4 2.5-.7-.7 2.4-2.5-2.4-2.5.7-.7 2.4 2.5z'></path>
          </svg>
          <p className='mx-[0.2rem]'>0</p>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
          >
            <path d='M7.56 1h.88l6.54 12.26-.44.74H1.44L1 13.26 7.56 1zM8 2.28L2.28 13H13.7L8 2.28zM8.625 12v-1h-1.25v1h1.25zm-1.25-2V6h1.25v4h-1.25z'></path>
          </svg>
          <p className='mx-[0.2rem]'>0</p>
        </div>
      </div>
      <div className='flex h-full items-center'>
        <div className='h-full md:flex items-center ml-[0.5rem] text-[0.8rem] cursor-pointer hidden'>
          <p className='ml-[0.2rem]'>JavaScript React</p>
        </div>
        <div className='h-full flex items-center ml-[0.5rem] text-[0.8rem] cursor-pointer'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
          >
            <path d='M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z'></path>
          </svg>
          <p className='ml-[0.2rem]'>Prettier</p>
        </div>
        <div className='h-full flex items-center ml-[0.5rem] text-[0.8rem] cursor-pointer'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
          >
            <path d='M13.377 10.573a7.63 7.63 0 01-.383-2.38V6.195a5.115 5.115 0 00-1.268-3.446 5.138 5.138 0 00-3.242-1.722c-.694-.072-1.4 0-2.07.227-.67.215-1.28.574-1.794 1.053a4.923 4.923 0 00-1.208 1.675 5.067 5.067 0 00-.431 2.022v2.2a7.61 7.61 0 01-.383 2.37L2 12.343l.479.658h3.505c0 .526.215 1.04.586 1.412.37.37.885.586 1.412.586.526 0 1.04-.215 1.411-.586s.587-.886.587-1.412h3.505l.478-.658-.586-1.77zm-4.69 3.147a.997.997 0 01-.705.299.997.997 0 01-.706-.3.997.997 0 01-.3-.705h1.999a.939.939 0 01-.287.706zm-5.515-1.71l.371-1.114a8.633 8.633 0 00.443-2.691V6.004c0-.563.12-1.113.347-1.616.227-.514.55-.969.969-1.34.419-.382.91-.67 1.436-.837.538-.18 1.1-.24 1.65-.18a4.147 4.147 0 012.597 1.4 4.133 4.133 0 011.004 2.776v2.01c0 .909.144 1.818.443 2.691l.371 1.113h-9.63v-.012z'></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
