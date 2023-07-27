"use client"
import Dropdown from "./Dropdown"
import { useState } from 'react'
import Link from 'next/link'
const Nav_1 = () => {
  const [nav1, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav1);
    console.log(nav1);
  }
  return (
    <div>
      <div className="fixed top-0 w-full md:flex md:flex-row md:justify-between bg-black">
        <ul className="nav1_container flex flex-row text-xl">
          <li className="text-white p-3"><Link href="#"><i className="fa-solid fa-house p-1"></i>Home</Link></li>
          <li className="text-white p-3"><Link href="#"><i className="fa-solid fa-list p-1"></i>Contents</Link></li>
          <li className="text-white p-3"><Link href="#"><i className="fa-sharp fa-solid fa-gear p-1"></i>Categories</Link></li>
          <li className="text-white p-3"><Link href="#"><i className="fa-sharp fa-solid fa-gear p-1"></i>Settings</Link></li>
        </ul>
        <ul className='flex flex-row justify-between'>
          <li><button className="m-3 p-1 w-26 bg-white text-black rounded-lg font-medium"><i class="fa-solid fa-user-large px-2"></i>Harsh Jain</button></li>
          <li><button className='hamburg' onClick={handleClick}>{nav1 ?  <i class="fa-solid fa-xmark mt-5 mr-5" style={{ color: "white" }}></i> : <i class="fa-solid fa-bars mt-5 mr-5" style={{ color: "white" }}></i>}
          </button></li>

        </ul>

      </div>
      {nav1 &&
        <div className="alert">

          <div className="absolute left-0 h-screen bg-zinc-800 w-screen text-white">
            <button className='m-2 mt-4 ml-4 w-11/12 p-2 bg-white text-black hover:bg-gray-400 rounded-md'>Add new post</button>
            <button className='m-2 ml-4 w-11/12 p-2 bg-white text-black hover:bg-gray-400 rounded-md'>+ New Content</button>
            <button className='m-2 ml-4 w-11/12 p-2 bg-white text-black hover:bg-gray-400 rounded-md'>+ New Item</button>
            <ul>
              <li className='m-2 mb-2 w-11/12 p-2 mt-2 text-lg bg-zinc-800 text-white border border-zinc-800 hover:border-bg-zinc-800'><Link href="#">Home</Link></li>
              
              <li className='m-2 mb-2 w-11/12 p-2 mt-2 text-lg bg-zinc-800 text-white border border-zinc-800 hover:border-bg-zinc-800'><Link href="#">Contents</Link></li>
              
              <li className='m-2 mb-2 w-11/12 p-2 mt-2 text-lg bg-zinc-800 text-white border border-zinc-800 hover:border-bg-zinc-800'><Link href="#">Categories</Link></li>
              
            </ul>
            
            <Dropdown opt={"Dashboard"} op1={"Commerce"} op2={"Analysist"} fun={handleClick}/>
            
            <Dropdown opt={"Application"} op1={"Commerce"} op2={"Analysist"} fun={handleClick} />
            
            <Dropdown opt={"Settings"} op1={"Commerce"} op2={"Analysist"} fun={handleClick}/>
            
          </div>
        </div>
      }
    </div>
  )
}

export default Nav_1