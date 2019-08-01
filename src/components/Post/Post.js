import React from 'react';

const Post = ({post}) => {
  const { title, body } = post;
  return(
    <div className="post">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default Post;
