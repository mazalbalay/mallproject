import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;

const  expandHandler = (e) =>{
    console.log(e.target.name)

  }

  const questions = [
    {
      id:1,
      question: "?מה הסכום המינימלי להזמנה",
      answer: "!תשובה לשאלה מספר 1",
    },
    {
      id:2,
      question: "?איך יוצרים איתכם קשר",
      answer: "!תשובה לשאלה מספר 2",
    },
    {
      id:3,
      question: "?אתם כשרים",
      answer: "!תשובה לשאלה מספר 3",
    },
    {
      id:4,
      question: "?האם האתר שלכם מאובטח",
      answer: "!תשובה לשאלה מספר 4",
    },
    {
      id:5,
      question: "?איך אקבל את המוצרים",
      answer: "!תשובה לשאלה מספר 5",
    },
    {
      id:6,
      question: "?מה אםשרויות התשלום באתר",
      answer: "!6תשובה לשאלה מספר ",
    },
  ];

  return (
    <div className="py-16 mx-auto w-full px-4 max-w-4xl text-right">
      <h3 className="mb-12 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        שאלות נפוצות
      </h3>
      {questions.map((ques) =>(

      <div className="shadow rounded border border-gray-100 border-t-0" key={ques.id}>
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">{ques.question}</div>
          <button
          name={ques.id}
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={(e) => expandHandler(e)}
          >
            {expand ? <FaMinus className="w-5" /> : <FaPlus className="w-5" />}
          </button>
        </div>
        <div className={ansClass}>
          {ques.answer}
        </div>
      </div>
      ))}


     
    </div>
  );
};

export default FAQ;
