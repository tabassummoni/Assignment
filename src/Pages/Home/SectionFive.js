import React from 'react';
import img5 from '../../image/img5.png'
import img6 from '../../image/img6.png'
import { FaArrowRight } from 'react-icons/fa';

const SectionFive = () => {
    return (
        <div>
            <div className='lg:flex h-[600px] mt-20'>
                <div className=" lg:w-96 lg:h-96 ml-5 mt-20">
                    <h4 className=' ' style={{ fontFamily: "sans-serif,Suisse", lineHeight: "1.25rem", fontWeight: "1.3", fontWeight: "600", fontSize: ".875rem", color: "#333" }}>For the home</h4>
                    <h2 className='lg:text-2xl md:text-lg mt-10 ' style={{ fontFamily: "serif", fontSize: '1.875rem' }}>Domestic pleasures</h2>
                    <p className='mt-5'>Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>
                    <button className='flex gap-16 mt-10'>See all home <FaArrowRight className='mt-1'></FaArrowRight></button>
                </div>
                <div className="carousel carousel-center  lg:ml-16  max-w-full items-center text-center p-4 space-x-4 bg-neutral rounded-box" style={{
                    overflow:'scroll',
                    overflowX:'scroll'
                }}>
                    <div className="carousel-item">

                    </div>
                    <div className="carousel-item">
                        <div className='lg:h-96 w-[350px]'>
                            <img src={img5} className='h-[400px] w-72' alt="Burger" />

                            <h2 className='text-sm' style={{ fontFamily: "sans-serif" }}>Lucent Facial Concentrate</h2>
                            <p className='text-sm' style={{ fontFamily: "sans-serif" }}>A Vitamin C-rich layering se</p>
                        </div>    </div>
                    <div className="carousel-item">
                        <div className='lg:h-96 w-[350px]'>
                            <img src={img6} className='h-[400px] w-72' alt="Burger" />

                            <h2 className='text-sm' style={{ fontFamily: "sans-serif" }}>Lucent Facial Concentrate</h2>
                            <p className='text-sm' style={{ fontFamily: "sans-serif" }}>A Vitamin C-rich layering se</p>
                        </div>  </div>

                    <div className="carousel-item">
                        <div className='lg:h-96 w-[350px] '>
                            <img src={img6} className='h-[400px] w-[400px]' alt="Burger" />

                            <h2 className='text-sm' style={{ fontFamily: "sans-serif" }}>Lucent Facial Concentrate</h2>
                            <p className='text-sm' style={{ fontFamily: "sans-serif" }}>A Vitamin C-rich layering se</p>
                        </div> </div>


                </div>




            </div>
        </div>
    );
};

export default SectionFive;