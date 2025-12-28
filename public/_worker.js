export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);

      // Try to fetch the requested asset
      let response = await env.ASSETS.fetch(request);

      // If we get a 404 and it's not a file with an extension, serve index.html
      if (response.status === 404 && !url.pathname.includes('.')) {
        // Create new request for index.html
        const indexUrl = new URL(url);
        indexUrl.pathname = '/index.html';
        const indexRequest = new Request(indexUrl, {
          method: request.method,
          headers: request.headers,
        });
        response = await env.ASSETS.fetch(indexRequest);
      }

      return response;
    } catch (error) {
      return new Response('Error: ' + error.message, { status: 500 });
    }
  },
};
