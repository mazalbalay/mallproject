import axios from "axios";

export async function CreateManager(email, password, confirmPassword, fullName, userName) {
    try {
        const response = axios.post("http://localhost:8000/singupManeger", {
         email:email,
          password:password,
           confirmPassword:confirmPassword,
            fullName:fullName,
             userName :userName

        })
        return response;
    } catch (error) {
        return error;
    }
};