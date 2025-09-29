'use client'
import Link from 'next/link'
import React from "react";
import LogoutButton from './LogoutButton';
import { Button } from '@/components/ui/button';
// import Logout from "./components/Logout"

const Navbar = () => {
  
  return (
    <nav className="flex items-center justify-between w-full px-32 gap-4 text-2xl py-4">
      {/* <Link href={"/"}>Home</Link>
      <Link href={"/dashboard"}>Dashboard</Link> */}
      <div>
        <h1 className="text-white font-semibold">MUZER</h1>
      </div>
      <div className="flex gap-x-4">
        <Button
          // variant={"secondary"}
          className="bg-purple-600 text-white hover:bg-purple-700"
        >
          <Link href={"/auth/signin"}>SignIn</Link>
        </Button>
        <Button className='bg-white text-black hover:bg-white/90'>
          <Link href={"/auth/signup"}>SignUp</Link>
        </Button>
      </div>
      {/* <LogoutButton/> */}
    </nav>
  );
}

export default Navbar
