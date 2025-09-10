import type { Product } from "$lib/types";
import { json } from "@sveltejs/kit";

async function getProducts() {
  let products: Product[] = [];

  const paths = import.meta.glob('/src/lib/products/*.md', {
    eager: true
  })

  for (const path in paths) {
    const file = paths[path]
    const slug = path.split('/').at(-1)?.replace('.md', '')
    
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Product, 'slug'>
      const product = { ...metadata, slug } satisfies Product
      product.published && products.push(product)
    }

  }

  products.sort((first, second) => 
    new Date(second.date).getTime() - new Date(first.date).getTime()
  )

  return products;
}

export async function GET() {
  const products = await getProducts();
  return json(products)
}