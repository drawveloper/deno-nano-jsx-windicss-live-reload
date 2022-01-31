import { Helmet, renderSSR } from "nano";

import { Comments } from "./Comments.tsx";
import { Hello } from "./Hello.tsx";

const comments = [
  "Hey! This is the first comment.",
  "Hi, from another comment!",
];

const App = () => (
  <div>
    <Helmet>
      <title>Nano JSX SSR</title>
      <meta
        name="description"
        content="Server Side Rendered Nano JSX Application"
      />
    </Helmet>

    <Hello />

    <h2>Comments</h2>

    <div id="comments">
      <Comments comments={comments} />
    </div>
  </div>
);

export const renderApp = () => {
  const ssr = renderSSR(<App />);
  const { body, head, footer } = Helmet.SSR(ssr);

  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ${head.join("\n")}
      </head>
      <body>
        ${body}
        ${footer.join("\n")}
      </body>
    </html>`;
};
