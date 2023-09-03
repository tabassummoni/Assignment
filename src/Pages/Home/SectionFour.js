import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import wimg from "../../image/Aesop_Article_Summer_Skin_Care.jpg"
import pro1 from "../../image/product1.png"
import pro2 from "../../image/product2.png"
import pro3 from "../../image/product3.png"
import pro4 from "../../image/product4.png"
import img7 from "../../image/Aesop_Home.jpg"

const SectionFour = () => {
    return (
        <div>
             <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 '>
             
                <img src={img7} style={{ height: "550px" ,}}></img>
                <div className='lg:ml-20 p-3'>
                    <h2 className='' style={{fontFamily:"serif" , fontSize:"1.625rem" }}>Post-Poo Drops has returned</h2>
                    <p className='mt-7'>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours.</p>
                    <button className=' w-72 h-16 mt-8 text-center py-5 px-2 flex justify-between   hover:bg-white    focus:text-black   top-80 left-72 border border-slate-900' style={{ fontFamily: "sans-serif,Suisse ", fontSize: "1rem", lineHeight: "1.7", }}>Discover Post-Poo Drops <FaArrowRight className='text-black mt-2'></FaArrowRight></button>
                </div>
               
            </div>    
        </div>
    );
};

export default SectionFour;