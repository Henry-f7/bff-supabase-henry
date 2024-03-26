'use client';
import React from "react";
import { NoteProps } from "@/utils/interfaces/interfaceComponents";
import ActionButton from "./ActionButton";
import NoteHeader from "./NoteHeader";
import NoteContent from "./NoteContent";

const Note = (props: NoteProps) => {
    const { id, title, content, onEdit, onDelete } = props;

    const handleEditClick = () => {
        onEdit(id);
    };

    const handleDeleteClick = () => {
        onDelete(id);
    };

    return (
        <div className="max-w-sm p-6 bg-amber-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <NoteHeader className="mb-3" title={title} />
            <div className="border-t border-gray-400 py-2">
                <NoteContent className="mb-3" content={content} />
            </div>
            <ActionButton className="text-white bg-blue-700" type="button" title="Edit" onActionButton={handleEditClick} />
            <ActionButton className="text-white bg-red-700" type="button" title="Delete" onActionButton={handleDeleteClick} />
        </div>
    )
}

export default Note;
