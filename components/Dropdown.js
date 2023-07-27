"use client"
import { useState } from 'react'
import Link from 'next/link'
const Dropdown = (props) => {
    const {opt,op1,op2, fun} = props
    const [drop, setDrop] = useState(false);

    const handlClick = () => {
        setDrop(!drop);
    }
    return (
        <div className='w-screen'>
            <Link href="#" className='w-11/12 md:w-64 flex flex-row justify-between' onClick={handlClick}><p className='m-2 mb-2 w-full p-2 text-lg'>{opt}</p> <p>{drop ? <i class="drop_icon fa-solid fa-caret-up m-2 mt-6 w-full"></i> : <i class="drop_icon fa-solid fa-caret-down m-2 mt-6 w-full"></i>}</p></Link>
            {drop && <ul>

                <li className='m-2 mb-2  w-11/12 p-2 text-lg'><button onClick={() => {handlClick(),fun()}}>{op1}</button></li>
                
                <li className='m-2 mb-2  w-11/12 p-2 text-lg'><button onClick={() => {handlClick(),fun()}}>{op2}</button></li>
                
            </ul>}
        </div>
    )
}

export default Dropdown