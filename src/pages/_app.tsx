import { Outlet } from "react-router-dom";
import BottomNavigationBar from "@/components/bottom-navigation-bar";
import TopNavigationBar from "@/components/top-navigation-bar";

export default function AppLayout() {
  return (
    <div className="max-w-md mx-auto overflow-hidden relative border">
      <TopNavigationBar />
      <Outlet />
      <BottomNavigationBar />
    </div>
  );
}
