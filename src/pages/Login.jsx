import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import "./css/Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [loggedin, setloggedIn] = useState(false);
  const navigate = useNavigate();
  const handlechange1 = (e) => {
    setusername(e.target.value);
  };
  const handlechangepass1 = (e) => {
    setpassword(e.target.value);
  };

  const login = () => {
    if (username === "tool" && password === "123") {
      setloggedIn(true);
      navigate("/Home");
    } else {
      alert("Wrong username and password");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handlechange1}
              required
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              onChange={handlechangepass1}
              value={password}
              required
            />
            <FaLock className="icon" />
          </div>

          <div className="forget">
            <label>
              <input type="checkbox" /> remember me
            </label>
            <a href="#"> Forgot password</a>
          </div>
          <button type="submit" onClick={login}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
