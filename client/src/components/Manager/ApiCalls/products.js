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
        const response = await axios.get(`http://localhost:8000/${id}`);
        return response;
    } catch (error) {
        return error;
    }
}
export async function editProduct(productId, productObj) {
    try {
        const response = await axios.put(`http://localhost:8000/${productId}`, ...productObj);
        return response;
    } catch (error) {
        return error;
    }
}
export async function createProduct(productObj) {
    try {
        const response = axios.post("http://localhost:8000/Product", ...productObj)
        return response;
    } catch (error) {
        return error;
    }
};
export async function deleteProduct(id) {
    try {
        const response = axios.delete(`http://localhost:8000/${id}`)
        return response;
    } catch (error) {
        return error;
    }
};