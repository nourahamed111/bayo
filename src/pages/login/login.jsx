import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/login.scss";
import Logo from "../../components/logo";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordVisibility = () => {
    if (!errors.password) {
      setShowPassword(!showPassword);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="col-12 d-flex justify-content-center align-items-center outer-div">
        <div className="main-div">
          <Logo />
          <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>
            <div className="form-floating">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="floatingInput"
                placeholder="name@example.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              <label htmlFor="floatingInput">Email address</label>
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
            <div className="form-floating password-input">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
                    message:
                      "Password must contain at least 1 number and 1 letter",
                  },
                })}
              />
              <label htmlFor="floatingInput">Password</label>
              {!errors.password && (
                <img
                  alt="password"
                  className="password-icon"
                  onClick={handlePasswordVisibility}
                  src={
                    showPassword
                      ? "https://img.icons8.com/material/24/1A1A1A/invisible.png"
                      : "https://img.icons8.com/material-sharp/24/1A1A1A/visible.png"
                  }
                />
              )}
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>
            <div className="form-actions">
              <h6>Forgot my password</h6>
              <button type="submit">LOGIN</button>
            </div>
          </form>
          <div className="break-div">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className="login-options">
            <button>
              <img
                alt="icon"
                src="https://img.icons8.com/color/48/null/google-logo.png"
              />
              Sign in With Google
            </button>
            <button>
              <img
                alt="icon"
                src="https://img.icons8.com/color/48/null/microsoft.png"
              />
              Sign in With Microsoft
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
