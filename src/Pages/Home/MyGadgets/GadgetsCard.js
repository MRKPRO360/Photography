import React from "react";

export default function GadgetsCard({ img, title }) {
  return (
    <div>
      <img
        className="object-cover object-center w-full h-56 rounded"
        src={img}
        alt={title}
      />
      <p className="mt-3 text-lg font-semibold">{title}</p>
    </div>
  );
}
