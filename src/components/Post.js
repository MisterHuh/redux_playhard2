import React, { Component } from 'react';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ posts: data })
      })
  }

  render() {

    if (this.state.posts) {

      const postItems = this.state.posts.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ));

      return(
        <div>
          <h1>Posts</h1>
          {postItems}
        </div>
      )
    } else {
      return null;
    }
  }

}

export default Posts;
