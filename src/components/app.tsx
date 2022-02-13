import { Helmet, renderSSR, html } from "../deps.ts";
import { Layout, State } from "./layout.tsx"

export const render = (state: State) => {
  const ssr = renderSSR(<Layout state={state} />);
  const { body, head, footer } = Helmet.SSR(ssr);

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="/global.css"/>
        <link rel="stylesheet" href="/windi.css"/>
        ${head.join("\n")}
        ${Deno.env.get('ENABLE_LIVE_RELOAD') ? <script src="/livereload.js"></script> : ''}
        
      </head>
      <body class="font-sans bg-gradient-to-r from-emerald-50 to-blue-200">
        ${body}
        ${footer.join("\n")}
      </body>
    </html>`;
};
