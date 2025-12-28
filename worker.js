export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Try to fetch the requested asset
    let response = await env.ASSETS.fetch(request);

    // If we get a 404 and it's not a file with an extension, serve index.html
    // This allows React Router to handle the routing client-side
    if (response.status === 404 && !pathname.match(/\.[a-zA-Z0-9]+$/)) {
      // Serve index.html for SPA routes
      url.pathname = '/index.html';
      response = await env.ASSETS.fetch(url.toString());
    }

    return response;
  },
};
