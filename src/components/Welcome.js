import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { set, ref } from "firebase/database";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerINfo, setRegisterInfo] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/home");
      }
    });
  }, []);
  const handleRegisterInput = (e) => {
    setRegisterInfo({ ...registerINfo, [e.target.name]: e.target.value });
  };
  const handleRegister = () => {
    if (registerINfo.email !== registerINfo.confirmEmail) {
      alert("Email doesn't match");
      return;
    }
    if (registerINfo.password !== registerINfo.confirmPassword) {
      alert("Password doesn't match");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerINfo.email,
      registerINfo.password
    )
      .then(() => {
        set(ref(db, `/${auth.currentUser.uid}`), {
          userID: auth.currentUser.uid,
        });
        navigate("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleEmailCHange = (e) => {
    setEmail(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSignIn = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        navigate("/home");
        // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div
      className="signInOut"
    >
      <div >
        {isRegistering ? (
          <div className="signIn">
            <h1>Sign Up</h1>
            <input
              type="email"
              onChange={handleRegisterInput}
              placeholder="email"
              name="email"
              value={registerINfo.email}
            />
            <br />
            <input
              type="email"
              onChange={handleRegisterInput}
              placeholder="confirm email"
              name="confirmEmail"
              value={registerINfo.confirmEmail}
            />
            <br />
            <input
              type="password"
              onChange={handleRegisterInput}
              placeholder="password"
              name="password"
              value={registerINfo.password}
            />
            <br />
            <input
              type="password"
              onChange={handleRegisterInput}
              placeholder="confirm password"
              name="confirmPassword"
              value={registerINfo.confirmPassword}
            />
            <br />
            <button onClick={handleRegister}>Register</button>
            <button
              onClick={() => {
                setIsRegistering(false);
              }}
            >
              Go back
            </button>
          </div>
        ) : (
          <div className="signIn">
            <h1>Sign In</h1>
            <input
              type="email"
              placeholder="email"
              onChange={handleEmailCHange}
              value={email}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={passwordChange}
              value={password}
            />
            <br />
            <button onClick={handleSignIn}>SignIn</button>
            <button
              onClick={() => {
                setIsRegistering(true);
              }}
            >
              Create an account
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
