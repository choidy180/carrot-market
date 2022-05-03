import React, { useState } from "react"

export default function Forms(){
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState("");
  const [emailError, setEmailError] = useState("");

  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>)=>{
    const { currentTarget : { value }, } = event;
    setUsername(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>)=>{
    const { currentTarget : { value }, } = event;
    setEmailError("");
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>)=>{
    const { currentTarget : { value }, } = event;
    setPassword(value);
  };
  const onSubmit=(event:React.SyntheticEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if (username === "" || email === "" || password === ""){
      setFormErrors("All fields are required");
    }
    if(!email.includes("@")){

    }
  }
  return(
    <form className="flex flex-col w-full mt-24 space-y-10" onSubmit={onSubmit}>
      <input 
        value={username}
        onChange={onUsernameChange}
        type="text"
        placeholder="Username"
        required
        minLength={4}
      />
      <input 
        value={email}
        onChange={onEmailChange}
        type="text" 
        placeholder="Email" 
        required
        minLength={6}
      />
      <input 
        value={password}
        onChange={onPasswordChange}
        type="password" 
        placeholder="Password" 
        required
        minLength={6}
      />
      <input 
        type="submit"
        value="Create Account" 
      />
    </form>
  )
}