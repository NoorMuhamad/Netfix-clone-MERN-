import "./Register.css";
import { React, useState, useRef } from "react";

const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword]=useState("");
  const emailref = useRef();
  const passwordref = useRef();
  const handleStart = () => {
    setemail(emailref.current.value);
  };
  const handleFinish =()=>{
      setpassword(passwordref.current.value);
  }
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailref} />
            <button className="registerbutton" onClick={handleStart}>
              Get Start
            </button>
          </div>
        ) : (
          <div className="input">
            <input type="password" placeholder="Password" ref={passwordref} />
            <button className="registerbutton" onClick={handleFinish}>
              Start
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
