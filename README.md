# Nano JSX with Deno

Deploy with Deno Deploy:

[![](./public/deno-deploy-button.svg)](https://dash.deno.com/new?url=https://raw.githubusercontent.com/FutureDrivenDev/deno-nano-jsx-windicss-live-reload/main/src/server.ts)

This is the starter I wish I had two weeks ago. The simplest JSX setup you can use for Deno server side rendered apps.

- Deno with Oak server
- WindiCSS
- LiveReload
- Markdown rendering example

### Getting started

Create a `.env` file to add tokens and enable live reload: 

`echo "ENABLE_LIVE_RELOAD=true" > .env`

`npm i`

`npm start`

### Current workaround

I originally designed this to use `concurrently` with deno and windi in dev mode, running in parallel. However, due to https://github.com/windicss/windicss/issues/694 I'm currently calling `windicss` one-off upon server restart. This ensures CSS is correctly generated and takes only ~300ms.

### Note about JSX pragma

`/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/` in every jsx component is unfortunately required to deploy on Deno Deploy — they don't support import maps yet. 
