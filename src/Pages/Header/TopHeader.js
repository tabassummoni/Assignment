import React from 'react';

const TopHeader = () => {
    return (
        <div >
          <div className='lg:h-10 p-2 text-xs ' style={{
            background : "#c2c2af " ,
             color :"#333" ,
             textAlign:'center',
             fontFamily:'sans-serif' ,
             fontSize :".875rem" ,
              fontWeight : "400" ,
              lineHeight:"1.5",
              }}> 
            <p >Trained Aesop consultations are available to provide bespoke skin care advise.<span className='font-bold ml-2'>Book a video consultation</span> </p>
          </div>
          <div className='bg-black   lg:h-11 p-2 text-center ' style={{
            fontSize:"14px",
            fontFamily:'sans-serif' ,
            flexGrow : 2 ,
            fontWeight:400,
            cursor:'pointer',
            color:"#fffef2",
            gap:' .875rem'

          }}>
            <p>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400 <span className='ml-3'> + </span> </p>
          </div>
        </div>
    );
};

export default TopHeader;