import express from "express";
import { register, login, logout, getMyData } from "../controllers/auth.js";
import { verify } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", verify, getMyData);

export default router;
