import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import GroupIcon from "@mui/icons-material/Group";
export default function Footer() {
  return (
    <div className="flex items-center w-full justify-between px-3 bg-black py-1 text-sm">
      <span className="flex flex-col items-center text-white">
        <HomeIcon cl />
        <p>Home</p>
      </span>
      <span className="flex flex-col items-center text-white">
        <LeaderboardOutlinedIcon />
        <p>Leaderboard</p>
      </span>
      <span className="flex flex-col items-center text-white">
        <GroupIcon />
        <p>Frends</p>
      </span>
    </div>
  );
}
