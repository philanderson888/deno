import { serve } from "https://deno.land/std@0.119.0/http/server.ts";
function handler(_req: Request): Response {
  return new Response("Hello, World! from Philip Anderson's Deno Web Server !!!!");
}
console.log("Listening on http://localhost:8000");
serve(handler);