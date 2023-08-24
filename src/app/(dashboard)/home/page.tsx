import React from "react";
import { cookies } from "next/headers";
import { getUserFromCookie } from "@/lib/auth";

export default async function Home() {
  const cookieStore = cookies();
  const user = await getUserFromCookie(cookieStore);
  return <div>{`Hello, this is my JWT's value: ${user?.firstName}`}</div>;
}
