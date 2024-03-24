import { createClient } from "@/utils/supabase/server";
import axios from 'axios';
import { cookies, headers } from 'next/headers';
import { User, createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

export const axiosClient = async (method:string, url:string, data:any | null = null) =>{
    const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // console.log("session=====>", session?.access_token);

    try {
        const response = await axios({
          method,
          url: `${process.env.NEXT_API_URL}${url}`,
          headers:{
            Authorization:`Bearer ${session?.access_token}`
          },
          data,
        });
        return response.data;
      } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error; // Lanza el error para que puedas manejarlo en tu componente
      }
} 
