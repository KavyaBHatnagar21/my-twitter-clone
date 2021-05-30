import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import icon from "./google.png";
import { UserContext } from "./providers/UserProvider";

function Login() {
  const user = useContext(UserContext);

  const logIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("result is: ", res.user);
        console.log("name is: ", res.user.displayName);
      })
      .catch((err) => alert(err.message));
  };

  const logOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("logged out");
        console.log("user after logging out", user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="login">
      {user ? (
        <div className="login__container">
          <Button onClick={logOut} className="login__button">
            Logout
          </Button>
        </div>
      ) : (
        <div className="login__container">
          <img src={icon} alt="" height="30px" />
          <Button onClick={logIn} className="login__button">
            Login with Google
          </Button>
        </div>
      )}
    </div>
  );
}

export default Login;
