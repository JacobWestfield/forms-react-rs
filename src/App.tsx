//ignore TS
import React from "react";
import "./App.css";
import Signin from "./components/Signin.tsx";
import Signup from "./components/Signup.tsx";

interface SigninData {
  email: string;
  password: string;
}

interface SignupData {
  name: string;
  nickname: string;
  email: string;
  sex: string;
  password: string;
}

function App() {
  const handleSubmit = (data: SigninData | SignupData) => {
    console.log(data);
    //some logic...
  };
  return (
    <div className="App">
      <Signin onSubmit={handleSubmit} />
      <Signup onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
