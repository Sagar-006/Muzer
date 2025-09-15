"use client";
import {signIn, signOut, useSession} from "next-auth/react";

export function APPbar  ()  {
    const session = useSession();
    return (
      <div>
        <div className="flex justify-between">
          <div>Muzi</div>
          <div>
            {session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={() => signOut()}>logOut</button>}
            {!session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={() => signIn()}>signIn</button> }
          </div>
        </div>
      </div>
    );
}