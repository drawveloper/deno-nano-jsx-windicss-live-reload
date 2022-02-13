export const Comments = (props: { comments: string[] }) => (
  <ul>
    {props.comments.map((comment: string) => {
      return <li class="font-serif">{comment}</li>
    })}
  </ul>
)

