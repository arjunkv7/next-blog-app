"use client"

import { Appbar } from "@/components/AppBar";
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();
  return (
    <div>
      <Appbar>
        
      </Appbar>
      {/* {JSON.stringify(session.data?.user)}sfsdfsdf */}
    </div>
  );
}
