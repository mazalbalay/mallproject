import React, { useState, useEffect } from "react";
import { getDepartments } from "../ApiCalls/Departments";
import { useNavigate } from "react-router-dom";
import DepartmentComp from "./DepartmentComp";

export default function Departments() {
  const [Departments, setDepartments] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getDepartmentsData = async () => {
      const result = await getDepartments();
      setDepartments(result.data);
    };
    getDepartmentsData();
  }, []);
  function navigateTo(route) {
    navigate(`${route}`);
  }
  return (
    <div className="flex-col items-center w-full">
      <div className="w-2/4 m-auto">
        <button
          className=" bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
          type="button"
          onClick={() => navigateTo(`${"/Admin/Department/new"}`)}
        >
          + add Department
        </button>
        <div className=" flex flex-wrap">
          {Departments.map((dep) => (
            <div
              key={dep._id}
              onClick={() =>
                navigateTo(`${`/Admin/Department/edit/${dep._id}`}`)
              }
            >
              <DepartmentComp img={dep.image} text={dep.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
