import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const storeName = searchParams.get('store');
        const token = process.env.BLOB_READ_WRITE_TOKEN;
        if (!storeName) {
            return NextResponse.json({ error: 'Store name is required' }, { status: 400 });
        }
        if (!token) {
            return NextResponse.json({ error: 'Missing Blob token' }, { status: 500 });
        }
        const { blobs } = await list({ prefix: `${storeName}/`, token });
        // console.log('Fetched Blobs:', blobs); 
        const imageUrls = blobs
            .filter((blob) => blob.size > 0)
            .map((blob) => blob.url);

        return NextResponse.json(imageUrls);
    } catch (error) {
        console.error('Error fetching images:', error);
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
