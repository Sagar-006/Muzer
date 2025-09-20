"use client";
import {signIn, signOut, useSession} from "next-auth/react";
import { Button } from "./ui/button";

export function Appbar  ()  {
    const session = useSession();
    return (
      <div className="flex justify-between px-20 py-2 border-2 relative z-50">
        <div className="flex justify-between w-full">
          <h1 className="font-semibold text-xl text-white">MUZER</h1>
          <div>
            {session.data?.user && (
              <Button
                variant={"secondary"}
                className=""
                onClick={() => signOut()}
              >
                logout
              </Button>
            )}
            {!session.data?.user && (
              <Button
                variant={"secondary"}
                className="bg-purple-800 text-white hover:bg-purple-900"
                onClick={() => signIn()}
              >
                signIn
              </Button>
            )}
          </div>
        </div>
      </div>
    );
}