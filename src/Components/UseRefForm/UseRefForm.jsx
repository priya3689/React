import React, { useRef } from 'react'


const UseRefForm = () => {
    const nameRef=useRef(null);
    console.log(nameRef.current&&nameRef.current);
    const emailRef=useRef(null);
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        const Fname= nameRef.current.value;
        const email= emailRef.current.value;
        console.log(Fname,email);
 
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={emailRef} type="text" placeholder=" Email"/>
        <button type="submit" >Submit</button>

        </form>
        {/* <div>{nameRef.current.value}-{emailRef.current.value}</div> */}
        </div>
  )
}

export default UseRefForm