'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DeployButton from "@/components/DeployButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/client";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import { fetchAllNotes } from '../services/notes';
import Note from "@/components/note/Note";
import ActionButton from "@/components/note/ActionButton";
import { ActionResult } from 'next/dist/server/app-render/types';
interface Data {
  id: number,
  created_at: string,
  title: string,
  content: string,
  created_by: string
}

enum NoteMode {
  Add,
  Edit,
}

const ProtectedPage = () => {
  const router = useRouter();
  const [dataNotes, setDataNotes] = useState<Data[]>([]);
  const [noteMode, setNoteMode] = useState<NoteMode>();
  const [idNote, setIdNote] = useState<string>("");

  useEffect(() => {
    fetchAllNotes().then(data => {
      setDataNotes(data);
    });
  }, []);

  useEffect(() => {
    if (noteMode == NoteMode.Add) {
      router.push(`notes/add`);
    }
    if (noteMode == NoteMode.Edit) {
      router.push(`notes/edit/${idNote}`);
    }
  }, [noteMode]);

  const handleAddClick = () => {
    setNoteMode(NoteMode.Add);
  };

  const handleEditClick = () => {
    setNoteMode(NoteMode.Edit);
  };

  const handleDeleteClick = () => {
    console.log("Eliminar");
  };

  return (
    <div className="flex-1 w-full flex flex-col gap-5 px-3">
      {/* <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <DeployButton />
            <AuthButton />
          </div>
        </nav>
      </div> */}

      <div className="container mx-auto px-4">
        <div className="p-3">
          <ActionButton
            className="text-white bg-green-700"
            type="button"
            title="Add Note"
            onActionButton={handleAddClick}
          />
        </div>
        <div className="inline-grid grid-cols-6 gap-4 border-double border-4 border-sky-500 rounded p-5" >
          {
            dataNotes.map(result => {
              return <Note key={result.id} title={result.title} content={result.content} onEdit={handleEditClick} onDelete={handleDeleteClick} />
            })
          }
        </div>
      </div>

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

export default ProtectedPage;
