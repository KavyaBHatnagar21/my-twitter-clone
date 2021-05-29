import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Tweetbox.css";
import img from "./circle-cropped.png";
import db from "./firebase";

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Kavya Bhatnagar",
      username: "kavya16",
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
          <Avatar src={img} />
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
}

export default Tweetbox;
