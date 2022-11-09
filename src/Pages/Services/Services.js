import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../Shared/ServiceCard";
import { FadeLoader } from "react-spinners";
import { useAuth } from "../../Context/AuthContext";

export default function Services() {
  const { loading } = useAuth();
  const allServices = useLoaderData();
  useTitle("Services");

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <FadeLoader color="rgb(251,191,36)" />
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold underline underline-offset-8 decoration-4 decoration-amber-500">
            My All Services
          </h2>

          <div className="grid gap-16 mt-16 grid-cols-auto">
            {allServices.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
