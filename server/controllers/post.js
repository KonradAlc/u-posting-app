import { db } from "../db.js";

export const getPosts = (req, res) => {
  const q =
    "SELECT p.id_post, `username`, `title`, `description`, u.user_img, u.id_user, `created_at` FROM posts p JOIN users u ON u.id_user = p.user_id ORDER BY created_at DESC";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);

    const posts = data.map((post) => ({
      id: post.id_post,
      title: post.title,
      description: post.description,
      created_at: post.created_at,
      author: {
        id: post.id_user,
        username: post.username,
        user_img: post.user_img,
      },
    }));

    return res.status(200).json(posts);
  });
};

export const getPost = (req, res) => {
  const q =
    "SELECT p.id_post, `username`, `title`, `description`, u.user_img, u.id_user, `created_at` FROM posts p JOIN users u ON u.id_user = p.user_id WHERE p.id_post = ? ";
  const q2 =
    "SELECT c.id_comment, `username`, `description`, u.user_img, u.id_user, `created_at` FROM comments c JOIN users u ON u.id_user = c.user_id WHERE c.post_id = ? ORDER BY created_at DESC";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("Nie ma takiego posta.");

    const post = {
      id: data[0].id_post,
      title: data[0].title,
      description: data[0].description,
      created_at: data[0].created_at,
      author: {
        id: data[0].id_user,
        username: data[0].username,
        user_img: data[0].user_img,
      },
    };

    db.query(q2, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);

      const comments = data.map((comment) => ({
        id: comment.id_comment,
        content: comment.description,
        created_at: comment.created_at,
        author: {
          id: comment.id_user,
          username: comment.username,
          user_img: comment.user_img,
        },
      }));

      return res.status(200).json({ ...post, comments: comments });
    });
  });
};

export const addPost = (req, res) => {
  const { title, description } = req.body;
  const date = new Date().toISOString();

  const q = "INSERT INTO posts(`title`, `description`, `created_at`, `user_id`) VALUES (?)";

  const values = [title, description, date, req.user.id_user];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post został dodany.");
  });
};

export const deletePost = (req, res) => {
  const q = "DELETE FROM posts WHERE id_post = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post został usunięty.");
  });
};

export const updatePost = (req, res) => {
  const { title, description } = req.body;

  const q = "UPDATE posts SET `title` = ?, `description` = ? WHERE id_post = ?";

  const values = [title, description, req.params.id];

  db.query(q, values, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Post został zaktualizowany.");
  });
};

export const createComment = (req, res) => {
  const { post_id, description } = req.body;
  const date = new Date().toISOString();

  const q = "INSERT INTO comments(`description`, `created_at`, `user_id`, `post_id`) VALUES (?)";

  const values = [description, date, req.user.id_user, post_id];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Komentarz został dodany.");
  });
};

export const deleteComment = (req, res) => {
  const q = "DELETE FROM comments WHERE id_comment = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Komentarz został usunięty.");
  });
};
