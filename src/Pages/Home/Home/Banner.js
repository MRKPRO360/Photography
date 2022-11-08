import { Link } from "react-router-dom";
import img from "../../../images/photographer.jpg";
export default function Banner() {
  return (
    <div className="justify-between gap-10 space-y-10 bg-white rounded-md lg:flex lg:space-y-0">
      <div className="flex-1">
        <h1 className="text-2xl font-semibold text-black sm:text-3xl md:text-4xl">
          Anytime, Anywhere. From any distance
          <span className="font-bold text-amber-500">...</span>
        </h1>
        <p className="mt-6 text-base font-semibold text-gray-700 sm:text-lg sm:mt-9 lg:mt-12 ">
          Photography is my passion. I try to do my best that's why my client's
          are satisfied what I do. Photgraphy is my satisfaction not my
          perfection.
        </p>
        <div className="flex gap-6 mt-10 text-base font-semibold sm:text-lg lg:mt-20">
          <Link
            to="/"
            className="flex items-center px-2 py-1 text-white duration-300 rounded-md shadow-sm cursor-pointer bg-amber-500 sm:px-4 sm:py-2 hover:bg-amber-600 active:bg-amber-700 transorm transtion active:translate-y-1 focus:ring-2 focus:ring-offset-4 focus:ring-amber-600 shadow-amber-300 active:shadow-lg backface-hidden"
          >
            Success Story
          </Link>
          <button className="px-2 py-1 border-4 rounded-md border-amber-500 sm:px-4 sm:py-2 ">
            Read More
          </button>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <img
          className="rounded-md h-72 sm:h-[450px] w-full object-cover object-center shadow-md shadow-amber-100"
          src={img}
          alt="Pizza cook"
        />
      </div>
    </div>
  );
}
