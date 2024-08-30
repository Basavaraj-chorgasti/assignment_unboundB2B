import React from 'react'
import faceBook from "../../../public/icons8-facebook-50.png"
import  twitter from "../../../public/icons8-twitter-50.png"
import instagram from "../../../public/icons8-instagram-50.png"
import pinterest from "../../../public/icons8-pinterest-50.png"
import youtube from "../../../public/icons8-youtube-50.png"

import Image from "next/image";

const Footer = () => {
  return (
    <div className='footer'>
      <p className='design'>Designed & Developed by XP DESIGN</p>
      <ul>
        <li><Image src={faceBook}   alt="youtube-play--v1" width={18}/><p className='design'>29</p></li>
        <li><Image src={twitter}  alt="youtube-play--v1"  width={18}/><p className='design'>70k</p></li>
        <li><Image src={instagram}  alt="youtube-play--v1"  width={18}/><p className='design'>40</p></li>
        <li><Image src={pinterest}   alt="youtube-play--v1"  width={18}/><p className='design'>13K</p></li>
        <li><Image src={youtube}  alt="youtube-play--v1"  width={18}/><p className='design'>168K</p></li>
      </ul>
    </div>
  )
}

export default Footer
