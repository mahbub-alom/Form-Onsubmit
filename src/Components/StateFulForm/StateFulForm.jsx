import React, { useState } from "react";

const StateFulForm = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
        setError("password must be 6 character or longer");
        
    }
    else{
        setError("")
        console.log(name,email,password)
    }
};

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="bg-blue-500 text-center p-5">
      <form onSubmit={handleSubmit}>
        <input onChange={handleName} type="text" name="name" />
        <br />
        <input
          onChange={handleEmail}
          className="my-5"
          type="email"
          name="email"
        />
        <br />
        <input onChange={handlePassword} type="password" name="password" />
        <br />
        <input
          className="bg-red-600 p-3 rounded-md text-white m-3 cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
      <span className="text-white">{error}</span>
    </div>
  );
};

export default StateFulForm;
