import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { Dropdown } from "flowbite-react";
//import { redirect } from "next/navigation";
import { fetchAllNotes } from '../services/getNotes';
import Note from "@/components/note/Note";
//import React, { useState, useEffect } from 'react';
interface Data {
  id: string,
  created_at: string,
  title: string,
  content: string,
  created_by: string
}

export default async function ProtectedPage() {
  const supabase = createClient();
  //const [data, setData] = useState<Data[]>([]);

  const {
    data: { user },
  } = await supabase.auth.getUser();


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const newData = await fetchAllNotes();
  //       setData(newData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();

  //   return () => {
  //     // Código de limpieza
  //   };
  // }, []);


  // if (!user) {
  //   return redirect("/login");
  // }

  const result = await fetchAllNotes();

  console.log("fecth data", result);

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <DeployButton />
            <AuthButton />
          </div>
        </nav>
      </div>

      <main className="inline-grid grid-cols-6 gap-4">
        <Note title="Note 1" content="Content 1" />
        <Note title="Note 2" content="Content 2" />
        <Note title="Note 3" content="Content 3" />
        <Note title="Note 4" content="Content 4" />
        <Note title="Note 5" content="Content 5" />
        <Note title="Note 6" content="Content 6" />
        <Note title="Note 7" content="Content 7" />
        <Note title="Note 8" content="Content 8" />
      </main>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase

          </a>
        </p>
      </footer>
    </div>
  );
}
