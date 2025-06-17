import Footer from "@/components/Footer.tsx"
import Header from "@/components/Header.tsx"
import Navbar from "@/components/Navbar.tsx"
import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

const HomeLayout = () => {
  const location=useLocation();

  useEffect(()=>{
    window.scroll(0,0);
  },[location])
  
  return (
    <>
    <Header/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default HomeLayout