# Nano JSX with Deno

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
