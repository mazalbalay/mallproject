import React from 'react'

export default function CheckOut3() {
  return (
    <div>
        <h1>פרטי תשלום</h1>
        <h3>מספר כרטיס</h3>
        <input type="text" placeholder='3434-3434-3434-3434'/>
        <h3>תוקף</h3>
        <input type="date" placeholder='34 02'/>
        <h3>3 ספרות מאחורי הכרטיס CW</h3>
        <input type="text" placeholder='321'/>
        <button>אישור קנייה</button>
    </div>
  )
}
