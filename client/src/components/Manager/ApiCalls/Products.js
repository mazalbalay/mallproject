import axios from "axios";

export async function getProducts() {
    try {
        const response = await axios.get("http://localhost:8000/product");
        return response;
    } catch (error) {
        return error;
    }
}
export async function getProduct(id) {
    try {
        const response = await axios.get(`/product/${id}`);
        return response;
    } catch (error) {
        return error;
    }
}
export async function createProduct(productObj) {
    try {
        const response = axios.post("http://localhost:8000/product", {
            productObj
        })
        return response;
    } catch (error) {
        return error;
    }
};
export async function deleteProduct(id) {
    try {
        const response = axios.delete(`http://localhost:8000/product/${id}`)
        return response;
    } catch (error) {
        return error;
    }
};