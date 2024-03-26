'use client';
import React from "react";
import { ButtonProps } from "@/utils/interfaces/interfaceComponents";

const ActionButton = (props: ButtonProps) => {
    const { title, onActionButton, className } = props;

    const handleClick = () => {
        onActionButton && onActionButton();
    }

    return (
        <button
            className={`${className} hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800`}
            onClick={handleClick}
        >
            {title}
        </button>
    );
}

export default ActionButton;