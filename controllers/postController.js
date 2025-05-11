const Post = require('../models/postModel');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.getAllPosts();
  res.json(posts);
};

exports.getPostById = async (req, res) => {
  const post = await Post.getPostById(req.params.id);
  if (!post) return res.status(404).json({ message: 'Not found' });
  res.json(post);
};

exports.createPost = async (req, res) => {
  console.log('req.body:', req.body);
  const { title, content, author } = req.body;
  const post = await Post.createPost(title, content, author);
  res.status(201).json(post);
};

exports.updatePost = async (req, res) => {
  const { title, content, author } = req.body;
  const post = await Post.updatePost(req.params.id, title, content, author);
  if (!post) return res.status(404).json({ message: 'Not found' });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.deletePost(req.params.id);
  res.json({ message: 'Post has been deleted.' });
};