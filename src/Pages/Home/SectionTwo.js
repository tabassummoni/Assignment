import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import wimg from "../../image/Aesop_Article_Summer_Skin_Care.jpg"
import pro1 from "../../image/product1.png"
import pro2 from "../../image/product2.png"
import pro3 from "../../image/product3.png"
import pro4 from "../../image/product4.png"
import img7 from "../../image/Aesop_Home.jpg"
const SectionTwo = () => {
    return (
        <div>
            <div className='lg:flex md:flex md:gap-2 justify-between mt-28 md:ml-2 lg:ml-24 p-3'>
                <div>
                    <h3 className='  mb-3 w-40' style={{ fontFamily: "sans-serif,Suisse", lineHeight: "1.25rem", fontWeight: "1.3", fontWeight: "600", fontSize: ".875rem", color: "#333" }}>The Athenaeum</h3>
                    <h2 className='text-2xl mt-6 ' style={{ fontFamily: "serif", fontSize: '1.875rem' }}>The warm-up </h2>
                    <p className='mt-5' style={{ fontFamily: "sans-serif" }}>In The Athenaeum, our digital reading room: <br></br> a guide to ensuring a healthy complexion through the warmer months.</p>
                    <button className=' lg:w-72 md:w-44 h-16 mt-8 text-center py-5 px-2 flex justify-between   hover:bg-white    focus:text-black   top-80 left-72 border border-slate-900' style={{ fontFamily: "sans-serif,Suisse ", fontSize: "1rem", lineHeight: "1.7", }}>Read more <FaArrowRight className='text-black mt-2'></FaArrowRight></button>
                </div>
                <div>
                    <img className='md:h-96 md:w-96 md:p-4  lg:p-0 lg:h-5/6 lg:w-[1100px]'  src={wimg}></img>
                </div>

            </div>




        </div>
    );
};

export default SectionTwo;