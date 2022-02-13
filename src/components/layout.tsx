import { Helmet } from "../deps.ts";
import { Comments } from "./comments.tsx";
import { Hi } from "./hi.tsx";

export interface State {
  hello: string
  comments: string[]
  markdown: string
}

export const Layout = (props: { state: State }) => (
  <div class="bg-emerald-50/50 p-4 rounded-lg border-2 border-indigo-800/50">
    <Helmet>
      <title>Nano JSX SSR</title>
      <meta
        name="description"
        content="Server Side Rendered Nano JSX Application"
      />
      <style> {
        `.markdown h1 {
          @apply font-bold text-blue-500;
        }`
      }
      </style>
    </Helmet>

    <Hi hello={props.state.hello} />

    <h2>Comments</h2>

    <div id="comments">
      <Comments comments={props.state.comments} />
    </div>

    <div class="markdown" innerHTML={{__dangerousHtml: props.state.markdown}}>
    </div>
  </div>
);