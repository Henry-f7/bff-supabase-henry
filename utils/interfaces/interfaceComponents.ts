import { ButtonHTMLAttributes, ChangeEvent } from "react";

export interface NoteProps {
    id: string
    title: string;
    content: string;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}

export interface NoteHeaderProps {
    title: string;
    className: string;
}

export interface NoteContentProps {
    content: string;
    className: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    className?: string | "";
    onActionButton?: () => void;
}

export interface FormProps {
    titleForm?: string;
    contentForm?: string;
    onChange: (title: string, content: string, e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}
