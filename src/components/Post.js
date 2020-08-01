import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     this.setState({ posts: data })
    //   })
    this.props.fetchPosts();
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

// export default Posts;
export default connect(null, { fetchPosts })(Posts)
