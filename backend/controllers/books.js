import express from "express";
import { Book } from "../models/bookModel.js";

const router = express.Router();

//create new book
const createBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: " Send all required fields : title , author , publishYear ",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const book = await Book.create(newBook);

    return res.status(201).send(book);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error.message });
  }
};

//get all books
const getAllBooks = async (req, res) => {
  try {
    const book = await Book.find({});
    const val = book;
    const count = val.length;
    res.status(200).send({ count: count, books: val });
  } catch (error) {
    console.log(error);
  }
};

//get a single book
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).send("id not found");
    }
    return res.status(200).json( book );
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

//update a book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const newBook = req.body;
    const book = await Book.findByIdAndUpdate(id, newBook);
    if (!book) return res.status(404).send({ message: "not found" });
    return res.status(200).send(book);
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

//delete a book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).send("id not found");
    }
    return res.status(200).send({ book: book });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export { createBook, getAllBooks, getSingleBook, updateBook, deleteBook };
