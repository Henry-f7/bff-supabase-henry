'use client';
import React, { useState, useEffect } from 'react';
import InfoNoteForm from '@/components/forms/InfoNoteForm';
import { AddNote } from '@/utils/interfaces/interfaces';
import { useRouter } from "next/navigation";
import { createNote } from '@/app/services/notes';

const AddNoteForm = () => {
    const router = useRouter();

    const handleAddNote = (title: string, content: string, e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title || !content) return;

        createNote({
            title: title,
            content: content
        });
        router.push('/notes', { scroll: false });
    }

    const handleCancel = () => {
        router.push('/notes', { scroll: false });
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <InfoNoteForm onChange={handleAddNote} onCancel={handleCancel} />
        </div>
    );
};

export default AddNoteForm;