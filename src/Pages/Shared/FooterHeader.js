import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function FooterHeader() {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4 sm:gap-0">
      <h3 className="text-lg sm:text-xl font-semibold">
        Get Connect With Me On Social Networks:
      </h3>
      <div className="flex gap-5">
        <FaFacebook className="bg-amber-500 text-gray-100 p-2 text-4xl rounded cursor-pointer transition duration-300 hover:bg-amber-600" />
        <FaTwitter className="bg-amber-500 text-gray-100 p-2 text-4xl rounded cursor-pointer transition duration-300 hover:bg-amber-600" />
        <FaGoogle className="bg-amber-500 text-gray-100 p-2 text-4xl rounded cursor-pointer transition duration-300 hover:bg-amber-600" />
        <FaGithub className="bg-amber-500 text-gray-100 p-2 text-4xl rounded cursor-pointer transition duration-300 hover:bg-amber-600" />
        <FaLinkedin className="bg-amber-500 text-gray-100 p-2 text-4xl rounded cursor-pointer transition duration-300 hover:bg-amber-600" />
      </div>
    </div>
  );
}
