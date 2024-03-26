import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function GET(request: Request, Context: any) {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    let { data: notes, error } = await supabase
        .from('notes')
        .select().order('id', { ascending: false })

    if (error) {
        console.error('ERROR======>', error);
        return NextResponse.json({ error: 'Error al obtener las notas', status: 500 });
    }

    return NextResponse.json({ data: notes, status: 200 });
}

export async function POST(request: Request, Context: any) {
    const supabase = createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser();

    const { title, content } = await request.json()

    const { data: notes, error } = await supabase
        .from('notes')
        .insert([
            { title, content, created_by: user?.email! },
        ])
        .select()

    if (error) {
        console.error('ERROR======>', error);
        return NextResponse.json({ error: 'Error al actualizar datos las notas', status: 500 });
    }

    return NextResponse.json({ data: notes, status: 200 });
}
