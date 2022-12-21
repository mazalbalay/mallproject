import React from "react";
import { Link } from "react-router-dom";

const ProductForm = () => {
  return (
    <>
        <div className="bg-white rounded-xl shadow-lg p-8  container mx-auto ">
          <form
            action=""
            className="flex flex-col self-center space-y-4 w-6/12 container mx-auto"
          >
            <div>
              <label htmlFor="" className="text-sm">
                Product name
              </label>

              <input
                type="text"
                placeholder="Product name"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm">
                Price
              </label>

              <input
                type="number"
                placeholder="Price"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1  mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm">
                Quantity
              </label>

              <input
                type="number"
                placeholder="Quantity"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1  mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm">
                Brand
              </label>

              <input
                type="text"
                placeholder="Brand"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1  mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm">
                Department
              </label>

              <input
                type="text"
                placeholder="Department"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1   mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm">
                Section
              </label>

              <input
                type="text"
                placeholder="Section"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1  mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm">
                Description
              </label>

              <textarea
                rows="3"
                type="text"
                placeholder="Description"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1  mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label htmlFor="" className="text-sm">
                Image
              </label>

              <input
                type="text"
                placeholder="Enter Image URL"
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-1 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
              <input type="file" className="ring-1 ring-gray-300 w-full rounded-md mt-4 outline-none focus:ring-2 focus:ring-teal-300"/>
            </div>

            <button className="inline-block self-center bg-cyan-700 text-white font-bold rounded-lg px-4 py-2  mt-2 uppercase-text-sm">
              Submit
            </button>
          </form>
        </div>
    </>
  );
};

export default ProductForm;

// <div className="flex justify-center items-center">
// <div className="flex">

// <form>
//   <div >
//     <Link to="/products" className="butto">
//       Go to products
//     </Link>
//     <h2>Add product</h2>
//     <div>
//       <button type="submit">Publish now</button>
//     </div>
//   </div>

//   <div>
//     <div>
//       <div>
//         <div>
//           <div>
//             <label htmlFor="product_title">Product title</label>
//             <input
//               type="text"
//               placeholder="Type here..."
//               id="product_title"
//               required
//               />
//           </div>

//           <div>
//             <label htmlFor="product_price">Price</label>
//             <input
//               type="number"
//               placeholder="Type here..."
//               id="product_price"
//               required
//               />
//           </div>

//           <div>
//             <label>Description</label>
//             <textarea placeholder="Type here..." rows="7" required />
//           </div>

//           <div>
//             <label>Images</label>
//             <input type="text" placeholder="Enter image url" />
//             <input
//               type="file"
//               className="block w-full text-sm text-slate-500
//               file:mr-4 file:py-2 file:px-4
//               file:rounded-full file:border-0
//               file:text-sm file:font-semibold
//               file:bg-violet-50 file:text-violet-700
//               hover:file:bg-violet-100"
//               />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </form>
//               </div>
// </div>
