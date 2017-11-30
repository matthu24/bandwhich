import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {body:""};
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.artist.id);
  }
  //
  componentWillReceiveProps(newProps) {
    this.setState({body:newProps.comment});
  }

  update(field) {

    return (e) => {
      this.setState({body:e.target.value} );
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSingleComment(this.state,this.props.artist.id);
  }

  render () {

    return (
      <div>
        <div>Leave a comment:</div>

        <form onSubmit={this.handleSubmit}>

          <label>
            <textarea
              className="comment-form"
              onChange={this.update('body')}
              value={this.state.body} />
          </label>

          <input className="comment-submit" type="submit" />
        </form>
      </div>
    );
  }
}

export default CommentForm;
