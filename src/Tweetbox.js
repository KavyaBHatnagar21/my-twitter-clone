import { Avatar, Button } from "@material-ui/core";
import React, { useState, useContext } from "react";
import "./Tweetbox.css";
import db from "./firebase";
import { UserContext } from "./providers/UserProvider";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const user = useContext(UserContext);
  if (user) {
    console.log("user is here", user);
    const { photoURL, displayName, email } = user;
    const sendTweet = (e) => {
      e.preventDefault();

      db.collection("posts").add({
        displayName: { displayName },
        username: { email },
        verified: true,
        text: tweetMessage,
        image: tweetImage,
        avatar: "KB",
      });

      setTweetMessage("");
      setTweetImage("");
    };

    return (
      <div className="tweetbox">
        <form>
          <div className="tweetbox__input">
            <Avatar src={photoURL} />
            <input
              placeholder="happy tweeting..."
              type="text"
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
            />
          </div>
          <input
            value={tweetImage}
            onChange={(e) => setTweetImage(e.target.value)}
            placeholder="Upload Image: Enter image url"
            type="text"
            className="tweetbox__imageinput"
          />
          <Button
            onClick={sendTweet}
            type="submit"
            className="tweetbox__tweetbutton"
          >
            Tweet
          </Button>
        </form>
      </div>
    );
  } else {
    return <h3>You need to Login first</h3>;
  }
}

export default Tweetbox;
