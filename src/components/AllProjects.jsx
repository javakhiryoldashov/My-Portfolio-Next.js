import React from "react";
import SingleProductCard from "./SingleProductCard";

export default function AllProjects({ projects }) {
  return (
    <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
      {projects.map((project, index) => (
        <li key={index} className="opacity: 1; transform: none;">
          <SingleProductCard project={project} />
        </li>
      ))}
    </ul>
  );
}
