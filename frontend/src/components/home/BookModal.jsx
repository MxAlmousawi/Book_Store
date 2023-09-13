import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[500px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        ></AiOutlineClose>
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-grey-500">{book._id}</h4>
        <div className=" flex -justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl"></PiBookOpenTextLight>
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl"></BiUserCircle>
          <h2 className="my-1">{book.author}</h2>
        </div>
      <p className="mt-4">Any thing you want to add</p>
      <p className="my-2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        facere quibusdam amet alias, hic aperiam repellat non! Numquam quas,
        minus hic laborum fuga nobis odio non minima officia corporis iste.
      </p>
      </div>
    </div>
  );
};
export default BookModal;
