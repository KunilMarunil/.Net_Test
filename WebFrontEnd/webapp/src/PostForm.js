import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ Judul: title, Deskripsi: description, Konten: content, Image: image});
    setTitle('');
    setContent('');
    setDescription('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <TextField label="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <TextField label="Image" value={image} onChange={(e) => setImage(e.target.value)} />
      <Button type="submit" variant="contained" color="primary">Add Post</Button>
    </form>
  );
};

export default PostForm;
