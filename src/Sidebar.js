import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MessageIcon from "@material-ui/icons/Message";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* twitter icon */}
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption text="Explore" Icon={SearchIcon} />
      <SidebarOption text="Notification" Icon={NotificationsIcon} />
      <SidebarOption text="Messages" Icon={MessageIcon} />
      <SidebarOption text="Profile" Icon={PersonOutlineOutlinedIcon} />
      <SidebarOption text="More" Icon={MoreHorizOutlinedIcon} />
      {/* tweet button */}
      <Button variant="outlined" className="sidebar__tweet">
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
