"use client";

import ProductCard from './ProductCard';
import { Product } from '../lib/products';

export default function ProductGrid({ products, showRank }: { products: Product[], showRank?: boolean }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-x-2 gap-y-8">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} rank={showRank ? index + 1 : undefined} />
      ))}
    </div>
  );
}