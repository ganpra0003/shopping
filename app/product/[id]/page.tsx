import { products } from '../../../lib/products';
import ProductDetailClient from '../../../components/ProductDetailClient';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return notFound();
  }

  return <ProductDetailClient product={product} />;
}