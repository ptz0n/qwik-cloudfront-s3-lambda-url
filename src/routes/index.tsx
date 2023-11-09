import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

import products from './../data/products.json';

export default component$(() => {
  return <>
    <h1>Products</h1>

    <ul>
      {
        products.map((product) => {
          return <li key={product.slug}>
            <Link href={`/${product.slug}`}>{product.title}</Link>
          </li>;
        })
      }
      <li>
        <Link href='/non-existing'>Non-existing product</Link>
      </li>
    </ul>
  </>;
});

export const head: DocumentHead = {
  title: 'My Awesome Store'
};
