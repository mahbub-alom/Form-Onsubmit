import React, { useContext } from "react";
import { GiftContext } from "../Grandpa/Grandpa";

const SpecialPerson = () => {
  const [money,setMoney]=useContext(GiftContext)
  return (
    <div className='text-center border-2 border-blue-600 rounded-md'>
      <h1>Special</h1>
      <h2>gift from dada: {money}</h2>
    </div>
  );
};

export default SpecialPerson;
