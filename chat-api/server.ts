addEventListener("fetch", (event) => {
  const response = new Response("Hello World from Harun's Deno API!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});