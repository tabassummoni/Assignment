import React, { useState } from 'react';
import { FiArrowUpRight  } from "react-icons/fi";
const Footer = () => {
const [checked, setChecked] = React.useState(false); 
function handleChange() {
   setChecked(!checked);
}

    return (
        <div>
            <footer className="footer  mt-14 md:mt-20 lg:mt-5 p-10 bg-slate-900 h-[500px] border-b-2 border-white    text-white">
                
                <div>
                    <header className="text-xl mb-4 border-b-2 lg:w-[500px] border-white   ">Subscribe to Aesop communications</header>
                    <input type="text" placeholder="Email Address" className="input lg:text-2xl rounded-none input-bordered bg-slate-900 border border-zinc-50 w-full max-w-xs " />
                   <br></br>

                    <header className="  border-b-2 border-white lg:w-[600px] lg:text-2xl lg:mt-20">Sustainability</header>
                    <a className=" lg:text-lg md:text-xs text-xs lg:w-[600px]">All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation.<span className='border-b-2 border-white'>Learn more</span> </a>
                </div>
                <div >
                    <header className="border-b-2 border-white lg:text-2xl font-bold">Orders and support</header>
                    <a className=" flex lg:text-lg">Contact us<FiArrowUpRight ></FiArrowUpRight></a>
                    <a className=" flex lg:text-lg">PAQs <FiArrowUpRight ></FiArrowUpRight></a>
                    <a className=" flex lg:text-lg">Shopping <FiArrowUpRight ></FiArrowUpRight></a>
                    <a className=" lg:text-lg">Order history</a>
                </div>
                <div>
                    <header className="border-b-2 border-white lg:text-2xl font-bold">About</header>
                    <a className="flex lg:text-lg">Terms of use</a>
                    <a className="flex lg: text-lg">Privacy policy</a>
                    <a className=" flex lg: text-lg">Cookie policy</a>
                </div>
                <div>
                    <header className=" border-b-2 border-white text-2xl font-bold">Services</header>
                    <a className="flex lg:text-lg">Live assistance</a>
                    <a className="flex lg:text-lg">Corporate gifts</a>
                    <a className="flex lg:ftext-lg">Click and Collect</a>
                </div>
                <div className=''>
                    <header className="border-b-2 border-white text-2xl font-bold">Social media</header>
                    <a className=" flex lg:text-lg">Instagram <FiArrowUpRight ></FiArrowUpRight></a>
                    <a className=" flex lg:text-lg">Twitter <FiArrowUpRight ></FiArrowUpRight></a>
                    <a className="flex lg:text-lg">LinkedIn <FiArrowUpRight ></FiArrowUpRight> </a>
                </div>
                
            </footer>
            <div className='border-b-2 border-white lg:w-full md:w-full w-full'>
<p className='bg-slate-900 h-32 p-9 text-white text-2xl'>ⓒAesop</p>
                </div>
        </div>
    );
};

export default Footer;