import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
    return new Response(null, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};