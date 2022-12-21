import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQ = () => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? "display" : "hidden";
  const ansClass = `${expandClass} p-4`;
 
  return (
    <div className="py-16 mx-auto w-full px-4 max-w-4xl text-right">
      <h3 className="mb-12 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        שאלות נפוצות
      </h3>
      <div className="shadow rounded border border-gray-100 border-t-0">
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">מה הסכום המינימלי להזמנה?</div>
          <button
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={(e) => setExpand(!expand)}
          >
            {expand ? <FaMinus className="w-5" /> : <FaPlus className="w-5" />}
          </button>
        </div>
        <div className={ansClass}>כדי בה מתוך ליצירתה אגרונומיה, או רפואה טכנולוגיה כלל. את בדפים מיוחדים צ'ט. המזנון ביולוגיה לויקיפדים צעד אם. מוסיקה מתמטיקה של זאת, אם ספרות הקהילה היא</div>
      </div>
      <div className="shadow rounded border border-gray-100 border-t-0">
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">איך יוצרים איתכם קשר?</div>
          <button
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? <FaMinus className="w-5" /> : <FaPlus className="w-5" />}
          </button>
        </div>
        <div className={ansClass}>מה זכר לשון מאמר ציור. כדי יסוד אודות בויקיפדיה אל. היא מה בחירות קודמות, של צעד מיזמי קצרמרים שינויים. אודות תיאטרון אתה גם, מרצועת ופיתוחה אדריכלות בקר אם, זכר גם שונה אירועים לויקיפדיה. </div>
      </div>
      <div className="shadow rounded border border-gray-100 border-t-0">
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">אתם כשרים?</div>
          <button
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? <FaMinus className="w-5" /> : <FaPlus className="w-5" />}
          </button>
        </div>
        <div className={ansClass}>answer</div>
      </div>
      <div className="shadow rounded border border-gray-100 border-t-0">
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">האם האתר שלכם מאובטח?</div>
          <button
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? <FaMinus className="w-5" /> : <FaPlus className="w-5" />}
          </button>
        </div>
        <div className={ansClass}> או מוסיקה ברוכים אנא, המלצת בכפוף אתה של, שתי ויקי לערך אנציקלופדיה אל. מה שתי בישול חופשית, עזה לחבר פיסיקה את, בידור מונחונים שתי גם. מתוך רוסית המלצת ב קרן, על כניסה המזנון כדי, של כלל מדעי פילוסופיה לויקיפדים. מאמר אנציקלופדיה בדף ב, קרן ברית מיזמי לערוך של.</div>
      </div>
      <div className="shadow rounded border border-gray-100 border-t-0">
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">איך אקבל את המוצרים?</div>
          <button
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? <FaMinus className="w-5" /> : <FaPlus className="w-5" />}
          </button>
        </div>
        <div className={ansClass}>
אל מוגש איטליה עוד. שמו או מאמר מושגי רומנית, או אחר לערך שדרות, אחד המזנון תיקונים או. שער המדינה העריכהגירסאות גם, ארץ אל זקוק לעריכת ויקיפדיה. בישול ותשובות אחד בה. שפות בידור התפתחות גם כתב, אם סדר מפתח בכפוף בגרסה, גם מתוך הבקשה שער.</div>
      </div>
      <div className="shadow rounded border border-gray-100 border-t-0">
        <div className="p-4 text-xl relative font-medium">
          <div className="w-5/6">מה אפשרויות התשלום באתר?</div>
          <button
            aria-label="question-expander"
            className="text-xl absolute top-0 right-0 p-4 focus:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? <FaMinus className="w-5" /> : <FaPlus className="w-5" />}
          </button>
        </div>
        <div className={ansClass}>כדי בה מתוך ליצירתה אגרונומיה, או רפואה טכנולוגיה כלל. את בדפים מיוחדים צ'ט. המזנון ביולוגיה לויקיפדים צעד אם. </div>
      </div>
    </div>
  );
};

export default FAQ;
