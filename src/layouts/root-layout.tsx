import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
        <Header />
        <div className="container sm:pt-44 pt-32">
          <Outlet />
        </div>   
    </div>
  )
}
