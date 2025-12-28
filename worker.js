export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Try to fetch the requested asset
    let response = await env.ASSETS.fetch(request);

    // If we get a 404 and it's not a file with an extension, serve index.html
    // This allows React Router to handle the routing client-side
    if (response.status === 404) {
      // Check if this looks like a page route (no file extension)
      const hasExtension = /\.[a-zA-Z0-9]+$/.test(pathname);

      if (!hasExtension) {
        // Serve index.html for SPA routes
        const indexRequest = new Request(new URL('/index.html', url), request);
        response = await env.ASSETS.fetch(indexRequest);
      }
    }

    return response;
  },
};
