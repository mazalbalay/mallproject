import axios from "axios";

export async function getStores() {
  try {
    const response = await axios.get("http://localhost:3001/store");
    return response;
  } catch (error) {
    return error;
  }
}
export async function getStore(id) {
  try {
    const response = await axios.get(`http://localhost:3001/store/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}
export async function editStore(id,name,image,description,department,location,rating) {
  try {
    const response = await axios.put(`http://localhost:3001/store/${id}`, {
        name:name,
        image,
        description:description,
        department:department,
        location:location,
        rating: rating,
    });
    return response;
  } catch (error) {
    return error;
  }
}
export async function createStore(name,image,description,department,location,rating) {
    try {
      const response  =axios.post("http://localhost:3001/store" , {
        name:name,
        image,
        description:description,
        department:department,
        location:location,
        rating: rating,
      })
      return response;
    } catch (error) {
      return error;
    }
  };
  export async function deleteStore(id) {
    try {
      const response  =axios.delete(`http://localhost:3001/store/${id}`)
      return response;
    } catch (error) {
      return error;
    }
  };