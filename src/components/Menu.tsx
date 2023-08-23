import * as React from "react";
import Button from "@mui/material/Button";
import { default as MUIMenu } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";

interface MenuProps {
  bgColor: string;
  items: any[];
  setIndex: any;
  showStory: any;
  setBgColor: any;
  playSong: any;
  song: any;
}

const Menu: FC<MenuProps> = ({
  bgColor,
  items,
  setIndex,
  showStory,
  setBgColor,
  playSong,
  song,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [clickedMenu, setClickedMenu] = React.useState(false);
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
      width: "180px",
      marginLeft: "-15px",
      "& :hover": {
        fontWeight: "bold",
        backgroundColor: bgColor,
      },
    },
  };

  const handleItemClick = (index: number) => {
    showStory();
    setBgColor("#282c34");
    setIndex(items[index]);
    !clickedMenu && playSong(song);
    setClickedMenu(true);
    handleClose();
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ float: "left", marginLeft: "4px" }}
        disableRipple
      >
        <FontAwesomeIcon icon={faBars} color="white" fontSize={"2rem"} />
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
        <MenuItem onClick={() => handleItemClick(0)}>Beginnings</MenuItem>
        <MenuItem onClick={() => handleItemClick(1)}>* Shopping List</MenuItem>
        <MenuItem onClick={() => handleItemClick(2)}>Stone Cypher</MenuItem>
        <MenuItem onClick={() => handleItemClick(3)}>Captcha</MenuItem>
        <MenuItem onClick={() => handleItemClick(4)}>* Riddles Three</MenuItem>
        <MenuItem onClick={() => handleItemClick(5)}>Cookie Clicker</MenuItem>
        <MenuItem onClick={() => handleItemClick(6)}>
          * Cookie Clicker 2.0
        </MenuItem>
        <MenuItem onClick={() => handleItemClick(7)}>
          Final Combination
        </MenuItem>
        <MenuItem onClick={() => handleItemClick(8)}>The End</MenuItem>
      </MUIMenu>
    </div>
  );
};

export default Menu;
