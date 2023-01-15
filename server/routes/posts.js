import express from "express";
import { verify } from "../controllers/auth.js";
import {
  addPost,
  createComment,
  deleteComment,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verify, addPost);
router.delete("/:id", verify, deletePost);
router.put("/:id", verify, updatePost);
router.post("/comments", verify, createComment);
router.delete("/comments/:id", verify, deleteComment);

export default router;
