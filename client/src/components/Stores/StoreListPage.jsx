import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { allStores } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import StoreComp from "./StoreComp";
import HeaderStore from ".//HeaderStore";
import { getDepartment } from "../ApiCalls/Departments";
const StoreListPage = () => {
  let { depId } = useParams();
  let { depName } = useParams();
  const navigate = useNavigate();
  const [stores, setStores] = useState();
  const [department, setdepartment] = useState();
  const storesFu = async () => {
    const  deps  = await getDepartment(depId);
    setdepartment([deps.data]);
    const { data } = await allStores();
    const result = data.filter((store) => store.department === depName);
    setStores(result);
  };
 
  useEffect(() => {
storesFu();
  }, [depId]);

  
  console.log(stores);
  console.log(department);
  return (
    <div>
      {department?.map((dep) => (<HeaderStore key={dep._id}  name={dep.name} image={dep.image} />))}
      <div className="md:w-[45%] m-auto md:m-0 w-[90%]  absolute right-0">
        <div className="  w-[100%] ">
          {stores?.map((store,i) => (
            
            <StoreComp 
            key={store._id}
              name={store.name}
              desc={store.description}
              location={store.location}
              image={store.image}
            />
          ))}
        </div>
        <div className="text-gray-400 flex justify-center my-3">
          <AiOutlinePlusCircle size={60} />
        </div>
      </div>
    </div>
  );
};
export default StoreListPage;