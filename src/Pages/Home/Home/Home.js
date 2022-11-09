import useTitle from "../../../hooks/useTitle";
import Banner from "./Banner";
import ServicesDemo from "./ServicesDemo";

export default function Home() {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <ServicesDemo />
    </div>
  );
}
