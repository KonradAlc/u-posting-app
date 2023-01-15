import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
