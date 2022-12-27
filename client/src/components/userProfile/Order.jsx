import axios from 'axios'
import React, { useState , useEffect } from 'react'

function Order() {
const [myOrders , setMyOrders] = useState([])
const [allProduct , setAllProduct] = useState()
console.log(myOrders);
const user =  JSON.parse(localStorage.getItem(("user"))).data

    const findUserOrders = async() =>{
            const {data} = await axios.get('http://localhost:8000/order')
            const filterd = data.filter(order => order.user.userId === user._id) || undefined
            setMyOrders(filterd);
            const {data:product} = await axios.get('http://localhost:8000/product')
            setAllProduct(product)
            // const filterProduct = product.filter(pro => pro._id === )

    }

    useEffect(() => {
      findUserOrders()
    }, [])
    
  return (
    <div className='w-[100%]  md:w-[70%]  pt-10 flex flex-col text-right py-5 px-10  bg-white items-end '>

      <h1 className='text-2xl mb-5 ' onClick={findUserOrders}>ההזמנות שלי</h1>

      {/* {myOrders.length === 0 ? 
    <div> אין הזמנות קיימות </div>
    :  */}
    <div>

        <h1></h1>
        </div>
    </div>
  )
}

export default Order