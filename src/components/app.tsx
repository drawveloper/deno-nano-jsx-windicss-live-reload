import { Helmet, renderSSR, html } from "../deps.ts";
import { isLiveReloadEnabled } from "../config.ts";
import { Layout, State } from "./layout.tsx"

const lr = isLiveReloadEnabled()

export const render = (state: State) => {
  const ssr = renderSSR(<Layout state={state} />);
  const { body, head, footer } = Helmet.SSR(ssr);

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" href="/global.css"/>
        <link rel="stylesheet" href="/windi.css${lr ? '?' + Date.now() : ''}"/>
        ${head.join("\n")}
        ${lr ? <script src="/livereload.js"></script> : ''}
      </head>
      <body class="font-sans bg-gradient-to-r from-gray-900 to-emerald-900">
        ${body}
        ${footer.join("\n")}
      </body>
    </html>`;
};
