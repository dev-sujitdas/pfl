import React from 'react'

const ContactUs = () => {
  return (
    <section id="contact" className="w-full  bg-[#EEF4EA]">
      <div className="w-full h-screen max-w-[150rem] mx-auto p-[7rem] bg-[#2D2D2C] rounded-t-[5rem]">
         <div className="contact-top flex justify-between items-center">
          <div className="h-[3.75rem] overflow-hidden">
            <h2 className="text-6xl poppins-semibold text-[#fdfdfd]">
              Contact Us
            </h2>
          </div>
          <div className="flex w-[20rem] gap-6 items-center justify-between">
            <div className="w-28">
              <div className="line w-28 h-1 bg-[#d4d4d8]"></div>
            </div>
            <div className="h-[5.3rem] w-[10rem] overflow-hidden">
              <h3 className="text-xl poppins-medium w-[10rem] text-zinc-300">
                Plan Your Financial Future with PFL
              </h3>
            </div>
          </div>
        </div>
        <div className="contact-subtitle">
        <h3 className="subtitle mt-6 text-2xl poppins-regular-italic w-[30%] text-zinc-400">
         Get in Touch for Trusted Financial Guidance.
        </h3>
        </div>
      </div>
    </section>
  )
}

export default ContactUs