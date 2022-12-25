import React, { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";

const FAQ = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4 pr-20 text-right`;

  const data = [
    {
      id: 1,
      question: "מה הסכום המינימלי להזמנה באתר?",
      answer:
        "הסכום המינימאלי בהזמנה באתר הוא 150 שח, המחיר עשוי להשתנות בהתאם לשיטת משלוח שתבחר בעת סיום ההזמנה",
    },
    {
      id: 2,

      question: "איך יוצרים איתכם קשר?",
      answer:
        " ניתן ליצור איתנו קשר דרך הפייסבוק, אינסטגרם, ווטצאפ, ובמיילץ במקרים דחופים ניתן ליצור קשר טלפונית במספר 03-2222222",
    },
    {
      id: 3,

      question: "האם האת שלכם מאובטח?",
      answer: "כן",
    },
    {
      id: 4,

      question: "איך אקבל את המוצרים?",
      answer: "בהתאם לשיטת משלוח שתבחר בעת השלמת ההזמנה.",
    },
    {
      id: 5,

      question: "מה הן אפשרויות התשלום באתר?",
      answer: "כרטיס אשראי ו-PAYPAL",
    },
  ];

  return (
    <div className="mt-20  max-w-4xl text-right">
      <div className=" mt-8  text-end">
        <h3 className="m-10 text-2xl text-center leading-8  tracking-tight text-gray-500 sm:leading-10">
          שאלות נפוצות
        </h3>

        {data.map((detail) => {
          return (
            <div className="pb-2">
              <div className="p-4 text-xl relative flex items-center">
                <div className="text-sky-700 w-5/6">{detail.question}</div>
                <button
                  id={detail.id}
                  aria-label="question-expander"
                  className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
                  onClick={(e) => setExpand(!expand)}
                >
                  {expand ? (
                    <FiMinusCircle className="text-sky-300 w-5 hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
                  ) : (
                    <FiPlusCircle className="text-sky-500 w-5 hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />
                  )}
                </button>
              </div>
              <div id={detail.id} className={`${ansClass}`}>
                {detail.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;

// <div className=" bg-white">
//   <div className=" text-xl flex  text-end items-center py-1">
//     <div className="text-sky-500 w-5/6">{detail.question}</div>
//     <button
//     id= {detail.id}

//       aria-label="question-expander"
//       className="text-xl p-4 mt-2 focus:outline-none"
//       onClick={(e) => expandAnswer(e)}
//     >
//       {expand ? <FiMinusCircle id={detail.id} className="text-sky-500 w-5 hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" /> : <FiPlusCircle id={detail.id} className="text-sky-500 w-5 hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />}
//     </button>
//   </div>
//   <div id={detail.id}  className={ansClass}>{detail.answer}</div>
// </div>
