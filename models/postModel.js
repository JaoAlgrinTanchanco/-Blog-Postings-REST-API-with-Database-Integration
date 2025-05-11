const pool = require('../config/db');

exports.getAllPosts = async () => {
  const [rows] = await pool.query('SELECT * FROM posts');
  return rows;
};

exports.getPostById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [id]);
  return rows[0];
};

exports.createPost = async (title, content, author) => {
  const [result] = await pool.query(
    'INSERT INTO posts (title, content, author) VALUES (?, ?, ?)',
    [title, content, author]
  );
  return { id: result.insertId, title, content, author };
};

exports.updatePost = async (id, title, content, author) => {
  await pool.query(
    'UPDATE posts SET title=?, content=?, author=? WHERE id=?',
    [title, content, author, id]
  );
  return { id, title, content, author };
};

exports.deletePost = async (id) => {
  await pool.query('DELETE FROM posts WHERE id=?', [id]);
};