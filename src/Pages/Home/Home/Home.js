import useTitle from "../../../hooks/useTitle";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ServicesDemo from "../ServicesDemo/ServicesDemo";

export default function Home() {
  useTitle("Home");
  return (
    <div>
      <Banner />
      <ServicesDemo />
      <AboutMe />
    </div>
  );
}
