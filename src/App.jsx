import React from "react";
import "./App.css";
import ReuseableForm from "./Components/ReuseableForm/ReuseableForm";
import HookForm from './Components/HookForm/HookForm';
import RefForm from './Components/RefForm/RefForm';
import StateFulForm from './Components/StateFulForm/StateFulForm';
import SimpleForm from './Components/SimpleForm/SimpleForm';
import GrandPa from "./ContextApi/Grandpa/Grandpa"

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("sign up", data);
  };
  const handleUpdateSubmit = (data) => {
    console.log("update up", data);
  };

  return (
    <>
      <SimpleForm></SimpleForm>
      <StateFulForm></StateFulForm>
      <RefForm></RefForm>
      <HookForm></HookForm>
      <ReuseableForm formTitle={"Sign Up"} handleSubmit={handleSignUpSubmit}>
        <div className="mb-2">
          <h1>sign up</h1>
          <p>please sign up right now</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Update Profile"}
        handleSubmit={handleUpdateSubmit}
        submitBtnText={"Update"}
      >
        <div className="mb-2">
          <h1>update up</h1>
          <p>Always keep your profile up to date</p>
        </div>
      </ReuseableForm>
      <GrandPa></GrandPa>
    </>
  );
}

export default App;
