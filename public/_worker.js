export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Try to fetch the requested asset
    let response = await env.ASSETS.fetch(request);

    // If we get a 404 and it's not a file with an extension, serve index.html
    if (response.status === 404 && !pathname.includes('.')) {
      const indexUrl = new URL(url);
      indexUrl.pathname = '/index.html';
      response = await env.ASSETS.fetch(new Request(indexUrl, request));
    }

    return response;
  },
};
