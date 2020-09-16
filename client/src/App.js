import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [data, setData] = useState("")

  const register = (e) => {
    e.preventDefault()
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };

  const login = (e) => {
    e.preventDefault()
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };

  const getUser = (e) => {
    e.preventDefault()
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <form>
        <section>
          <h1 className="register-label"><label>Register</label></h1>
          <input placeholder='username' onChange={e => setRegisterUsername(e.target.value)}/>
          <input placeholder='password' onChange={e => setRegisterPassword(e.target.value)}/>
          <button onClick={register}>Submit</button>
        </section>
        <section>
          <h1 className="login-label"><label>Login</label></h1>
          <input placeholder='username' onChange={e => setLoginUsername(e.target.value)}/>
          <input placeholder='password' onChange={e => setLoginPassword(e.target.value)}/>
          <button onClick={login}>Submit</button>
        </section>
        <section>
          <h1 className="getUser-label"><label>Get User</label></h1>
          <button onClick={getUser}>Submit</button>
          {data ? <h1>Welcome Back {data.username}</h1> : null}
        </section>
      </form>
    </div>
  );
}

export default App;
