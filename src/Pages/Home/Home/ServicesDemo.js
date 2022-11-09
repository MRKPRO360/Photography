import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/ServiceCard";

export default function ServicesDemo() {
  const [servicesDemo, setServicesDemo] = useState([]);
  useEffect(() => {
    const loadData = async function () {
      try {
        const res = await fetch("http://localhost:5000/services?limit=3");
        const data = await res.json();
        setServicesDemo(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <div className="grid gap-16 mt-48 mb-24 grid-cols-auto">
        {servicesDemo.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
      <div className="text-center">
        <Link to="/services">
          <button className="inline-block px-4 font-semibold py-[6px] mt-4  text-center text-white transition duration-300 rounded shadow-md bg-amber-400 shadow-amber-400 hover:bg-amber-500 active:translate-y-1">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
}
