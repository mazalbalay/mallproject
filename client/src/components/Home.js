import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home |
      <button
        onClick={() => {
          navigate("/checkout");
        }}
      >
        checkout | 
      </button>
      <button
        onClick={() => {
          navigate("/Auth");
        }}
      >
        Auth | 
      </button>
    </div>
  );
}
