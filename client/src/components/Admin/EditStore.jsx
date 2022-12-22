import React, { useState, useEffect } from "react";
import { editStore, getStore, deleteStore } from "../ApiCalls/Store";
import { useParams } from "react-router-dom";
import FileBase64 from "react-file-base64";

export default function EditStore() {
  let { depId } = useParams();
  const [Store, setStore] = useState([]);
  const [StoreName, setStoreName] = useState();
  const [StoreImage, setDepImage] = useState();
  const [StoreDesc, setStoreDesc] = useState();
  useEffect(() => {
    const getStoreData = async () => {
      const result = await getStore(depId);
      setStore([result.data]);
    };
    getStoreData();
  }, [depId]);
 async function editAndLoadPage() {
     await editStore(depId, StoreName, StoreImage.image, StoreDesc);
    }
  async function deleteAndLoadPage() {
   await deleteStore(depId);
   window.location.reload();
  }
  console.log(Store);
  return (
    <div className="w-full m-auto rounded m-20 text-center h-screen md:w-4/12 w-10/12 container mx-auto">
      <form className="w-full bg-white shadow-md rounded ">
        <div className="bg-sky-300">
          <p className="mx-auto text-center p-4 text-xl text-white		">עידכון חנות</p>
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
            htmlFor="image"
          >
            תמונת חנות
          </label>

          <FileBase64
            className="shadow appearance-none border rounded text-end py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-10/12"
            type="file"
            onDone={({ base64 }) =>
              setDepImage({ ...StoreImage, image: base64 })
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

        <div className="flex items-center justify-center p-4">
          <button
            className="bg-sky-300 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
            type="button"
            onClick={() => editAndLoadPage()}
          >
            עידכון חנות
          </button>
        </div>
      </form>

      {Store[0] === null ? (
        <div className="bg-red-700  mt-4 text-white font-bold py-2 px-4 rounded ">חנות נמחקה</div>) :
         ( <button
          className="bg-red-700 hover:bg-red-800 mt-4 text-white font-bold py-2 px-4 rounded focus:outline-none  focus:shadow-outline"
          onClick={() => deleteAndLoadPage(depId)}>
         מחק חנות
        </button>)}
    </div>
  );
}
