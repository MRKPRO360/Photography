import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard";

export default function Services() {
  const allServices = useLoaderData();
  useTitle("Services");
  return (
    <div>
      <h2 className="text-2xl font-semibold underline underline-offset-8 decoration-4 decoration-amber-500">
        My All Services
      </h2>

      <div className="grid gap-16 mt-16 grid-cols-auto">
        {allServices.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </div>
    </div>
  );
}
