import React, { useContext } from 'react';
import { GiftContext } from '../Grandpa/Grandpa';

const Aunty = () => {
    const [money,setMoney]=useContext(GiftContext)
    return (
        <div className='text-center border-2 border-blue-600 rounded-md'>
            <h1>Aunty</h1>
            <p> baba: {money}</p>
            <button className='bg-blue-500 text-white p-2' onClick={()=>setMoney(money+50)}>Add money total</button>
        </div>
    );
};

export default Aunty;