import axios from "axios";

export async function getDepartments() {
  try {
    const response = await axios.get("http://localhost:3001/department");
    return response;
  } catch (error) {
    return error;
  }
}
export async function getDepartment(id) {
  try {
    const response = await axios.get(`http://localhost:3001/department/${id}`);
    return response;
  } catch (error) {
    return error;
  }
}
export async function editDepartment(id,name,image,description) {
  try {
    const response = await axios.put(`http://localhost:3001/department/${id}`, {
      name:name,
      image ,
      description:description,
    });
    return response;
  } catch (error) {
    return error;
  }
}
export async function createDepartment(name,image,description) {
    try {
      const response  =axios.post("http://localhost:3001/department" , {
        name:name,
        image ,
        description:description,
      })
      return response;
    } catch (error) {
      return error;
    }
  };
  export async function deleteDepartment(id) {
    try {
      const response  =axios.delete(`http://localhost:3001/department/${id}`)
      return response;
    } catch (error) {
      return error;
    }
  };