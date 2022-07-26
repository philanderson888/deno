let resp = await fetch("https://example.com");
console.log(resp.status); // 200
console.log(resp.headers.get("Content-Type")); // "text/html"
console.log(await resp.text()); // "Hello, World!"
resp = await fetch("https://example.com");
await resp.arrayBuffer();
/** or await response2.json(); */
/** or await response2.blob(); */
resp = await fetch("https://example.com");
for await (const chunk of resp.body!) {
  console.log("chunk", chunk);
}
const body = `{"name": "Deno"}`;
resp = await fetch("https://example.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-API-Key": "foobar",
  },
  body,
});
const req = new Request("https://example.com", {
  method: "DELETE",
});
resp = await fetch(req);
const url = "https://example.com";
new Request(url, {
  method: "POST",
  body: new Uint8Array([1, 2, 3]),
});
new Request(url, {
  method: "POST",
  body: new Blob(["Hello, World!"]),
});
new Request(url, {
  method: "POST",
  body: new URLSearchParams({ "foo": "bar" }),
});
const formData = new FormData();
formData.append("name", "Deno");
formData.append("file", new Blob(["Hello, World!"]), "hello.txt");
resp = await fetch("https://example.com", {
  method: "POST",
  body: formData,
});
const bodyStream = new ReadableStream({
  start(controller) {
    controller.enqueue("Hello, World!");
    controller.close();
  },
});
resp = await fetch("https://example.com", {
  method: "POST",
  body: bodyStream,
});