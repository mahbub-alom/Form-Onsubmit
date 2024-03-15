import React from "react";
import MySelf from "../MySelf/MySelf";
import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";

const Father = () => {
  return (
    <div className="text-center border-2 border-blue-600 rounded-md">
      <h1>Father</h1>
      <div className="flex">
        <MySelf></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </div>
    </div>
  );
};

export default Father;
