import React from "react";
import { MdCancel } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { useNavigate } from "react-router-dom";

<<<<<<< HEAD
export default function AddCard({ payment, order }) {
=======
export default function AddCard({ payment, setPayment, order }) {
>>>>>>> origin
  const navigetor = useNavigate();
  return (
    <div className="w-full h-screen bg-black bg-opacity-70 z-20 fixed top-0 right-0 flex items-center justify-center">
      <div className="bg-white border-cyan-600 border-4 h-1/4 w-3/5 rounded-lg flex flex-col items-center justify-evenly">
        <p className="text-3xl text-right"> מעונין לשמור פרטי כרטיס אשראי?</p>
        <div className="flex w-1/2 justify-between">
          <button
            onClick={() => {
              navigetor("/ThancksPage");
            }}
            className="flex items-center text-2xl text-cyan-600"
          >
            <MdCancel />
            <span>לא</span>
          </button>
          <button
            onClick={() => {
<<<<<<< HEAD
              // await axios.put(
              //   `http://localhost:8000/order/${id}`,
              //   order.payment,
              // );
=======
            //   setPayment([
            //     ...payment,
            //     {
            //       cardNumber: order.payment.cardNumber,
            //       threeDigits: order.payment.threeDigits,
            //       cardValidity: order.payment.cardValidity,
            //     },
            //   ]);
>>>>>>> origin
              navigetor("/ThancksPage");
            }}
            className="flex items-center text-2xl text-cyan-600"
          >
            <MdDoneAll />
            <span>כן</span>
          </button>
        </div>
      </div>
    </div>
  );
}
