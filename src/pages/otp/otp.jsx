import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/otp.scss";
import Logo from "../../components/logo";

export default function Otp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("Verifying OTP: ", data);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="main-div">
          <Logo />
          <div className="headers">
            <h2>Verify Your Identity</h2>
            <h5>
              We've sent a code to your configured two-factor authentication
              method
            </h5>
          </div>
          <div className="otp-code">
            <input
              type="text"
              id="otp-input-1"
              className="otp-input"
              inputMode="numeric"
              maxLength="1"
              {...register("otp1", { required: true })}
            />
            <input
              type="text"
              id="otp-input-2"
              className="otp-input"
              inputMode="numeric"
              maxLength="1"
              {...register("otp2", { required: true })}
            />
            <input
              type="text"
              id="otp-input-3"
              className="otp-input"
              inputMode="numeric"
              maxLength="1"
              {...register("otp3", { required: true })}
            />
            <input
              type="text"
              id="otp-input-4"
              className="otp-input"
              inputMode="numeric"
              maxLength="1"
              {...register("otp4", { required: true })}
            />
            <input
              type="text"
              id="otp-input-5"
              className="otp-input"
              inputMode="numeric"
              maxLength="1"
              {...register("otp5", { required: true })}
            />
            <input
              type="text"
              id="otp-input-6"
              className="otp-input"
              inputMode="numeric"
              maxLength="1"
              {...register("otp6", { required: true })}
            />
          </div>
          {errors.otp1 ||
            errors.otp2 ||
            errors.otp3 ||
            errors.otp4 ||
            errors.otp5 ||
            errors.otp6 ? (
            <p className="error-msg">Please enter all 6 digits</p>
          ) : null}
          <div className="form-actions">
            <h6>Send code again</h6>
            <button onClick={handleSubmit(onSubmit)}>CONTINUE</button>
          </div>
        </div>
      </div>
    </>
  );
}