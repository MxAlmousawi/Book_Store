/* eslint-disable react/prop-types */

import BookSingleCart from "./BookSingleCart";

const BooksCart = ({books}) => {
  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  ">
      {books.map((book) => (
        <BookSingleCart book={book} key={book._id}></BookSingleCart>
      ))}
    </div>
  );
};
export default BooksCart;
