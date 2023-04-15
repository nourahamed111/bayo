import React from "react";
import '../../styles/login.scss';
import Logo from "../../components/logo";
export default function Login() {
  return (
    <>
      <div class="col-12 d-flex justify-content-center align-items-center outer-div">
        <div class="main-div">
          <Logo/>
          <div className="login-form">
            <h1>Login</h1>
            <div className="form-floating ">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
            
                type="password"
                className="form-control"
                placeholder="Password"
              />
              
              <label className="label" >Password</label>
            </div>
          </div>
          <div className="form-actions">
            <h6>Forget my password</h6>
            <button>LOGIN</button>
          </div>
          <div className="break-div">
            <hr/>
            <p>or</p>
            <hr/>
          </div>
          <div className="login-options">
            <button> <img src="https://img.icons8.com/color/48/null/google-logo.png"/>Sign in With Google</button>
            <button> <img src="https://img.icons8.com/color/48/null/microsoft.png"/>Sign in With Microsoft</button>
          </div>
        </div>
      </div>
    </>
  );
}
