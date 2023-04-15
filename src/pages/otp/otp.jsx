import React from "react";
import '../../styles/otp.scss';
import Logo from "../../components/logo";
export default function Otp() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="main-div">
          <Logo />
          <div className="headers">
            <h2> Verify Your Identity</h2>
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
              inputmode="numeric"
              maxlength="1"
            />
            <input
              type="text"
              id="otp-input-2"
              className="otp-input"
              inputmode="numeric"
              maxlength="1"
            />
            <input
              type="text"
              id="otp-input-3"
              className="otp-input"
              inputmode="numeric"
              maxlength="1"
            />
            <input
              type="text"
              id="otp-input-4"
              className="otp-input"
              inputmode="numeric"
              maxlength="1"
            />
            <input
              type="text"
              id="otp-input-5"
              className="otp-input"
              inputmode="numeric"
              maxlength="1"
            />
            <input
              type="text"
              id="otp-input-6"
              className="otp-input"
              inputmode="numeric"
              maxlength="1"
            />
          </div>
          <div className="form-actions">
            <h6>Send code again</h6>
            <button>CONTINUE</button>
          </div>
        </div>
      </div>
    </>
  );
}
