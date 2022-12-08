import express from "express";
import { blogs } from "../entity/blog";
import { AppDataSource } from "../data-source";
import bodyParser from "body-parser";

export const router = express.Router();

const app = express();

const blogRepo = AppDataSource.getRepository(blogs);

router.post("/create", async (req, res) => {
  try {
    const blog = await blogRepo.save(req.body);
    if (blog) {
      res.status(200).json({
        message: "create blog done",
        blog: blog,
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "loi roi",
    });
  }
});
router.delete("/delete/:id", async (req, res) => {
  try {
    const searchBlog = await blogRepo.findOneBy({ id: +req.params.id });
    if (!searchBlog) {
      res.status(500).json({
        message: "Khong co blog nay",
      });
    } else {
      await blogRepo.delete(searchBlog);
      res.status(200).json({
        message: "Thanh cong",
      });
    }
  } catch {
    res.status(500).json({
      message: "loi xoa roi",
    });
  }
});
router.get("/list", async (req, res) => {
  try {
    const blog = await blogRepo.find();
    if (blog) {
      res.status(200).json({ message: "Sucess", blog: blog });
    }
  } catch (err) {
    res.status(500).json({ message: err.mesage });
  }
});
router.put("/update", async (req, res) => {
  try {
    let blogSearch = await blogRepo.findOneBy({ id: req.body.id });
    if (!blogSearch) {
      res.status(500).json({
        mesage: "Sản phẩm không tồn tại",
      });
    }
    const blog = await blogRepo.update({ id: req.body.id }, req.body);
    res.status(200).json({
      message: "Update product success",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
