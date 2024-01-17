import { Post } from '@/lib/models';
import { connectToDb } from '@/lib/utils';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
    const { slug } = params;

    try {
        connectToDb();
        const post = await Post.findOne({ slug });

        return NextResponse.json(post);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ err: 'Failed to fetch post!' }, { status: 500 });
    }
};