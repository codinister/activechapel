import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import clientConfig from '@/state/sanity/clientConfig';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  try {
    const data = await clientConfig.fetch(groq`*[_type == 'rescue']{
        title,
        content{
          title, 
          subtitle, 
          body,
          "excerpt": array::join(string::split((pt::text(body)), "")[0..300] , "")+"...",
          "image" : image.asset->url
        }
    }`);

    return NextResponse.json(data);
  } catch (err) {
    console.log(err);
  }
}
