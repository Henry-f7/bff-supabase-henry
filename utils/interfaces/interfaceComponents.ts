import { ButtonHTMLAttributes, ChangeEvent } from "react";

export interface NoteProps {
    title: string;
    content: string;
    onEdit: () => void;
    onDelete: () => void;
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
    onChange: (title: string, content: string, e: React.FormEvent<HTMLFormElement>) => void;
    onCancel: () => void;
}
