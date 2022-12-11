import React from "react";
import { BsChevronDown } from "react-icons/bs";

export default function CheckOut2() {
  return (
    <div>
      <h1>זמן משלוח</h1>
      <p>בחר שעה למשלוח בחר שעה למשלוח בחר שעה למשלוח</p>
      <p></p>
      <button>ראשון</button>
      <button>שני</button>
      <button>שלישי</button>
      <button>רביעי</button>
      <button>חמישי</button>
      <button>שישי</button>
      <div>
        <input type="checkbox" />
        <p>10-12</p> <button>בחר</button>
      </div>
      <div>
        <input type="checkbox" />
        <p>10-12</p> <button>בחר</button>
      </div>
      <div>
        <input type="checkbox" />
        <p>10-12</p> <button>בחר</button>
      </div>
      <div>
        <input type="checkbox" />
        <p>10-12</p> <button>בחר</button>
      </div>
      <button>
        שעות נוספות <BsChevronDown />
      </button>
    </div>
  );
}
