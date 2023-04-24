import { ReactNode } from "react"
import { NavBar } from "../ui/NavBar";
import Head from "next/head"
import { Box } from "@mui/material";
import { SideBar } from "../ui/SideBar";
interface LayoutProps {
    children:ReactNode
}
export const Layout = ({children}:LayoutProps) => {
  return (
    <>
     <Head>
        <title>Restaurante App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <div style={{
        display: 'flex',

      }}>
      <SideBar/>
      {children}
      </div>
       
    
      
     </>
  )
}
