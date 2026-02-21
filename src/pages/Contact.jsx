
import React, { useState } from 'react';
import ContactUsForm from '../components/contactUs/ContactUsForm';
import ContactDetails from '../components/contactUs/ContactDetails';

const GoogleMap = () => {
  const [loading, setLoading] = useState(true);

  // Event handler to track when the iframe content is loaded
  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="w-full relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-richblack-500 bg-opacity-50 border border-richblack-600 rounded-xl">
          {/* You can replace this with any loading indicator */}
          <div className='spinner'></div>
        </div>
      )}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.516127193714!2d75.94014997508548!3d22.820386679315984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631cf455b4cec3%3A0x426141aa8141f7a5!2sAcropolis%20Institute%20Of%20Technology%20And%20Research%20-%20AITR!5e0!3m2!1sen!2sin!4v1710435851353!5m2!1sen!2sin"
        width="100%"
        height="400"
        title="club-address"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-2xl"
        onLoad={handleLoad} // Track when the iframe content is loaded
      ></iframe>
    </div>
  );
};

export const Contact = () => {
  return (
    < >

      <div className="mx-auto my-12  flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row" >
              
              <div className='flex flex-col justify-center items-baseline space-y-10 lg:max-w-[40%]'>
                <div className='w-full'>
                  <ContactDetails/>
                </div>
                <div className="w-full px-4 md:px-0 md:ml-10">
                  <GoogleMap />
                </div>
              </div>           

              <div >
                <div className="border border-richblack-600 text-richblack-300 rounded-xl p-7 lg:p-14 flex gap-3 flex-col ">
                    <h1 className="text-4xl leading-10 font-semibold text-richblack-5">
                      Get in Touch – We Love Hearing from You
                    </h1>
                    <p className="">
                      If you haven't found the information you're looking for, please complete the form below.
                    </p>
                    <div className='mt-7'>
                        <ContactUsForm/>
                    </div>
                </div>  
              </div>
        
      </div>

      
    </>
  );
};


