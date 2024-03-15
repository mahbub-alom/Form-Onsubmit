import React, { useEffect, useRef } from 'react';

const RefForm = () => {

    const nameRef=useRef(null);
    const emailRef=useRef(null);
    const numberRef=useRef(null)


    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(numberRef.current.value)
    }


    return (
        <div className='bg-blue-500 text-center p-5'>
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" name='name'/><br />
            <input ref={emailRef} className='my-5' type="email" name='email'/><br />
            <input ref={numberRef} type="number" name='number'/>
            <br />
            <input className='bg-red-600 p-3 rounded-md text-white m-3 cursor-pointer' type="submit" value="Submit" />
        </form>
    </div>
    );
};

export default RefForm;