import React from "react";
import { MdPlace } from "react-icons/md";

export default function CheckOut1() {
  return (
    <div>
      <span >
        <MdPlace/>
      </span>
      <h1>פרטי משלוח</h1>
      <div>
        <h3>רחוב</h3>
        <input type="text" placeholder="טקסט חופשי" />
        <h3>שדה רחוב2</h3>
        <input type="text" placeholder="טקסט חופשי" />
        <h3>שם החברה למשלוח</h3>
        <input type="text" placeholder="טקסט חופשי" />
        <h3>מיקוד</h3>
        <input type="text" placeholder="טקסט חופשי" />
        <h3>קנון מערכת</h3>
        <input type="text" placeholder="טקסט חופשי" />
      </div>
      <button>שמור</button>
      <a href="#">מחק כתובת זו</a>
    </div>
  );
}
