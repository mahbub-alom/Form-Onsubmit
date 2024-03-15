import React from 'react';
import useInputState from '../../hook/useInputState';

const HookForm = () => {

    const [name,handleNameChange]=useInputState("towsif")

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name)
    }

    return (
        <div className='bg-blue-500 text-center p-5'>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={handleNameChange} type="text" name='name'/><br />
            <input className='my-5' type="email" name='email'/><br />
            <input type="number" name='number'/>
            <br />
            <input className='bg-red-600 p-3 rounded-md text-white m-3 cursor-pointer' type="submit" value="Submit" />
        </form>
    </div>
    );
};

export default HookForm;