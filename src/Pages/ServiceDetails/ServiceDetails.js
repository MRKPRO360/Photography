import { useLoaderData } from "react-router-dom";

export default function ServiceDetails() {
  const serviceDetails = useLoaderData();
  console.log(serviceDetails);
  return <div>ServicesDetails</div>;
}
