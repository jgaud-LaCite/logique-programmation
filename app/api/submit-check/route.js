import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const { code, slug } = await req.json();

        const response = await fetch(process.env.CODE_CHECKER_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': process.env.CODE_CHECKER_API_KEY
            },
            body: JSON.stringify({ code, slug })
        });

        if (!response.ok) {
            return NextResponse.json({ error: 'Error from external API' }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}