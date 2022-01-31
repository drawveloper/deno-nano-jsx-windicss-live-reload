import { Component } from 'nano'

export class Comments extends Component {
  render() {
    return (
      <ul>
        {this.props.comments.map((comment: string) => {
          return <li>{comment}</li>
        })}
      </ul>
    )
  }
}
