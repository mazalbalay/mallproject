import axios from 'axios'


export const singup =(data)=> axios.post('http://localhost:8000/singup' , data)
export const singin =(data)=> axios.post('http://localhost:8000/singin' , data)
export const users =()=> axios.get('http://localhost:8000/user' )

