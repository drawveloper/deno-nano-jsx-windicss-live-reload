import { Helmet, renderSSR, html } from "../deps.ts";

import { Comments } from "./comments.tsx";
import { Hi } from "./hi.tsx";

export interface State {
  hello: string
  comments: string[]
}

const App = (props: {state: State}) => (
  <div>
    <Helmet>
      <title>Nano JSX SSR</title>
      <meta
        name="description"
        content="Server Side Rendered Nano JSX Application"
      />
    </Helmet>

    <Hi hello={props.state.hello}/>

    <h2>Comments</h2>

    <div id="comments">
      <Comments comments={props.state.comments} />
    </div>
  </div>
);

export const render = (state: {hello: string, comments: string[]}) => {
  const ssr = renderSSR(<App state={state} />);
  const { body, head, footer } = Helmet.SSR(ssr);

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="stylesheet" url="/windi.css"/>
        ${head.join("\n")}
        ${Deno.env.get('ENABLE_LIVE_RELOAD')? <script src="/livereload.js"></script> : ''}
      </head>
      <body>
        ${body}
        ${footer.join("\n")}
      </body>
    </html>`;
};
