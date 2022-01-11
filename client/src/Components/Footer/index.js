import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">

      <div className="container text-center mb-5">

        <h4>Brought to you by the Tech Team 5ive.</h4>

      </div>

      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h5 className='col-2'>Basu</h5>
        <h5 className='col-2'>Christian</h5>
        <h5 className='col-2'>Cooper</h5>
        <h5 className='col-2'>Greg</h5>
        <h5 className='col-2'>Kirk</h5>
      </div>

    </footer>
  );
};

export default Footer;