import React from 'react'
import { auth } from '../lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import LogoutButton from '../../components/LogoutButton'

const Dashboard = async() => {
  const session =  await auth.api.getSession({
    headers:await headers()
  }) 

  console.log("session",session);

  if(!session){
    redirect('/auth/signin')
  }
  return (
    <div>
      Hello {session.user.name}
      <h1>This is Your Email:{session.user.email}</h1>
      <LogoutButton/>
    </div>
  )
}

export default Dashboard
