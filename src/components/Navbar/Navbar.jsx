import React, { useEffect, useState } from 'react'
// import '../../pages/Navbar.css'
import logo from '../../../public/logo.png'
import menuIcon from '/public/menu-icon.png'
import { Link } from 'react-scroll';
import Image from 'next/image';


const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

  return (
    <nav className={`containerdata ${sticky? 'dark-nav' : ''}`}>
      <img src={"https://trazler.com/assets/icons/web/img/TzLogoMain.svg"} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>DESTINATIONS</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>FOOD</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>WELL-BEING</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>SPORT</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>FAMILY</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>LIFESTYLE</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btnnav'>GET YOUR $120 CHRISTMAS GIFT</Link></li>
      </ul>
      <Image src={menuIcon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
