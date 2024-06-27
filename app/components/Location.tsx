import React from 'react';

const Location = () => {
  return (
    <div className=''>
      <div className='overflow-hidden'>
        <iframe
          className='m-auto rounded-sm'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.646585855574!2d38.76496507391466!3d9.004630091055732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8552266959af%3A0xe23be0196f0996a6!2sNib%20Insurance%20S.Co.%20Head%20Office!5e0!3m2!1sen!2set!4v1718629462143!5m2!1sen!2set" 
          width="85%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>

        
      </div>
    </div>
  );
};

export default Location;
