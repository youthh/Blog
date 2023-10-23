"use client";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

import styles from "./page.module.css";

export default function Home() {
  const { data, status, update } = useSession();
  console.log(data);
  console.log(status);
  if (status === "unauthenticated") {
    update(data).then((data) => {
      console.log("data: " + data);
    });
  }
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated" && data?.user) {
    return (
      <div>
        <h1> hi {data?.user.name}</h1>
        {data.user?.image && (
          <img src={data.user.image} alt={data.user.name + " photo"} />
        )}
        <button onClick={() => signOut()}>sign out</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>sign in with gooogle</button>
    </div>
  );
}
