import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Paper } from "@mui/material";
import {
  AccountCircleOutlined,
  DashboardOutlined,
  ForumOutlined,
  Storefront,
} from "@mui/icons-material";

export default function SimpleBottomNavigation() {
  // const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100 }}
      className="max-w-md mx-auto border-t"
    >
      <BottomNavigation
        showLabels
        // value={value}
        // onChange={(evt, newValue) => {
        //   setValue(newValue);
        // }}
        className="!h-[72px]"
      >
        <BottomNavigationAction
          // LinkComponent={NavLink}
          className="gap-y-1 !justify-end !pb-2.5"
          href="/dashboard"
          label="Dashboard"
          icon={<DashboardOutlined className="!size-6" />}
        />
        <BottomNavigationAction
          // LinkComponent={NavLink}
          className="gap-y-1 !justify-end !pb-2.5"
          href="/orders"
          label="Orders"
          icon={<Storefront className="!size-6" />}
        />
        <BottomNavigationAction
          // LinkComponent={NavLink}
          className="gap-y-1 !justify-end !pb-2.5"
          href="/messages"
          label="Messages"
          icon={<ForumOutlined className="!size-6" />}
        />
        <BottomNavigationAction
          // LinkComponent={NavLink}
          className="gap-y-1 !justify-end !pb-2.5"
          href="/me"
          label="You"
          icon={<AccountCircleOutlined className="!size-6" />}
        />
      </BottomNavigation>
    </Paper>
  );
}
