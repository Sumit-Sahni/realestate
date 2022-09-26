import React from 'react'
import { useState, useEffect } from 'react'
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'
import {Link} from "react-scroll"

const NavbarComp = () => {

     const [nav, setNav] = useState(false)
    
     const handleNavbar = () =>{
        setNav(!nav)
     }

      
    

  return (
        <div className='w-screen  py-8 z-10 h-24 sm:h-auto bg-white fixed '>
          <div className='px-5 flex justify-between items-center w-full h-full'>
             <div className='flex items-center'>
                 <h1 className='text-3xl font-bold mr-4 sm:text4xl'>reunion</h1>

                 <ul className='hidden md:flex text-black items-center px-6'>
                 <li><Link className='cursor-pointer ' to="home" spy={true} smooth={true} offset={-100} duration={700} >Rent</Link></li>
                 <li><Link className='cursor-pointer ' to="about" spy={true} smooth={true} offset={10} duration={700} >Buy</Link></li>
                 <li><Link className='cursor-pointer ' to="Achivement" spy={true} smooth={true} offset={-100} duration={700} >Sell</Link></li>
                 <li><Link className='cursor-pointer ' to="about" spy={true} smooth={true} offset={10} duration={700} >ManageProperty</Link></li>
                 <li><Link className='cursor-pointer ' to="Achivement" spy={true} smooth={true} offset={-100} duration={700} >Resources</Link></li>
                 <button className='px-7 py-2 rounded-3xl hover:underline underline-offset-4'>
                   <Link className='cursor-pointer' to="contact" spy={true} smooth={true} offset={50} duration={700} >Contact</Link>
                 </button>
              </ul>

             </div>
              

              <div className='invisible lg:visible	' >
                 <button className='px-7 py-2 rounded-3xl bg-slate-300 hover:bg-slate-400 '>Login</button>
                 <button className='px-7 py-2 rounded-3xl bg-slate-300 hover:bg-slate-400 mx-3'>Sign up</button>
              </div>
              <div className='md:hidden' onClick={handleNavbar}>
                {!nav ? <AiOutlineClose size={30} className="cursor-pointer"/> :<AiOutlineMenu size={30} className="cursor-pointer"/> }
            
              </div>
          </div>
         
          <ul className={nav ? "hidden" : "absolute bg-white w-full h-[100vh] px-8 md:hidden " }>

                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link  onClick={handleNavbar} className='cursor-pointer' to="home" spy={true} smooth={true} offset={50} duration={700} >Rent</Link>
                 </li>

                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="about" spy={true} smooth={true} offset={-110} duration={700} >Buy</Link>
                 </li>
                 
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="Achivement" spy={true} smooth={true} offset={-100} duration={700} >Sell</Link>
                 </li>

                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="contact" spy={true} smooth={true} offset={50} duration={700} >Manage Property</Link>
                 </li>
                 <li className='p-4 w-full text-2xl font-cba my-5 text-left'>
                 <Link onClick={handleNavbar} className='cursor-pointer' to="contact" spy={true} smooth={true} offset={50} duration={700} >Resources</Link>
                 </li>
                 <button className=' text-white px-7 py-2 rounded-3xl bg-slate-300 hover:bg-slate-400 '>Login</button>
                 <button className=' text-white px-7 py-2 rounded-3xl bg-slate-300 hover:bg-slate-400 mx-3'>Sign up</button>
              </ul>
        
        </div>
  )
}

export default NavbarComp;