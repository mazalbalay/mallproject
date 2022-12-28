import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { allStores } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import StoreComp from "./StoreComp";
import HeaderStore from ".//HeaderStore";
import MainNav from "../Navs/MainNav";
import MainPageFooter from "../Footers/MainPageFooter";
import CartStore from "../Cart/CartStore";
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
      <HeaderStore name={depName} />
      <div className="md:w-[45%] m-auto md:m-0 w-[90%]  absolute right-0">
        <div className="  w-[100%] ">
          {stores?.map((store,i) => (
            
            <StoreComp 
              name={store.name}
              desc={store.description}
              location={store.location}
              image={store.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default StoreListPage;
