import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { allStores } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import StoreComp from "./StoreComp";
import HeaderStore from ".//HeaderStore";
import MainNav from "../Navs/MainNav";
import MainPageFooter from "../Footers/MainPageFooter";
import BeatLoader from "react-spinners/BeatLoader";

const StoreListPage = () => {
  let { depName } = useParams();
  const navigate = useNavigate();
  const [stores, setStores] = useState();
  const storesFu = async () => {
    const { data } = await allStores();
    const result = data.filter((store) => store.department === depName);
    setStores(result);
  };

  useEffect(() => {
    storesFu();
  }, []);
  console.log(stores);
  return (
    <div>
      <HeaderStore name={depName}/>
      <div className="md:w-[45%] m-auto md:m-0 w-[90%]  absolute right-0">
        {stores ? 
        <div className="  w-[100%] ">
          {stores?.map((store) => (
              <StoreComp
                name={store.name}
                desc={store.description}
                location={store.location}
                image={store.image}
              />
            ))}
        </div>:
        <BeatLoader
        color={'black'}
        loading={true}
        cssOverride={{display:'flex' , justifyContent:'center' , height:'30vh' , alignItems:'center'}}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}
        <div className="text-gray-400 flex justify-center my-3">
          <AiOutlinePlusCircle size={60} />
        </div>
      </div>
    </div>
  );
};

export default StoreListPage;
