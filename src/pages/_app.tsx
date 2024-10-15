import { Outlet } from "react-router-dom";
import BottomNavigationBar from "../app/bottom-navigation-bar";
import TopNavigationBar from "../app/top-navigation-bar";

export default function AppLayout() {
  return (
    <div className="max-w-md mx-auto overflow-hidden relative border">
      <TopNavigationBar />
      <Outlet />
      <BottomNavigationBar />
    </div>
  );
}
