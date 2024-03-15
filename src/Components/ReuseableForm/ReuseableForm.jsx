import React from 'react';

const ReuseableForm = ({formTitle,handleSubmit,submitBtnText="Submit",children}) => {

    const handleLocalSubmit=e=>{
        e.preventDefault()
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            number:e.target.number.value
        }
        handleSubmit(data)
    }


    return (
        <div className='bg-blue-500 text-center p-5'>
            <h2 className='text-3xl'>{children}</h2>
        <form onSubmit={handleLocalSubmit}>
            <input type="text" name='name'/><br />
            <input className='my-5' type="email" name='email'/><br />
            <input type="number" name='number'/>
            <br />
            <input className='bg-red-600 p-3 rounded-md text-white m-3 cursor-pointer' type="submit" value={submitBtnText} />
        </form>
    </div>
    );
};

export default ReuseableForm;