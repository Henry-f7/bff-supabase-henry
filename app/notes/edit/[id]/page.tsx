'use client';
import React, { useEffect, useState } from 'react';
import InfoNoteForm from '@/components/forms/InfoNoteForm';
import { useRouter } from "next/navigation";
import { fetchNotesById, updateNote } from '@/app/services/notes';

const EditNoteForm = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchNotesById(params.id).then(data => {
      setTitle(data[0].title);
      setContent(data[0].content);
    }).finally(() => {
      setLoading(false);
    });
  }, [])

  const handleEditNote = (title: string, content: string, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !content) return;

    updateNote(params.id, {
      title: title,
      content: content
    });

    router.push('/notes', { scroll: false });
  }

  const handleCancel = () => {
    router.push('/notes', { scroll: false });
  }

  return (
    <div className="container mx-auto px-14 py-8">
      {loading ? (
        <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          <p>Loading...</p>
        </div>
      ) : (
        <InfoNoteForm onChange={handleEditNote} onCancel={handleCancel} titleForm={title} contentForm={content} />
      )}
    </div>
  );
};

export default EditNoteForm;
