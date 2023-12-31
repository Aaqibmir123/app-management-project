import React from "react";

const SelectedProjects = ({ project, onDelete }) => {
  const formatedDate = new Date(project.dueDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rm] mt-16">
      <header className="pb-4  mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button className="text-stone-600 hove:text-stone-950" onClick={ onDelete}>Delete</button>
        </div>
        <p className="mb-4 text-stone-400 ">{formatedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.desc}
        </p>
      </header>
    </div>
  );
};

export default SelectedProjects;
