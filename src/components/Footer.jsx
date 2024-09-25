import React from 'react';
import textLogo from '../assets/footer telefun.png';

const Footer = () => {
  return (
    <section className="footer bg-[#4290cc] p-12" >
      <div className='max-w-7xl m-auto'>
        <img src={textLogo} className='mb-4' />
        <p>
          <span className="uppercase chadfun">
            @ TeleFun, 2024
          </span>
        </p>
      </div>
    </section>
  );
};

export default Footer;