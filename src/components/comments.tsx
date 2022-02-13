export const Comments = (props: {comments: string[]}) => (
  <ul>
    {props.comments.map((comment: string) => {
      return <li>{comment}</li>
    })}
  </ul>
)

