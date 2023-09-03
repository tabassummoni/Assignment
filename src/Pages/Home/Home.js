import React from 'react';
import Header from '../Header/Header';
import img from '../../image/Aesop_Bar_Soaps_2023_Web_Homepage_2_Primary_Full_Bleed_Desktop_2880x1044px (1).avif'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa'

import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
const Home = () => {
    return (
        <div>
        <div className='relative bg-gradient-to-r from-slate-500 to-black  '>
            <img className='w-full object-cover h-[600px]' src={img}></img>
            <h3 class="Lg:absolute md:absolute p-2 lg:text-4xl md:text-2xl  lg:top-32 md:top-16 md:ml-5 lg:left-10" style={{color:"#fffef2"}}>𝑨𝒆𝒔𝒐𝒑 <span className=' mt-24 text-slate-50' style={{fontSize:"0.45rem",}}>Ⓡ</span></h3>
            <h3 class="lg:absolute md:absolute p-2 text-sm font-bold lg:top-36 md:top-16 md:ml-28 lg:left-72" style={{fontFamily:"sans-serif,Suisse",color:"#fffef2",lineHeight:"1.25rem"}}>Bar Soaps</h3>
            <h3 class="lg:absolute  md:absolute p-2 lg:top-44 md:top-24  lg:left-72 md:ml-28" style={{fontFamily:"sans-serif,Suisse" ,color:"#fffef2", fontSize : "1.875rem"}}>A body care classic, reimagined </h3>
            <p class="lg:absolute  md:absolute p-2 lg:top-56 md:top-44 lg:left-72 md:ml-28 " style={{fontFamily:"sans-serif,Suisse ",color:"#fffef2",fontSize :"1rem" ,lineHeight:"1.7"}}>Breathing new life into the humble bar soap are Nurture,<br></br> Polish and Refresh—three additions to the range,<br></br> each imparting a unique constellation of benefits. </p>
            
          <button  className='absolute w-72  mecho "# Assignment" >> README.md-2 h-16 lg:mt-8 text-center py-5 px-2 flex justify-between   hover:bg-white    focus:text-black   lg:top-80 md:invisible lg:visible lg:left-96 border border-slate-100' style={{fontFamily:"sans-serif,Suisse ",color:"#fffef2",fontSize :"1rem" ,lineHeight:"1.7" ,}}>Discover Bar Soaps 
          <FaArrowRight  className='text-white mt-2'></FaArrowRight></button>
         
       
        </div>
<SectionOne></SectionOne>
<SectionTwo></SectionTwo>
<SectionThree></SectionThree>
<SectionFour></SectionFour>
<SectionFive></SectionFive>

       
        </div>
       
    );
};

export default Home;