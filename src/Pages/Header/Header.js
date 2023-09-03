import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <nav class="nav">
      <ul className="menu menu-horizontal px-1">
  <div  className="menu menu-horizontal px-1 lg:visible md:invisible">
    <li className=''><a>Skin Care</a></li>
  <li><a>  Body & Hand</a></li>
  <li><a>Hair</a></li>
  <li><a>Fragrance</a></li>
  <li><a>Home</a></li>
  <li><a>Kits & Travel</a></li>
  <li><a>Facial Appointments</a></li>
  </div>
  <div className='menu menu-horizontal px-1'><li><a>Gifts</a></li>
  <li><a>Read</a></li>
  <li><a>Stores</a></li></div>
  <li><a><FaSearch className='mt-3'></FaSearch></a></li>
  
  <div className='menu menu-horizontal px-1 navbar-end'>
  <li><a>LogIn</a></li>
  <li><a>SignUp</a></li>
  </div>
</ul>
</nav>
    </div>
  );
};

export default Header;