import React, { Component } from 'react';
import { Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPosts, newPost } from '../actions/posts';

class Home extends Component {
  state = {
    title: '',
    body: '',
  }

  componentDidMount() {
    this.props.dispatch(getPosts())

  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({[name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault;
    let post = {
      title: this.state.title,
      body: this.state.body,
      user_id: this.props.coolPerson.id
    }
    this.props.dispatch(newPost(post))
    this.setState({title: '', body: ''})
  }

  render() {
    return (
      <div>
        <Header> Welcome:{this.props.coolPerson.name}</Header>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input name="title"
              onChange={this.handleChange}
              value={this.state.title}
            />
            <input name="body"
              onChange={this.handleChange}
              value={this.state.body}
            />
            <Button color="blue" type="submit">Add Post </Button>
          </form>
        </div>
        <div>
          {this.props.posts.map(p => {
          return(
            <div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <Button color="green"> Edit Post </Button>
              <Button color="red"> Delete Post </Button>
            </div>
          )} )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coolPerson: state.user,
    posts: state.posts,
  }
}

export default connect(mapStateToProps)(Home);
