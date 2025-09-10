// src/routes/get-blogs/+server.ts
import type { Blog } from '$lib/types';
import { loadContent } from '$lib/utils/loadContent';
import { json } from '@sveltejs/kit';

export async function GET() {
  const blogs = await loadContent<Blog>('blogs');
  return json(blogs);
}
