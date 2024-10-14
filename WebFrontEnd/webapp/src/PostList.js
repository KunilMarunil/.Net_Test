import React from 'react';
import PostItem from './PostItem';

const PostList = ({ posts, onUpdatePost, onDeletePost }) => (
  <div>
    {posts.map((post) => (
      <PostItem key={post.IDPostingan} post={post} onUpdatePost={onUpdatePost} onDeletePost={onDeletePost} />
    ))}
  </div>
);

export default PostList;