import axios from 'axios'


export const singup =(data)=> axios.post('http://localhost:8000/singup' , data)
export const singin =(data)=> axios.post('http://localhost:8000/singin' , data)
export const users =()=> axios.get('http://localhost:8000/user' )
export const usersUpdate =(data , id)=> axios.put(`http://localhost:8000/user/${id}` , data )

export const allStores = ()=> axios.get('http://localhost:8000/store' )

