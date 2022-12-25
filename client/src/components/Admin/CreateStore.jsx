import React, { useState, useEffect } from "react";
import { createStore, getStores } from "../ApiCalls/Store";
import FileBase64 from "react-file-base64";
import Nav from "../Navs/MainNav";
import MainPageFooter from "../Footers/MainPageFooter";

export default function CreateStore() {
  const [StoreName, setStoreName] = useState();
  const [StoreMangerName, setStoreMangerName] = useState();
  const [StoreImage, setStoreImage] = useState();
  const [StoreDesc, setStoreDesc] = useState();
  const [StoreDep, setStoreDep] = useState();
  const [StoreLocation, setStoreLocation] = useState();
  const [StoreRatings, setStoreRatings] = useState();
  const [Stores, setStores] = useState([]);
  const [Store, setStore] = useState([]);
  useEffect(() => {
    const getStoresData = async () => {
      const result = await getStores();
      setStores(result.data);
    };
    getStoresData();
  }, []);

  async function createAndLoadPage() {
    let Store = await createStore(
      StoreName,
      StoreMangerName,
      StoreImage.image,
      StoreDesc,
      StoreDep,
      StoreLocation,
      StoreRatings
    );
    setStore([Store.data]);
    console.log(Store);
  }

  console.log(Stores);
  console.log(Store);

  return (
    <div>
      {" "}
      <Nav />
      <div className="w-full m-auto rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto p-12">
        <form className="w-full bg-white shadow-md rounded ">
          <div className="bg-sky-300">
            <p className="mx-auto text-center p-4 text-xl text-white		">
              יצירת חנות
            </p>
          </div>
          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 pb-2 text-sm font-bold mb-2 "
              htmlFor="name"
            >
              שם חנות
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="StoreName"
              onChange={(e) => setStoreName(e.target.value)}
              type="text"
              placeholder="שם חנות"
            />
          </div>
          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 pb-2 text-sm font-bold mb-2 "
              htmlFor="manger name"
            >
              שם מנהל חנות
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="StoreName"
              onChange={(e) => setStoreMangerName(e.target.value)}
              type="text"
              placeholder="שם מנהל חנות"
            />
          </div>
          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 pb-2 text-sm font-bold mb-2 "
              htmlFor="image"
            >
              תמונת חנות
            </label>

            <FileBase64
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              type="file"
              onDone={({ base64 }) =>
                setStoreImage({ ...StoreImage, image: base64 })
              }
              placeholder={"בחירת קובץ"}
            />
          </div>
          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
              htmlFor="description "
            >
              תיאור חנות
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="StoreDesc"
              type="text"
              onChange={(e) => setStoreDesc(e.target.value)}
              placeholder="תיאור חנות"
            />
          </div>
          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
              htmlFor="department"
            >
              מחלקה
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="StoreDep"
              type="text"
              onChange={(e) => setStoreDep(e.target.value)}
              placeholder="מחלקה"
            />
          </div>
          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
              htmlFor="location"
            >
              מיקום
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="StoreLocation"
              type="text"
              onChange={(e) => setStoreLocation(e.target.value)}
              placeholder="מיקום חנות"
            />
          </div>
          <div className="mb-4 p-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2  text-xl pb-2"
              htmlFor="ratings "
            >
              דירוג חנות
            </label>
            <input
              className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
              id="StoreRatings"
              type="text"
              onChange={(e) => setStoreRatings(e.target.value)}
              placeholder="דירוג "
            />
          </div>

          <div className="flex items-center justify-center p-4">
            {Store.length === 0 ? (
              <button
                className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
                type="button"
                onClick={() => createAndLoadPage()}
              >
                צור חנות
              </button>
            ) : (
              <button
                className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
                type="button"
              >
                חנות נוצרה
              </button>
            )}
          </div>
        </form>
      </div>
      <MainPageFooter />
    </div>
  );
}
