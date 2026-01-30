import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import clientConfig from '@/state/sanity/clientConfig';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const data = await clientConfig.fetch(groq`*[_type == 'nurture']{
        title,
        content[]{
          body,
          "image" : image.asset->url
        }
    }`);

    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
