import React from 'react';
import {BsFacebook, BsInstagram, BsFillEnvelopeFill} from "react-icons/bs";
import {FaCopyright} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900  text-gray-300">
        <div className="container mx-auto w-8/12 md:flex md:justify-between md:items-center pt-6">
            <ul >
                <li>פירוט עמוד</li>
                <li>פירוט עמוד</li>
            </ul>
            <ul>
                <li>פירוט עמוד</li>
                <li>פירוט עמוד</li>
            </ul>
            <ul>
                <li>פירוט עמוד</li>
                <li>פירוט עמוד</li>
            </ul>
            <ul>
                <li>פירוט עמוד</li>
                <li>פירוט עמוד</li>
            </ul>
            <ul>
                <li>אודותינו</li>
                <li> אודותינו</li>
            </ul>

        </div>
            <div className='flex justify-center items-center pt-10 pb-3 '>
                <span className='mx-4 text-2xl'>
                <BsFacebook className=" border-white"/>
                </span>
                <span className='text-2xl'>
                <BsInstagram/>
                </span>
                <span className='mx-4 text-2xl'>
                <BsFillEnvelopeFill/>
                </span>

            </div>
            <div className='flex justify-center items-center ml-3 pb-3'>
                <span className='mr-2'> כל הזכויות שמורות</span><FaCopyright/>
            </div>
          
    </footer>
  )
}

export default Footer