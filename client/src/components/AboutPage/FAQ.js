import React, { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";

const FAQ = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4 px-1`;

  const data =[
    {
      id:1,
      question:"question 1",
      answer:"answer 1"
    },   {
      id:2,

      question:" question 2",
      answer:"answer 2"
    },   {
      id:3,

      question: "question 3",
      answer:"answer 3"
    },   {
      id:4,

      question:"question 4",
      answer:"answer 4"
    },   {
      id:5,

      question:"question 5",
      answer:"answer 5"
    },   {
      id:6,

      question:"question 6",
      answer:"answer 6"
    }
  ]

  const expandAnswer =(e) =>{
    data.map((detail)=>{
      if(detail.id === e.target.id){
       setExpand(!expand)
      }
    })
  }
 
  return (
    <div className="p-2 max-w-4xl text-right">
      <h3 className=" text-3xl text-center leading-8  tracking-tight text-gray-500 sm:text-3xl sm:leading-10">
        שאלות נפוצות
      </h3>
      {data.map((detail)=>{
        return(
      <div className="border bg-white">
        <div className="p-4 text-xl flex font-medium">
          <div className="text-sky-300 w-5/6">{detail.question}</div>
          <button
          id= {detail.id}
       
            aria-label="question-expander"
            className="text-xl p-4 focus:outline-none"
            onClick={(e) => expandAnswer(e)}
          >
            {expand ? <FiMinusCircle id={detail.id} className="text-sky-500 w-5 hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" /> : <FiPlusCircle id={detail.id} className="text-sky-500 w-5 hover:bg-sky-500 hover:ring-sky-500 rounded-lg hover:text-white" />}
          </button>
        </div>
        <div id={detail.id}  className={ansClass}>{detail.answer}</div>
      </div>

        )
      })}

    
     
    </div>
  );
};

export default FAQ;
