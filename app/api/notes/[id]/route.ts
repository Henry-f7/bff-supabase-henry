import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

type Context = {
    params: {
        id: number;
    };
};

export async function GET(request: Request, context: Context) {
    const supabase = createClient();

    const { data, error } = await supabase
        .from('notes')
        .select()
        .eq('id', context.params.id);

    if (error) {
        console.error('ERROR======>', error);
        return NextResponse.json({ error: 'Error al obtener las notas', status: 500 });
    }

    return NextResponse.json({ data, status: 200 });
}

export async function PATCH(request: Request, context: Context) {
    const supabase = createClient();

    const { title, content } = await request.json();

    const { data, error } = await supabase
        .from('notes')
        .update({ title: title, content: content })
        .eq('id', context.params.id)
        .select()

    if (error) {
        console.error('ERROR======>', error);
        return NextResponse.json({ error: 'Error al obtener las notas', status: 500 });
    }

    return NextResponse.json({ data, status: 200 });
}

export async function DELETE(request: Request, context: Context) {
    const supabase = createClient();


    const { error } = await supabase
        .from('notes')
        .delete()
        .eq('id', context.params.id)

    if (error) {
        console.error('ERROR======>', error);
        return NextResponse.json({ error: 'Error al obtener las notas', status: 500 });
    }

    return NextResponse.json({ status: 200 });
}

