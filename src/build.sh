#!/bin/bash
curl -fsSL https://deno.land/x/install/install.sh | sh
export PATH="/opt/buildhome/.deno/bin:$PATH"
deno --version
deno run ./helloWorldDenoWebServerRuntime.ts
exit 0