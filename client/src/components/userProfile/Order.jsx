import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { FaShippingFast } from 'react-icons/fa';

function Order() {
const [myOrders , setMyOrders] = useState([])
const [allProduct , setAllProduct] = useState()
console.log(myOrders);
const user =  JSON.parse(localStorage.getItem(("user"))).data

    const findUserOrders = async() =>{
            const {data} = await axios.get('http://localhost:8000/order')
            const filterd = data.filter(order => order.user.userId === user._id) || undefined
            setMyOrders(filterd);
            const {data:product} = await axios.get('https://mall-roq8.onrender.com/product')
            setAllProduct(product)
            // const filterProduct = product.filter(pro => pro._id === )

    }
console.log(user._id);
console.log(myOrders[0]?.product[0] );
    useEffect(() => {
      findUserOrders()
    }, [])
    
  return (
    <div className='w-[100%]  md:w-[70%]  pt-10 flex flex-col text-right py-5 px-10  bg-white items-end '>

      <h1 className='text-2xl mb-5 ' onClick={findUserOrders}>ההזמנות שלי</h1>


      {myOrders.length === 0 ? 
    <div> אין הזמנות קיימות </div>
    : <div>
 { myOrders.map((order,key)=>(
<div>
  <div> שיטת שילוח: {order?.shipping?.shippingType}</div>
  <div>  זמן הגעת המשלוח: {order?.shipping?.time}</div>
  {order.product.map((product,key)=>(
    <div className='border-2 p-3 rounded-md m-2'>
      <div>{product.productsStore} :שם החנות</div>
 <div>{product.productName}: שם המוצר </div>
 <div>{product.productPrice}: מחיר המוצר </div>
 </div>
 ))}
</div>
))}
</div>
    }

        <h1></h1>
        </div>
    
  )
}

export default Order