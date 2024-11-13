import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ListItemIcon, ListItemText } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  DeleteOutline,
  DoDisturbOutlined,
  EditOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";
import clsx from "clsx";

const options = [
  {
    label: "Edit",
    color: "action",
    Icon: (props: any) => <EditOutlined {...props} />,
  },
  {
    label: "Deactivate",
    color: "action",
    Icon: (props: any) => <DoDisturbOutlined {...props} />,
  },
  {
    label: "Delete",
    color: "error",
    Icon: (props: any) => <DeleteOutline {...props} />,
  },
];

const ITEM_HEIGHT = 48;

export default function GiftcardListItemActionButton() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "24ch",
            },
          },
        }}
      >
        {options.map(({ Icon, label, color }) => (
          <MenuItem dense key={label} onClick={handleClose}>
            <ListItemIcon>
              <Icon fontSize="small" color={color} />
            </ListItemIcon>
            <span
              className={clsx({
                "text-primary": color === "primary",
                "text-gray-500": color === "action",
                "text-red-800": color === "error",
              })}
            >
              {label}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
