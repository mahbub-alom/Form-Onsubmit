import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";

export const GiftContext = createContext("");

const Grandpa = () => {
  const [money, setMoney] = useState(1000)
  return (
    <div className="text-center border-2 w-2/3 m-auto mt-5 border-blue-600 rounded-md">
      <h1 className="text-3xl">Grandpa</h1>
      <h2>Has: {money}</h2>
      <GiftContext.Provider value={[money, setMoney]}>
        <div className="flex justify-between">
          <Father></Father>
          <Uncle></Uncle>
          <Aunty></Aunty>
        </div>
      </GiftContext.Provider>
    </div>
  );
};

export default Grandpa;
