import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import wimg from "../../image/Aesop_Article_Summer_Skin_Care.jpg"
import pro1 from "../../image/product1.png"
import pro2 from "../../image/product2.png"
import pro3 from "../../image/product3.png"
import pro4 from "../../image/product4.png"
import img7 from "../../image/Aesop_Home.jpg"
const SectionThree = () => {
    return (
        <div className='scroll-mb-2 '>

            <div className="carousel carousel-center   max-w-full p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                    <div className=" w-96 lg:ml-5 md:ml-4 p-5">
                        <h4 className='   mb-3' style={{ fontFamily: "sans-serif,Suisse", lineHeight: "1.25rem", fontWeight: "1.3", fontWeight: "600", fontSize: ".875rem", color: "#333" }}>For the Skin</h4>
                        <h2 className='text-2xl mt-6 ' style={{ fontFamily: "serif", fontSize: '1.875rem' }}>Attention for all types</h2>
                        <p >The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.</p>
                        <button className='flex gap-5'>See all Skin Care <FaArrowRight className='mt-1'></FaArrowRight></button>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='h-96 w-60'>
                        <img src={pro1} className='h-48' alt="Burger" />

                      <a></a>  <h2 className='text-sm link link-hover' style={{ fontFamily: "sans-serif" }}>Lucent Facial Concentrate</h2>
                        <p className='text-sm' style={{ fontFamily: "sans-serif" }}>A Vitamin C-rich layering se</p>
                    </div>    </div>
                <div className="carousel-item">
                    <div className='h-96 w-60'>
                        <img src={pro1} className='h-48' alt="Burger" />

                        <h2 className='text-sm link link-hover' style={{ fontFamily: "sans-serif" }}>Lucent Facial Concentrate</h2>
                        <p className='text-sm' style={{ fontFamily: "sans-serif" }}>A Vitamin C-rich layering se</p>
                    </div>  </div>
                <div className="carousel-item">
                    <div className='h-96 w-60'>
                        <img src={pro1} className='h-48' alt="Burger" />

                        <h2 className='text-sm link link-hover' style={{ fontFamily: "sans-serif" }}>Lucent Facial Concentrate</h2>
                        <p className='text-sm' style={{ fontFamily: "sans-serif" }}>A Vitamin C-rich layering se</p>
                    </div> </div>
                <div className="carousel-item">
                    <div className='h-96 w-60'>
                        <img src={pro1} className='h-48' alt="Burger" />

                        <h2 className='text-sm link link-hover' style={{ fontFamily: "sans-serif" }}>Lucent Facial Concentrate</h2>
                        <p className='text-sm' style={{ fontFamily: "sans-serif" }}>A Vitamin C-rich layering se</p>
                    </div> </div>
                <div className="carousel-item">
                    <div className='h-96 w-60'>
                        <img src={pro1} className='h-48' alt="Burger" />

                        <h2 className='text-sm link link-hover' style={{ fontFamily: "sans-serif" }}>Lucent Facial Concentrate</h2>
                        <p className='text-sm' style={{ fontFamily: "sans-serif" }}>A Vitamin C-rich layering se</p>
                    </div>  </div>
                <div className="carousel-item">
                    <div className='h-96 w-60'>
                        <img src={pro1} className='h-48' alt="Burger" />

                        <h2 className='text-sm link link-hover' style={{ fontFamily: "sans-serif" }}>Lucent Facial Concentrate</h2>
                        <p className='text-sm' style={{ fontFamily: "sans-serif" }}>A Vitamin C-rich layering se</p>
                    </div> </div>

            </div>




        </div>
    );
};

export default SectionThree;