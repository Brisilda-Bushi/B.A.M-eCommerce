import React, { useState } from "react";
import { FaUserAlt, FaAt } from "react-icons/fa";

function FormPage() {
  const [email, updateEmail] = useState("");
  const emailOnChange = (e) => {
    updateEmail(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email) {
      if (email.includes("@") && email.length > 3 && domainValid(email)) {
        alert(
          "Thank you for your message, we will get back to you as soon as possible!"
        );
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

  return (
    <div>
      <div className="Title-Container">
        <h1 className="Title-Contact">feedback</h1>
      </div>
      <div className="login-form-container">
        <div className="container-login">
          <div className="forms-container">
            <div className="signin-signup">
              <form action="#" className="sign-in-form">
                <h2 className="title-reg">Contact Us</h2>
                <div className="input-field">
                  <FaUserAlt className="regis-icon" size={24} />
                  <input type="text" placeholder="Username" required />
                </div>
                <div className="input-field">
                  <FaAt className="regis-icon" size={24} />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    onChange={emailOnChange}
                  />
                </div>
                <textarea
                  className="input-message"
                  cols={30}
                  rows={10}
                  placeholder="Message....."
                  defaultValue={""}
                  minLength="10"
                  maxLength="150"
                />
                <input
                  type="submit"
                  defaultValue="Login"
                  className="submit-btn"
                  onSubmit={onSubmit}
                />
              </form>
            </div>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormPage;
