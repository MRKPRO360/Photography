import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const allServices = useLoaderData();

  return (
    <div>
      <h2 className="text-2xl font-semibold underline underline-offset-8 decoration-4 decoration-amber-500">
        Our All Services
      </h2>

      <div className="grid gap-16 mt-16 grid-cols-auto">
        {allServices.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </div>
  );
}
