'use client'
import React from 'react'
import { authClient } from '../app/lib/auth-client';
import { redirect, useRouter } from 'next/navigation';

const LogoutButton = () => {
    const {data:session,error} = authClient.useSession();
    console.log("this is data",session) 
    const router = useRouter();
    async function handleLogIn() {
        redirect('/auth/signin')
    }
    async function handleLogout() {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/auth/signin"); // redirect to login page
            },
          },
        });
    } 

  return session === null ? (
    <button onClick={handleLogIn}>Login</button>
  ) : (
    <button onClick={handleLogout}>LOGOUT</button>
  );
}

export default LogoutButton
