import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footers/Footer";
import FAQ from "./FAQ";

const About = () => {
  const data = [
    "אודותת",
    "שאלות נפוצות",
    "החלפת סיסמא",
    "נתוני תשלום",
    "אודות",
  ];
  return (

      <div className=" my-20 bg-gray-100">
        <div className=" text-gray-600 border ">
          <ul className="border bg-white">
            {data.map((item) => {
              return (
                <li className="border p-10  text-end shadow hover:bg-gray-200">
                  <Link to="#">{item}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

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
