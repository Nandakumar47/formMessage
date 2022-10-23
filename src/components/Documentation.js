import React, { useEffect, useState } from "react";
import "./Documentation.css";
import NavBar from "./NavBar";
import { auth } from "../firebase";

function Documentation() {
  const [a, setA] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setA(auth.currentUser.uid);
      }
    });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="documentation">
        <div className="documentation__content">
          <div className="documentation__content_card">
            <p>Your secret key is : {a}</p>
          </div>
          <h5>Usage :</h5>
          <p>Your content should be send in the below object format, key of object should not be changed it should be used as it is.</p>
          <div className="documentation__content_card">
            {"{"}
            <p>
              <span>id:</span> your secret key here,
            </p>
            <p>
              <span>name:</span> name from input,
            </p>
            <p>
              <span>mobile:</span> mobile from input,
            </p>
            <p>
              <span>email:</span> email from input,
            </p>
            <p>
              <span>subject:</span> subject from input,
            </p>
            <p>
              <span>messageContent:</span> messageContent from input
            </p>
            {"}"}
            <p><span>Link to api</span> :"https://salty-plains-73732.herokuapp.com/"</p>
          </div>
          <p>Examples : Using axios</p>
          <div className="documentation__content_card">
            axios .post("https://glacial-shore-17634.herokuapp.com/", Your content in the above mentioned object format)
            .then(function (response) {"{ response can be accessed here}"});
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
