import * as React from "react";
import Button from "@mui/material/Button";
import { default as MUIMenu } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface MenuProps {
  bgColor?: string;
}

const Menu: FC<MenuProps> = ({ bgColor }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const style = {
    "& .MuiPaper-root": {
      backgroundColor: bgColor,
      color: "white",
      width: "150px",
      "& :hover": {
        fontWeight: "bold",
        backgroundColor: bgColor,
      },
    },
  };

  {
    console.log(bgColor);
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ float: "left" }}
      >
        <FontAwesomeIcon icon={faBars} size="lg" color="white" />
      </Button>
      <MUIMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={style}
      >
        <MenuItem onClick={handleClose} style={{ backgroundColor: bgColor }}>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </MUIMenu>
    </div>
  );
};

export default Menu;
