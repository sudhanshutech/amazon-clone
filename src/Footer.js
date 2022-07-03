import React from 'react';
import "./Footer.css";

function footer() {
  return (
    <>
    <div className='main_footer'>
        <div className='footer_sectionOne'>
            <p className='footer_heading1'>Get to know Us</p>
            <p className='footer_heading2'>About Us</p>
            <p className='footer_heading2'>Carrers</p>
            <p className='footer_heading2'>Press Releases</p>
            <p className='footer_heading2'>shopIt Cares</p>
            <p className='footer_heading2'>Gift a Smile</p>

        </div>

        <div className='footer_sectionTwo'>
        <p className='footer_heading1'>Connect with Us</p>
            <p className='footer_heading2'>Facebook</p>
            <p className='footer_heading2'>Twitter</p>
            <p className='footer_heading2'>Instagram</p>
            
        </div>

        <div className='footer_sectionThree'>
        <p className='footer_heading1'>Make Money with Us</p>
            <p className='footer_heading2'>Sell on shopIt</p>
            <p className='footer_heading2'>Sell under shopIt Accelerator</p>
            <p className='footer_heading2'>Become an Affiliate</p>
            <p className='footer_heading2'>Advertise Your Products</p>
            
        </div>

        <div className='footer_sectionFour'>
        <p className='footer_heading1'>Let Us Help You</p>
            <p className='footer_heading2'>Your Account</p>
            <p className='footer_heading2'>Returns Centre</p>
            <p className='footer_heading2'>100% Purchase Protection</p>
            <p className='footer_heading2'>shopIt App Download</p>
            <p className='footer_heading2'>Help</p>
            
        </div>

    </div>
    <div className='bottom_footer'>
      <div className='bottom_footer_sectionOne'>
        <p className='bottom_footer_heading'>Conditions of Use & sale</p>

      </div>
      <div className='bottom_footer_sectionTwo'>
        <p className='bottom_footer_heading'>Privacy Policy</p>
      </div>
      <div className='bottom_footer_sectionThree'>
        <p className='bottom_footer_heading'>Interest-Based ads</p>
      </div>
      <div className='bottom_footer_sectionFour'>
        <p className='bottom_footer_heading'>© 19696-2022, shopIt.com, Inc. or its affiliates</p>
      </div>

    </div>
    </>
  )
}

export default footer