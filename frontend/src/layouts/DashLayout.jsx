import { Outlet } from "react-router-dom"
import DashHeader from "../components/Dashboard/DashHeader"
import DashFooter from "../components/Dashboard/DashFooter"

function DashLayout() {
  return (
    <>
    <DashHeader/>
    <main>
      <Outlet/>
    </main>

    <DashFooter/>
    
    </>
  )
}

export default DashLayout