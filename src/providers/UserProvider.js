import React, { useState, useEffect, createContext } from "react";
import { auth } from "../firebase";

export const UserContext = createContext({ user: null });

function UserProvider(props) {
  const [user, setuser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, photoURL } = user;
        setuser({
          displayName,
          email,
          photoURL,
        });
      } else {
        setuser(null);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}

export default UserProvider;
