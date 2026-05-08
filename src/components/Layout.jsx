import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex bg-[#F5F6FA]">
  {/* Fixed Sidebar */}
  <div className="fixed left-0 top-0 h-screen z-50">
    <Sidebar />
  </div>

  {/* Main Content */}
  <div className="flex-1 lg:ml-65">
    {/* Fixed Navbar */}
    <div className="fixed top-0 right-0 left-0 lg:left-65 z-40">
      <Navbar page_name={"Dashboard"}/>
    </div>

    {/* Page Content */}
    <main className="pt-25 p-6">
      <Outlet />
    </main>
  </div>
</div>
  )
}