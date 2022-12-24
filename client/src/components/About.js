import React from "react";
import { Link } from "react-router-dom";
import StoreListNav from "./Navs/StoreListNav";
import Footer from "./Footers/Footer";
import FAQ from "./FAQ";

const About = () => {
  return (
    <main className="h-screen">
      <div><StoreListNav /></div>
      <div className="bg-gray-100">

      <div className="flex flex-row container ms-auto md:w-8/12 w-10/12 text-gray-600  mx-auto border ">
        <div className=" border md:w-8/12 basis-full p-5 text-end bg-white">
          <FAQ/>
        </div>
          <ul className="border  md:w-4/12 text-end bg-white">
            <li className="border p-5  text-end shadow hover:bg-gray-200">

          <Link to='#'>אודות</Link>
            </li>
            <li className="border p-5  text-end shadow hover:bg-gray-200">
          <Link to='#'> שאלות נפוצות</Link>
              
              </li>
              <li  className="border p-5  text-end shadow hover:bg-gray-200">
          <Link to='#'>החלפת סיסמא</Link>
              
              </li>
              <li className="border p-5  text-end shadow hover:bg-gray-200">
          <Link to='#'>נתוני התשלום</Link>
              
              </li>
              <li className="border p-5  text-end shadow hover:bg-gray-200">
              
          <Link to='#'>אודות</Link>
              </li>
              <li>
                
              </li>
          </ul>
          
      </div>
      <div>
        <Footer />
      </div>
      </div>

    </main>
  );
};

export default About;

// <div className="container md:pt-20 md:mt-5 mx-auto md:w-8/12 w-3/12 text-gray-400 font-medium ">
//  <div>

//     <ul className="md:w-3/12 w-8/12 float-right text-right">
//     {/* <ul className="md:w-3/12 w-8/12 float-right text-right"> */}
//       <li className="shadow py-5 px-10  hover:bg-gray-200">
//         <Link to="#">אודות</Link>
//       </li>
//       <li className="shadow py-5 px-10 hover:bg-gray-200">
//         <Link to="#">שאלות נפוצות</Link>
//       </li>
//       <li className="shadow py-5 px-10  hover:bg-gray-200">
//         <Link to="#">החלפת סיסמא</Link>
//       </li>
//       <li className="shadow py-5 px-10 hover:bg-gray-200">
//         <Link to="#">כתובת שלי</Link>
//       </li>
//       <li className="shadow py-5 px-10  hover:bg-gray-200">
//         <Link to="#">נתוני תשלום</Link>
//       </li>
//     </ul>
//   </div>
//   <div className="text-end p-20 ">
//     hay
//   </div>
//   </div>

// import React from 'react'

// const AboutPage = () => {
//   return (
//     <>

//     <div className='flex flex-row container mx-auto'>
//         <div className=' border basis-full p-5 text-end'>
// div
//         </div>
//         <div className='border p-5 basis-1/3 text-end'>
//         <button>
//             אודות
//         </button>
//         <button className='border p-5 basis-1/3 text-end'>
//             שאלות נפוצות
//         </button>
//         <button className='border p-5 basis-1/3 text-end'>
//             החלפת סיסמא
//         </button>
//         <button className='border p-5 basis-1/3 text-end'>
//             נתוני התשלום
//         </button>
//         <button className='border p-5 basis-1/3 text-end'>
//             אודות
//         </button>

//     </div>
//     </div>Link

//     </>
//   )
// }

// export default AboutPage
