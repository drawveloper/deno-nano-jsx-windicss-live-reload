import { html } from "../deps.ts";

html`
<style lang="windi">
  .markdown {
    h1,h2,h3 {
      @apply font-bold text-pink-500;
    }
  }

  .markdown a {
    @apply text-green-600 hover:text-emerald-200 visited:text-green-800;
  }
</style>
`

export const Markdown = (props: { markdown: string }) => (
  <div class="markdown" innerHTML={{ __dangerousHtml: props.markdown }}></div>
)
