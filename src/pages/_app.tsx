import { Outlet } from "react-router-dom";
import BottomNavigationBar from "../app/bottom-navigation-bar";
import TopNavigationBar from "../app/top-navigation-bar";

export default function AppLayout() {
  return (
    <>
      <TopNavigationBar />
      <Outlet />
      <BottomNavigationBar />
    </>
  );
}
