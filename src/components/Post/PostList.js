import React from 'react';
import Post from './Post';
import './post.css';

class PostList extends React.Component {
  componentDidMount(){
    const { userID } = this.props;
    this.props.onRequestPosts(userID);
    this.props.onRequestUsers();
  }

  render(){
    const { posts } = this.props;
    return(
      <div id="postList" className="col-6">
      {posts.length ? posts.map((pst, i) => {
          return (
            <Post
              key={i}
              post={pst}
            />
          )
        }) : ''
      }
      </div>
    )
  }
}

export default PostList;
