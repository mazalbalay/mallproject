import axios from "axios";

export async function getProducts() {
    try {
        const response = await axios.get("http://localhost:8000/Product");
        return response;
    } catch (error) {
        return error;
    }
}
export async function getProduct(id) {
    try {
        const response = await axios.get(`http://localhost:8000/Product/${id}`);
        return response;
    } catch (error) {
        return error;
    }
}
export async function editProduct(id, name, image, description, department, section, brand) {
    try {
        const response = await axios.put(`http://localhost:8000/Product/${id}`, {
            name: name,
            image,
            description: description, 
            department: department,
            section: section,
            brand: brand,
        });
        return response;
    } catch (error) {
        return error;
    }
}
export async function createProduct(name, image, description, department, section, brand) {
    try {
        const response = axios.post("http://localhost:8000/Product", {
            name: name,
            image,
            description: description,
            department: department,
            section: section,
            brand: brand,
        })
        return response;
    } catch (error) {
        return error;
    }
};
export async function deleteProduct(id) {
    try {
        const response = axios.delete(`http://localhost:8000/Product/${id}`)
        return response;
    } catch (error) {
        return error;
    }
};