import useJobStore from "../app/jobStore";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const filter = useJobStore((state) => state.filter);
  const setFilter = useJobStore((state) => state.setFilter);
  const [navValue, setNavValue] = useState('-100%')
  const handleNav = ()=> {
    if (navValue == '-100%'){
      setNavValue('0')
    }else {
      setNavValue('-100%')
    }
  }
  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10">
    <div className="flex justify-between items-center sticky w-full  p-4 mx-auto">
      <div className="flex flex-col gap-2 p-2 sm:hidden" onClick={()=>{handleNav()}}>
        <span className="w-1 border bg-slate-300"></span>
        <span className="w-1 border  bg-slate-300"></span>
        <span className="w-1 border bg-slate-300"></span>
      </div>
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={500}  className="text-3xl font-bold dark:text-white cursor-pointer" >
                JOBBER
            </Link>
          <nav className="absolute bg-teal-700  w-1/2 p-5 sm:p-0  top-16 left-0 sm:top-0 flex flex-col gap-6 items-center justify-center text-xl" aria-label="main" style={{left: navValue}}>
                <Link to="addjobs" spy={true} smooth={true} offset={-100} duration={500} className="hover:opacity-90 dark:text-white w-full  text-right" onClick={()=>{handleNav()}}>Add Jobs</Link>
                <Link to="jobs" spy={true} smooth={true} offset={-100} duration={500} className="hover:opacity-90 dark:text-white w-full text-right  px-3" onClick={()=>{handleNav()}}>Jobs</Link>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="hover:opacity-90 dark:text-white w-full text-right px-2" onClick={()=>{handleNav()}}>Contact Us</Link>
          </nav>
          <nav className="hidden w-1/4  relative gap-6 items-center justify-center sm:block space-x-8 text-xl" aria-label="main">
                <Link to="addjobs" spy={true} smooth={true} offset={-100} duration={500} className="hover:opacity-90 dark:text-white w-full cursor-pointer  text-right" >Add Jobs</Link>
                <Link to="jobs" spy={true} smooth={true} offset={-100} duration={500} className="hover:opacity-90 dark:text-white w-full text-right  px-3 cursor-pointer" >Jobs</Link>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="hover:opacity-90 dark:text-white w-full text-right px-2 cursor-pointer" >Contact Us</Link>
          </nav>
            <form action="" 
            className="flex sm:flex-row w-1/2 gap-4"
            >
              <input
              id='search'
              type='text'
              role='searchbox'
              placeholder='Search Jobs'
              value={filter}
              onChange={(e) => 
                setFilter(e.target.value)}
              
              className=" text-xl p-1 sm:flex w-full text-black"
              />
            </form>
      </div>
      </header>
  )
}

export default Header