import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AddService() {
  const [ratings, setRatings] = useState(4.5);
  const [price, setPrice] = useState(6.99);
  const navigate = useNavigate();

  const handleSubmit = async function (e) {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.name.value;
    const text = form.textbox.value;
    const serviceImage = form.image.value;

    const service = {
      createdAt: new Date().toISOString(),
      title: serviceName,
      description: text,
      rating: ratings,
      price,
      img: serviceImage,
    };

    try {
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(service),
      };

      const res = await fetch("http://localhost:5000/services", config);
      const data = await res.json();

      if (data.acknowledged) {
        toast.success("Service added successfully ", {
          duration: 3000,
          icon: "😍",
        });
        navigate(-1);
        form.reset();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-20">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex items-center">
          <label className="w-20 font-semibold sm:w-32" htmlFor="name">
            Name:
          </label>
          <input
            className="flex-1 inline-block p-2 rounded-md ring-amber-400 focus:outline-none ring-2 focus:ring-amber-500"
            name="name"
            id="name"
            placeholder="Service Name"
            required
          />
        </div>

        <div className="flex items-center">
          <label className="w-20 font-semibold sm:w-32" htmlFor="image">
            Image:
          </label>
          <input
            className="flex-1 inline-block p-2 rounded-md ring-amber-400 focus:outline-none ring-2 focus:ring-amber-500"
            name="image"
            id="image"
            placeholder="Service Image Link"
            required
          />
        </div>

        <div className="flex items-center">
          <label className="w-20 font-semibold sm:w-32" htmlFor="price">
            Price:
          </label>
          <select
            name="price"
            id="price"
            onClick={(e) => setPrice(e.target.value)}
            className="p-1 rounded-md ring-amber-400 focus:outline-none ring-2 focus:ring-amber-500"
            defaultValue="6.99"
          >
            <option value="5.99">5.99</option>
            <option value="6.99">6.99</option>
            <option value="8.99">8.99</option>
            <option value="9.99">9.99</option>
          </select>
        </div>

        <div className="flex ">
          <label className="w-20 font-semibold sm:w-32" htmlFor="textbox">
            Details:
          </label>
          <textarea
            className="flex-1 px-1 rounded-md ring-amber-400 focus:outline-none ring-2 focus:ring-amber-500"
            name="textbox"
            id="textbox"
            rows="6"
            required
          ></textarea>
        </div>
        <div className="flex items-center">
          <label htmlFor="rating" className="w-20 font-semibold sm:w-32">
            Rating:
          </label>
          <select
            name="rating"
            id="rating"
            onClick={(e) => setRatings(e.target.value)}
            className="p-1 rounded-md ring-amber-400 focus:outline-none ring-2 focus:ring-amber-500"
            defaultValue="4.5"
          >
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
          </select>
        </div>

        <button
          type="submit"
          className="block px-4 py-[6px] mt-4 font-semibold text-center text-white transition duration-300 rounded shadow-md bg-amber-400 shadow-amber-400 hover:bg-amber-500 active:translate-y-1"
        >
          Add Service
        </button>
      </form>
    </div>
  );
}
