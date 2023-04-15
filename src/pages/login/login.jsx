import React, { useState } from "react";
import "../../styles/login.scss";
import Logo from "../../components/logo";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="col-12 d-flex justify-content-center align-items-center outer-div">
        <div className="main-div">
          <Logo />
          <div className="login-form">
            <h1>Login</h1>
            <div className="form-floating ">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating password-input">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Password"
              />
              <label htmlFor="floatingInput">Password</label>
              <img
               alt="password"
                className="password-icon"
                onClick={handlePasswordVisibility}
                src="https://img.icons8.com/material-sharp/24/1A1A1A/visible.png"
              />
            </div>
          </div>
          <div className="form-actions">
            <h6>Forgot my password</h6>
            <button>LOGIN</button>
          </div>
          <div className="break-div">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className="login-options">
            <button>
              <img alt="icon"  src="https://img.icons8.com/color/48/null/google-logo.png" />
              Sign in With Google
            </button>
            <button>
              <img alt="icon" src="https://img.icons8.com/color/48/null/microsoft.png" />
              Sign in With Microsoft
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
