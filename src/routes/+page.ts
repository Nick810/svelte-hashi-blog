import type { Product, Blog } from "$lib/types"

export async function load({ fetch }) {
    const [productRes, blogRes] = await Promise.all([
      fetch('/get-products'),
      fetch('/get-blogs')
    ]);

    if (!productRes.ok) {
      const errorText = await productRes.text();
      throw new Error(`Product fetch failed: ${productRes.status} - ${errorText}`);
    }

    if (!blogRes.ok) {
      const errorText = await blogRes.text();
      throw new Error(`Blog fetch failed: ${blogRes.status} - ${errorText}`);
    }

    const products: Product[] = await productRes.json();
    const blogs: Blog[] = await blogRes.json();

    return { products, blogs };
}