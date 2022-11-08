import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] text-lg font-semibold text-gray-700 sm:text-xl">
      <div>
        The page that you are looking for is not currently available. Go instead
        the &nbsp;
        <Link className="underline text-amber-500 " to="/">
          home
        </Link>
        &nbsp; page.
      </div>
    </div>
  );
}
