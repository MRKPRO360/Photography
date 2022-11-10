import GadgetsCard from "./GadgetsCard";
import img1 from "../../../images/Fpv camera drone.jpg";
import img2 from "../../../images/Go pro volta 4-hour external battery grip and controller.jpg";
import img3 from "../../../images/Sony 14mm 1.8lens.jpg";
import img4 from "../../../images/Sony-Alpha-7R-V-Mirrorless-Interchangeable-Lens-Camerajpeg.jpeg";
import img5 from "../../../images/Sony-FX30-Digital-Cinema.jpg";
import img6 from "../../../images/Tamaron 17-70mm.jpg";

const cardsInfo = [
  {
    title: "FPV camera drone",
    img: img1,
  },
  {
    title: "External battery grip and controller",
    img: img2,
  },
  {
    title: "Sony 14mm 1.8lens",
    img: img3,
  },
  {
    title: "Sony-Alpha-7R-V-Mirrorless camera",
    img: img4,
  },
  {
    title: "Sony-FX30-Digital-Cinema",
    img: img5,
  },
  {
    title: "Tamaron 17-70mm",
    img: img6,
  },
];

export default function MyGadgets() {
  return (
    <div className="mb-20 mt-36">
      <h2 className="mb-20 text-3xl font-semibold text-center">My Gadgets</h2>
      <div className="grid gap-16 grid-cols-auto">
        {cardsInfo.map((el, i) => (
          <GadgetsCard img={el.img} title={el.title} key={i} />
        ))}
      </div>
    </div>
  );
}
