import axios from "axios";
import { axiosClient } from "../../config/axios";
import { AddNote, Data } from "@/utils/interfaces/interfaces";

export const fetchAllNotes = async (): Promise<Data[]> => {
    const { data, status, request } = await axiosClient("GET", "/notes");

    return (data ?? []) as Data[];
}

export const createNote = async (note: AddNote): Promise<Data> => {
    const response = await axiosClient("POST", "/notes", note);
    return response.data;
}

export const updateNote = async (id: string, updatedNote: Data): Promise<Data> => {
    const response = await axios.put<Data>(`/notes/${id}`, updatedNote);
    return response.data;
}

export const deleteNote = async (id: string): Promise<void> => {
    await axios.delete(`/notes/${id}`);
}
