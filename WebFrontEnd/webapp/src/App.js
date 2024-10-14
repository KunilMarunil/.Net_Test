import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './PostList';
import PostForm from './PostForm';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
    console.log(posts)
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://localhost:7270/postingan');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const addPost = async (newPost) => {
    try {
      await axios.post('https://localhost:7270/postingan', newPost);
      fetchPosts();
    } catch (error) {
      console.error('Error adding post:', error);
    }
  };

  const updatePost = async (id, updatedTitle) => {
    try {
      await axios.put(`https://localhost:7270/postingan?Judul=${updatedTitle}&IDPostingan=${id}`);
      fetchPosts();
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://localhost:7270/postingan?IDPostingan=${id}`);
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      <h1>Sebuah Web</h1>
      <PostForm onAddPost={addPost} />
      <PostList posts={posts} onUpdatePost={updatePost} onDeletePost={deletePost} />
    </div>
  );
};

export default App;