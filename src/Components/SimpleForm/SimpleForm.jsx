import React from 'react';

const SimpleForm = () => {

    const handleSubmit=(e)=>{
        e.preventDefault()
        const target=e.target;
        const name=target.name.value;
        const email=target.email.value;
        const number=target.number.value;
        console.log(name,email,number)
        
    }


    return (
        <div className='bg-blue-500 text-center p-5'>
            <form onSubmit={handleSubmit}>
                <input  type="text" name='name'/><br />
                <input className='my-5' type="email" name='email'/><br />
                <input type="number" name='number'/>
                <br />
                <input className='bg-red-600 p-3 rounded-md text-white m-3 cursor-pointer' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;