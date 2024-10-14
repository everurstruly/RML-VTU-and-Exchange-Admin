import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

export default function AccountMenuList({
  heading,
  list,
}: {
  heading: string;
  list: { Icon: ({ className }: { className: any }) => any; text: string }[];
}) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      className="border rounded-xl overflow-hidden"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          {heading}
        </ListSubheader>
      }
    >
      {list.map(({ Icon, text }, index) => {
        return (
          <ListItemButton className="!gap-x-3">
            <ListItemIcon
              sx={{ minWidth: "unset" }}
              className="border rounded-lg p-2"
            >
              <Icon className="!size-4" />
            </ListItemIcon>
            <p className="text-sm text-zinc-500 flex-grow w-full">{text}</p>
          </ListItemButton>
        );
      })}
    </List>
  );
}
