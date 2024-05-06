import Header from "@/components/header";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
        <Header />
        <div className="container pt-44">
          <Outlet />
        </div>   
    </div>
  )
}
