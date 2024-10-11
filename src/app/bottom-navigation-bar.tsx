import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MenuIcon from "@mui/icons-material/Menu";
import { Paper } from "@mui/material";
import { Forum, Home, LocalMall } from "@mui/icons-material";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(evt, newValue) => {
          setValue(newValue);
        }}
        className="!h-[68px]"
      >
        <BottomNavigationAction
          className="gap-y-1"
          href="/home"
          label="Dashboard"
          icon={<Home />}
        />
        <BottomNavigationAction
          className="gap-y-1"
          href="/orders"
          label="Orders"
          icon={<LocalMall />}
        />
        <BottomNavigationAction
          className="gap-y-1"
          href="/messages"
          label="Messages"
          icon={<Forum />}
        />
        <BottomNavigationAction
          className="gap-y-1"
          label="More"
          icon={<MenuIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
