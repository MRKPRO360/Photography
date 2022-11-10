import img from "../../../images/profile.jpg";
export default function AboutMe() {
  return (
    <div className="mb-20 mt-36">
      <h2 className="mb-20 text-3xl font-semibold text-center">About Me</h2>
      <div className="justify-between gap-10 space-y-10 bg-white rounded-md lg:flex lg:space-y-0">
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-md h-72 sm:h-[400px]  w-full object-fill shadow-md shadow-amber-100"
            src={img}
            alt="Pizza cook"
          />
        </div>

        <div className="flex-1">
          <p className="mt-6 text-base font-semibold text-gray-700 sm:text-lg sm:mt-9 lg:mt-12 ">
            I've been working as a photographer since 2018 and earned a lots
            stuff. The success story wasn't easy for me. I had to hardly
            struggle to achieve my goal.
          </p>
          <p className="mt-6 text-base font-semibold text-gray-700 sm:text-lg sm:mt-9 lg:mt-12 ">
            Lately I have been recognized as a senior photographer in the
            photographing world. Capturing unique moments charm me a lot.
          </p>
          <div className="flex gap-6 mt-10 text-base font-semibold sm:text-lg lg:mt-20">
            <button className="flex items-center px-2 py-1 text-white duration-300 rounded-md shadow-sm cursor-pointer bg-amber-500 sm:px-4 sm:py-2 hover:bg-amber-600 active:bg-amber-700 transorm transtion active:translate-y-1 focus:ring-2 focus:ring-offset-4 focus:ring-amber-600 shadow-amber-300 active:shadow-lg backface-hidden">
              {" "}
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
