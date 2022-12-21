import React from 'react'
import { FiMinusCircle , FiPlusCircle} from "react-icons/fi";


const CartStore = () => {
  return (

    <div className='w-80 border border-gray'>
        <div className='bg-black text-white text-center p-4'>
  <p className='text-xl'>          עגלת קניות</p>
        </div>
            <div className='flex justify-end bg-gray-200'>
                <div className='name grid  place-content-center '>
                    <h1 className='font-bold'>חוות הבית</h1>

                </div>
  <div className="right-img bg-gray-200 ">
            <img  className="w-24 rounded-full p-3"  src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t39.30808-6/291457391_556774552703567_2822531227252307747_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CyjXaIGWAJ8AX8tQaoa&_nc_ht=scontent.fhfa2-2.fna&oh=00_AfA4xhnT3nM9QjJBVZ4sEH53UHxoc1ruMHxEMD4NO-Bh7Q&oe=63A5F3AF" alt=""/>
                </div>
                 
        </div>
    
    <div className="flex">
  <div className="plus-minus text-center grid  place-content-center">
    <div className=''>
<div className="minus-plus flex justify-around">
  <button className='text-teal-400'><FiMinusCircle/></button>
  <h5>2</h5>
  <button className='text-teal-400'><FiPlusCircle/></button>
</div>
</div>
<h5>9.90 ש"ח</h5>
  </div>

  <div className="contact text-end">
    <h1 className="font-bold">בצל סגול </h1>
<p className="text-gray-400 text-sm">חנות ירקות ופירות טרי</p>
<p className="text-gray-400 text-sm">בלה בלה בלה בלה בלה בלה</p>
  </div>

  <div className="right-img ">
 <img  className='w-24' src="https://d3m9l0v76dty0.cloudfront.net/system/photos/4848169/extra_large/06b445902adeec3905b20c44116d6652.jpg" alt=""/>
  </div>
  </div>

  <hr className='w-24' ></hr>
  <div className='price p-2'><h1>סכ"ה: 280 ש"ח</h1></div>

  <div className='flex justify-end bg-gray-200'>
                <div className='name grid  place-content-center '>
                    <h1 className='font-bold'>פירות וירקות</h1>

                </div>
  <div className="right-img bg-gray-200 ">
            <img  className="w-24 rounded-full p-3"  src="https://www.nahariya-link.co.il/media-lib/portal2_business6174_mini_site_logo.png" alt=""/>
                </div>
                 
        </div>

        <div className="flex">
  <div className="plus-minus text-center grid  place-content-center">
    <div className=''>
<div className="minus-plus flex justify-around">
  <button className='text-teal-400'><FiMinusCircle/></button>
  <h5>2</h5>
  <button className='text-teal-400'><FiPlusCircle/></button>
</div>
</div>
<h5>9.90 ש"ח</h5>
  </div>

  <div className="contact text-end">
    <h1 className="font-bold">מלפפון</h1>
<p className="text-gray-400 text-sm">חנות ירקות ופירות טרי</p>
<p className="text-gray-400 text-sm">בלה בלה בלה בלה בלה בלה</p>
  </div>

  <div className="right-img ">
 <img  className='w-24' src="https://d3m9l0v76dty0.cloudfront.net/system/photos/4848165/index/5a10b2f72e336601e5bdb787310aae1d.jpg" alt=""/>
  </div>
  </div>
  <hr className='w-24' ></hr>
  <div className='price p-2'><h1>סכ"ה: 280 ש"ח</h1></div>
  <hr/>
  <div className='p-2'>
    <div className='flex justify-between'>
        <h1 className='font-bold'>408.50 ש"ח</h1>
        <h1 >:סה"כ</h1>
    </div>
    <div className='flex justify-between'>
        <h1 className='font-bold'>37 ש"ח</h1>
    <h1 className=''>:בקניה זו חסכת</h1>
    </div>
    <div className='flex justify-between'>
        <h1 className='font-bold'>12</h1>
    <h1 className=''>:מספר מוצרים</h1>
    </div>
    

  </div>
     <div className=''>
        <button className='text-white text-xl bg-sky-500/75 w-full p-4'>לתשלום 408 ש"ח</button>

     </div>
 </div>
  )
}

export default CartStore