import { serve } from 'https://deno.land/std@0.116.0/http/server.ts'

import { renderApp } from './components/App.tsx'

const addr = ':8080'

const handler = (request: Request): Response => {
  if (request.url === 'http://localhost:8080/') {
    const html = renderApp()
    return new Response(html, { headers: { 'Content-Type': 'text/html' } })
  }

  return new Response('404', { status: 404 })
}

console.log(`HTTP webserver running. Access it at: http://localhost:8080/`)
await serve(handler, { addr })
