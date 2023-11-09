import { component$ } from '@builder.io/qwik';
import { Link, type DocumentHead } from '@builder.io/qwik-city';

export const NotFound = component$(() => {
  return <>
    <h1>Not found</h1>
    <p>Go <Link href="/">home</Link>.</p>
  </>;
});

export const head: DocumentHead = {
  title: 'Not found',
};

export default NotFound;
