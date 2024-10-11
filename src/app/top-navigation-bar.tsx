import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import CurrentUserCard from "./current-user-card";

export default function TopNavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" className="py-1.5">
        <Toolbar>
          <CurrentUserCard name="John Doe" email="john.doe@example.com" />
          <Button color="primary" variant="contained" className="!ms-auto">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
