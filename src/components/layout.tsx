/** @jsxImportSource https://esm.sh/nano-jsx@v0.0.29/lib **/
import { Helmet } from "../deps.ts";
import { Comments } from "./comments.tsx";
import { Hi } from "./hi.tsx";
import { Markdown } from "./markdown.tsx";

export interface State {
  hello: string
  comments: string[]
  markdown: string
}

export const Layout = (props: { state: State }) => (
  <div class="bg-emerald-50/75 p-4 rounded-lg border-2 border-indigo-800/50  visited:text-green-600">
    <Helmet>
      <title>Nano JSX SSR</title>
      <meta
        name="description"
        content="Server Side Rendered Nano JSX Application"
      />
    </Helmet>

    <Hi hello={props.state.hello} />

    <h2>Comments</h2>

    <div id="comments">
      <Comments comments={props.state.comments} />
    </div>

    <Markdown markdown={props.state.markdown} />
  </div>
);
