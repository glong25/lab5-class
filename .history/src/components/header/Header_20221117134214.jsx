import React from "react";
import { BsFilePersonFill } from "react-icons/bs";
import { MdForum } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <BsFilePersonFill fontSize="large" className="header-icon" />
      </IconButton>
    </div>
  );
};

export default Header;
