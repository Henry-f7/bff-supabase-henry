'use client';
import { FormProps } from '@/utils/interfaces/interfaceComponents';
import React, { useEffect, useState } from 'react';
import ActionButton from '../note/ActionButton';

const NoteInputForm = (props: FormProps) => {
  const { onChange, onCancel, titleForm, contentForm } = props;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [touched, setTouched] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChange(title, content, e);
  };

  useEffect(() => {
    if (!title)
      setIsSaveDisabled(false);
  }, [title])

  useEffect(() => {
    if(titleForm){
      setTitle(titleForm);
      setContent(contentForm ?? '');
    }
  }, [])

  const handleCancel = () => {
    onCancel();
  };

  const validateTitleIsEmpty = () => {
    if (touched && !title) {
      return <p className="mt-2 text-sm text-red-600 dark:text-red-500"><span className="font-medium">Title Is Required</span></p>
    }

    return <React.Fragment />
  }

  const handleFocus = () => {
    setTouched(true);
  };

  const disabledButtonClass = () => {
    if (!title)
      return "cursor-not-allowed";

    return "";
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-white">Título</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={handleFocus}
          className="text-gray-950 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        {validateTitleIsEmpty()}
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-white">Contenido</label>
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="text-gray-950 mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        ></textarea>
      </div>
      <div className="flex justify-end gap-4 py-5">
        <ActionButton
          type="button"
          title="Cancelar"
          onActionButton={handleCancel}
          className="py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
        <ActionButton
          disabled={isSaveDisabled}
          type="submit"
          title="Guardar"
          className={`${disabledButtonClass()} py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-lime-600 hover:bg-lime-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500`}
        />
      </div>
    </form>
  );
};

export default NoteInputForm;
