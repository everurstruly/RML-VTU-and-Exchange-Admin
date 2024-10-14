import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { WarningAmberOutlined } from "@mui/icons-material";

export default function OrderRejectionReasonsList() {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            disablePadding
            secondaryAction={
              <Checkbox
                edge="end"
                size="medium"
                onChange={handleToggle(value)}
                checked={checked.includes(value)}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            sx={{ ".MuiButtonBase-root": { paddingLeft: 0 } }}
          >
            <ListItemButton>
              <div className="border p-2 rounded-md">
                <WarningAmberOutlined className="!size-6 text-zinc-500" />
              </div>
              <ListItemText
                id={labelId}
                primary={`Unclear images ${value + 1}`}
                classes={{ primary: "!ms-2.5 !text-sm" }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
