'use client';
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { UserResponse } from "@supabase/supabase-js";

const AuthButton = () => {
  const supabase = createClient();
  const [user, setUser] = useState<UserResponse>();

  useEffect(() => {
    supabase.auth.getUser().then(data => {
      setUser(data);
    });
  }, [])

  const signOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user?.data.user ? (
    <div className="flex items-center gap-4">
      Hey, {user?.data.user.email}!
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover ">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover bg-blue-500"
    >
      Login
    </Link>
  );
}

export default AuthButton;