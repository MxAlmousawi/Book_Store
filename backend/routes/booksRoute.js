import express from "express";
import { createBook , getAllBooks , getSingleBook , updateBook , deleteBook } from "../controllers/books.js";
const router = express.Router();

router.route('/').get(getAllBooks).post(createBook)
router.route('/:id').get(getSingleBook).patch(updateBook).delete(deleteBook)


export default router;
