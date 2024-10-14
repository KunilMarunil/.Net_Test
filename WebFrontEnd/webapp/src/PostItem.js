import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

const PostItem = ({ post, onUpdatePost, onDeletePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.Judul);

  const handleUpdate = () => {
    onUpdatePost(post.IDPostingan, title);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <TextField value={title} onChange={(e) => setTitle(e.target.value)} />
      ) : (
        <h3>{post.judul}</h3>
      )}
      <p>{post.konten}</p>
      <p>{post.deskripsi}</p>
      <p>{post.image}</p>
      {isEditing ? (
        <Button onClick={handleUpdate} variant="contained">Save</Button>
      ) : (
        <Button onClick={() => setIsEditing(true)} variant="outlined">Edit</Button>
      )}
      <Button onClick={() => onDeletePost(post.IDPostingan)} color="secondary" variant="contained">Delete</Button>
    </div>
  );
};

export default PostItem;
