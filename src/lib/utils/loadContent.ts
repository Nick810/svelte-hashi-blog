// src/lib/utils/loadContent.ts
export async function loadContent<T extends { slug: string; published?: boolean }>(
  type: 'products' | 'blogs' | 'testimonials',
  transform?: (metadata: any, slug: string) => T
): Promise<T[]> {
  const globs = {
    products: import.meta.glob('/src/lib/products/*.md', { eager: true }),
    blogs: import.meta.glob('/src/lib/blogs/*.md', { eager: true }),
    testimonials: import.meta.glob('/src/lib/testimonials/*.md', { eager: true })
  };

  const files = globs[type];
  const items: T[] = [];

  for (const path in files) {
    const file = files[path];
    const slug = path.split('/').at(-1)?.replace('.md', '');

    if (
      file &&
      typeof file === 'object' &&
      'metadata' in file &&
      slug &&
      typeof slug === 'string'
    ) {
      const metadata = file.metadata;
      const item = transform ? transform(metadata, slug) : { ...metadata ?? {}, slug } as T;
      if (item.published) items.push(item);
    }
  }

  items.sort((a, b) => {
    const dateA = new Date((a as any).date).getTime();
    const dateB = new Date((b as any).date).getTime();
    return dateB - dateA;
  });

  return items;
}
