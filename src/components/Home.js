import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { ref, onValue } from "firebase/database";

import MessageCard from "./MessageCard";

function Home() {
  const [usersMessages, setUsersMessages] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        onValue(ref(db, `/${auth.currentUser.uid}`), (snapshot) => {
          setUsersMessages([]);
          const data = snapshot.val();
          console.log(Object.values(data.users));
          if (data != null) {
              setUsersMessages([...Object.values(data.users)])
              
          }
          console.log(usersMessages);
        });
      } else {
        navigate("/");
      }
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div>
      <NavBar signOutHandle={handleSignOut} />
      <div className="app">
        <h1>Messages for you</h1>
        <div className="card__outer">
          {usersMessages.length!==0?usersMessages.map(function (item) {
            return (
              <MessageCard
                key={item.uid}
                name={item.name}
                mobile={item.mobile}
                mail={item.email}
                subject={item.subject}
                message={item.messageContent}
              />
            );
          }):""}
        </div>
      </div>
    </div>
  );
}

export default Home;
