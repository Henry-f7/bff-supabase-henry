import axios from "axios";
import { axiosClient } from "../../config/axios";

interface Data {
    id: number,
    created_at: string,
    title: string,
    content: string,
    created_by: string
}

export const fetchAllNotes = async (): Promise<Data[]> => {
    const { data, status, request } = await axiosClient("GET", "/notes");

    console.log("data=====>", data);
    return (data?.data ?? []) as Data[];

}
