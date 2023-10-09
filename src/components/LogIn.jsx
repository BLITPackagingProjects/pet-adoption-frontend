import React, { useRef } from 'react'
import axios from 'axios'
import { Redirect, Router, Link } from 'react-router-dom';
import Pets from './Pets';

const LogIn = (props) => {


  const userRef = useRef();
  const passRef = useRef();

const handleSubmit = async (e) =>{
  e.preventDefault();
  console.log(userRef,passRef);

  const response = await axios.post('http://localhost:8080/auth/signin', {
    usernameOrEmail: userRef.current.value,
      password: passRef.current.value,
    })
    .then((res)=>{

      localStorage.setItem('token',res.data.password)
     
    })
  props.history.replace('/pets')

}
  return (
    <>

      <form action="POST" onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input id='username' ref={userRef} />
        <label htmlFor='pass'>Password</label>
        <input id='pass' ref={passRef}/>
        
        <button>Log in
        </button>
        
      </form>
      
   
    </>
  )
}

export default LogIn