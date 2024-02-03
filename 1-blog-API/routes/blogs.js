import express from "express";
import {
    getBlog,
    getIdBlog,
    deleteBlog,
    addBlog,
    updateBlog,
} from "../controllers/blogs.js";

const router = express.Router();

router.get("/", getBlog);
router.get("/:id", getIdBlog);
router.delete("/:id", deleteBlog);
router.post("/", addBlog);
router.patch("/:id", updateBlog);

export default router;