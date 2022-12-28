import axios from 'axios'


export const singup =(data)=> axios.post('https://mall-roq8.onrender.com/singup' , data)
export const singin =(data)=> axios.post('https://mall-roq8.onrender.com/singin' , data)
export const users =()=> axios.get('https://mall-roq8.onrender.com/user' )
export const usersUpdate =(data , id)=> axios.put(`https://mall-roq8.onrender.com/user/${id}` , data )

export const allStores = ()=> axios.get('https://mall-roq8.onrender.com/store' )
// export const forgotPassword = (data)=> axios.post('https://mall-roq8.onrender.com/forgot-password' , data)
export const forgotPassword = (data)=> axios.post('http://localhost:8000/forgot-password' , data)

