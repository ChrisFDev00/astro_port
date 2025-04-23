export async function GET() {
    return new Response(null, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}