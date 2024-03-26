'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AuthButton from "@/components/AuthButton";
import { deleteNote, fetchAllNotes } from '../services/notes';
import Note from "@/components/note/Note";
import ActionButton from "@/components/note/ActionButton";
import { Data } from '@/utils/interfaces/interfaces';

enum NoteMode {
  Add,
  Edit,
}

const ProtectedPage = () => {
  const router = useRouter();
  const [dataNotes, setDataNotes] = useState<Data[]>([]);
  const [noteMode, setNoteMode] = useState<NoteMode>();
  const [idNote, setIdNote] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAllNotes().then(data => {
      setDataNotes(data);
    }).finally(() => {
      setLoading(false);
    });
  }, [dataNotes]);

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

  const handleEditClick = (id: string) => {
    setIdNote(id);
    setNoteMode(NoteMode.Edit);
  };

  const handleDeleteClick = (id: string) => {
    deleteNote(id);
  };

  const renderNotes = () => {
    return (
      loading ? (
        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          <p>Loading...</p>
        </div>
      ) : (
        dataNotes.map(result => {
          return <Note
            key={result.id}
            id={result.id.toString()}
            title={result.title}
            content={result.content}
            onEdit={handleEditClick}
            onDelete={handleDeleteClick}
          />
        })
      )
    )
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-5">
      <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm">
            <AuthButton />
          </div>
        </nav>
      </div>

      <div className="container mx-auto px-4">
        <div className="p-3">
          <ActionButton
            className="text-white bg-green-700"
            type="button"
            title="Add Note"
            onActionButton={handleAddClick}
          />
        </div>
        <div className="inline-grid grid-cols-6 gap-4" >
          {renderNotes()}
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
