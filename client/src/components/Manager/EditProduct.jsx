import React from "react";
import { Link } from "react-router-dom";
import ProductForm from "./ProductForm";

const EditProduct = () => {
  return (
    <>
    <div>
            <h1 className="text-center font-semibold text-4xl my-5 py-5">Edit Product</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 container mx-auto ">
        <ProductForm/>

        </div>
    </div>
    
    </>
  );
};

export default EditProduct;





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




// import React from "react";
// import { Link } from "react-router-dom";

// function EditProduct(props) {
//   const { productId } = props;
//   return (
//     <>
//       <div>
//         <form>
//           <div>
//             <Link to="/products">Go to products</Link>
//             <h2>Update Product</h2>
//           </div>

//           <div>
//             <button type="submit">Publish now</button>
//           </div>

//           <div>
//             <div>
//               <div>
//                 <div>
//                   <div>
//                     <label htmlFor="product_title">Product title</label>
//                     <input
//                       type="text"
//                       placeholder="Type here..."
//                       id="product_title"
//                       required
//                       value={productId.title}
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="product_price">Price</label>
//                     <input
//                       type="number"
//                       placeholder="Type here..."
//                       id="product_price"
//                       required
//                       value={productId.price}
//                     />
//                   </div>

//                   <div>
//                     <label>Description</label>
//                     <textarea placeholder="Type here..." rows="7" required />
//                   </div>

//                   <div>
//                     <label>Images</label>
//                     <input type="text" placeholder="Enter image url" />
//                     <input type="file" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default EditProduct;
