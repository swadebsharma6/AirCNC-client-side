import { Outlet } from "react-router-dom"
import Navbar from "../components/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20 pb-20">
      <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Main
