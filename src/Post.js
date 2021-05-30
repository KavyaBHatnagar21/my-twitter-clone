import { Avatar } from "@material-ui/core";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Public,
  Repeat,
  VerifiedUser,
} from "@material-ui/icons";
import React, { forwardRef } from "react";
import "./Post.css";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headertext">
              <h3>
                {displayName}
                {""}
                <span className="post__headerspecial">
                  {verified && <VerifiedUser className="post__badge" />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerdescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutline fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Public fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
