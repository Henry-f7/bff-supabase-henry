import { createClient } from "@/utils/supabase/client";
import axios from 'axios';

export const axiosClient = async (method: string, path: string, data: any | null = null) => {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  try {
    const response = await axios({
      method,
      url: `${process.env.NEXT_PUBLIC_API_URL}${path}`,
      headers: {
        Authorization: `Bearer ${session?.access_token}`
      },
      data,
    });
    return response.data;
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw error;
  }
} 
