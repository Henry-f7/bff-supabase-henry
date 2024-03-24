import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request, Context: any) {
    const supabase = createClient();

    const {
        data: { user },
      } = await supabase.auth.getUser();

    let { data: notes, error } = await supabase
        .from('notes')
        .select()

    if (error) {
        console.error('ERROR======>', error);
        return NextResponse.json({ error: 'Error al obtener las notas', status: 500 });
    }

    return NextResponse.json({ data: notes, status: 200 });
}