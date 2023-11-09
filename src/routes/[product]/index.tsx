import { component$ } from '@builder.io/qwik';
import { routeLoader$, type DocumentHead, Link } from '@builder.io/qwik-city';

import { NotFound, head as notFoundHead } from '../404'

import products from '../../data/products.json'

export const useProductLoader = routeLoader$(async ({ status, params: { product: slug } }) => {
  const product = products.find((product: Product) => product.slug === slug);

  if (!product) {
    status(404);
    return null;
  }

  // Make it feel slow.
  await new Promise((resolve) => setTimeout(resolve, 500));

  return product as Product;
});

export default component$(() => {
  const { value: product } = useProductLoader();

  if (!product) return <NotFound />;

  return (
    <>
      <h1>{product.title}</h1>
      <p>{product.price} USD</p>

      <Link href='/' title='Go home'>Home</Link>
    </>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const product = resolveValue(useProductLoader);

  if (!product) return { ...notFoundHead };

  return {
    title: `${product.title} - My Awesome Store`,
  };
};

export interface Product {
  slug: string;
  title: string;
  price: number;
}
