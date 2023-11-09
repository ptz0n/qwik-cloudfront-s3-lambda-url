import { component$, Slot } from '@builder.io/qwik';
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale.
    staleWhileRevalidate: 60 * 60 * 24 * 7,

    // Max once every 30 seconds, revalidate on the server to get a
    // fresh version of this page.
    maxAge: 30,
  });
};

export default component$(() => {
  return (
    <>
      <Slot />
    </>
  );
});
