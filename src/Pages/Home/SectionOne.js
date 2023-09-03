import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import wimg from "../../image/Aesop_Article_Summer_Skin_Care.jpg"
import img1 from "../../image/img1.png"
import img2 from "../../image/img2.png"
import img3 from "../../image/img4.png"
import pro4 from "../../image/product4.png"
import img7 from "../../image/Aesop_Home.jpg"
const SectionOne = () => {
    return (
        <div className='lg:mt-36 md:mt-14 lg:ml-14 mg:ml-2 lg:flex '>
             <div className=''>
                <p className='  ml-5 mb-3' style={{ fontFamily: "sans-serif,Suisse", lineHeight: "1.25rem", fontWeight: "1.3", fontWeight: "600", fontSize: ".875rem", color: "#333" }}>For the body</p>
                <p className='md:ml-6 text-2xl mt-6' style={{ fontFamily: "serif" ,fontSize:'1.875rem'}}>An expression of care</p>
                <p className='mt-6 md:ml-4'>Aesop formulations offer the body deserving care,<br></br> to cleanse, replenish, and nourish skin.<br></br> Each product is a sensory pleasure to <br></br> use with its own delightful aroma.</p>
                <button className='md:ml-6 flex gap-3 mt-6 mb-9'>See all care <FaArrowRight className='mt-1 gap-4'></FaArrowRight></button>
          
</div>
<div className='lg:mt-60 md:mt-14 p-5 gap-16 grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 justify-items-end'>
    <div className='text-center '>
        <img className='lg:h-52 lg:w-80 shadow-2xl	' src={img1}></img>
    <p className='transition link link-hover duration-0 hover:duration-150" text-sm mt-5 font-serif text-center font-bold'>Nurture Bar Soap</p>
    <p className='mt-2 link link-hover'>Offers a mid yet effective cleans</p>
    </div>
    <div className='text-center '>
        <img className='shadow-2xl	lg:h-52 lg:w-80' src={img2}></img>
    <p className='text-sm mt-5 link link-hover font-serif text-center font-bold'>Nurture Bar Soap</p>
    <p className='mt-2 link link-hover'>Offers a mid yet effective cleans</p>
    </div>
    <div className='text-center '>
        <img className='shadow-2xl	 lg:h-52 lg:w-80' src={img3}></img>
    <p className='mt-5 link link-hover text-sm font-serif text-center font-bold'>Nurture Bar Soap</p>
    <p className='mt-2 link link-hover'>Offers a mid yet effective cleans</p>
    </div>
    
</div>
           
        </div>
    );
};

export default SectionOne;