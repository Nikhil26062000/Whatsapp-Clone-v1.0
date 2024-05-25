import React, { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const ThreeDot = () => {

    const [open,setIsOpen] = useState(null);
    const handleClose = () =>{
        setIsOpen(null);
    }

    const handleClick = (e) =>{
        setIsOpen(e.currentTarget);
    }
  return (
    <div>
      <MoreVertIcon onClick={handleClick} className="text-gray-400"/>
      <Menu
        className="m-3"
        id="basic-menu"
        anchorEl={open}
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical:'bottom',
            horizontal:'center'
        }}
        transformOrigin={{
            vertical:'top',
            horizontal:'right'
        }}
        
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ThreeDot;
