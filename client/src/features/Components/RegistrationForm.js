import React, { useState } from "react";
import { FaUserAlt, FaUnlockAlt, FaLock, FaAt } from "react-icons/fa";

function RegistrationForm() {
  const [email, updateEmail] = useState("");
  const [mode, updateMode] = useState("");
  const emailOnChange = (e) => {
    updateEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validation (actually not really necessary)
    if (email) {
      if (email.includes("@") && email.length > 3 && domainValid(email)) {
        alert(
          "Thank you for your message, we will get back to you as soon as possible!"
        );
        // TODO call backend rest api
        // check which mode
        // login
        // register

      } else {
        alert("Data invalid, please check your data");
      }
    } else {
      alert("Full Name, email and message needs to be filled out!");
    }
    e.target.reset();

  };

  const domainValid = (email) => {
    const domain = email.split("@")[1];
    if (domain.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const handleOnSignUpClick = () => {
    updateMode("sign-up-mode");
  };

  const handleOnSignInClick = () => {
    updateMode("");
  };

  return (
    <div>
      <div className="Title-Container">
        <h1 className="Title-Contact">Registration</h1>
      </div>
      <div className="login-form-container">
        <div className={`container-login ${mode}`}>
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <h2 className="title-reg">Sign in</h2>
                <div className="input-field">
                  <FaUserAlt className="regis-icon" size={24} />
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="input-field">
                  <FaLock className="regis-icon" size={24} />

                  <input type="password" placeholder="Password" required />
                </div>
                <input
                  type="submit"
                  defaultValue="Login"
                  className="submit-btn"
                  onSubmit={onSubmit}
                />
              </form>
              <form action="#" className="sign-up-form">
                <h2 className="title-reg">Sign up</h2>
                <div className="input-field">
                  <FaUserAlt className="regis-icon" size={24} />
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="input-field">
                  <FaAt className="regis-icon" size={24} />
                  <input type="email" placeholder="Email" required onChange={emailOnChange}/>
                </div>
                <div className="input-field">
                  <FaLock className="regis-icon" size={24} />
                  <input type="password" placeholder="Password" required />
                </div>
                <div className="input-field">
                  <FaUnlockAlt className="regis-icon" size={24} />
                  <input
                    type="password"
                    placeholder="Confirm the Password"
                    required
                  />
                </div>
                <input
                  type="submit"
                  className="submit-btn"
                  defaultValue="Sign up"
                  onSubmit={onSubmit}
                />
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>New here ?</h3>
                <p>Became a part of our BAM Cat Community!</p>
                <button
                  className="submit-btn transparent"
                  id="sign-up-btn"
                  onClick={handleOnSignUpClick}
                >
                  Sign up
                </button>
              </div>
              <div></div>
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>One of us ?</h3>
                <p>Sign in BAM Cat Community.</p>
                <button
                  className="submit-btn transparent"
                  id="sign-in-btn"
                  onClick={handleOnSignInClick}
                >
                  Sign in
                </button>
              </div>
              <div className="gradient"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
