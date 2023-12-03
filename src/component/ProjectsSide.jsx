import React from "react";
import Button from "./Button";
const ProjectsSide = ({
  onstartAddProject,
  project,
  onSelectProject,
  seletedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold  uppercase md:text-xl text-stone-200">
        Your Project
      </h2>
      <Button onClick={onstartAddProject}>+ Add Project</Button>
      <ul className="mt-8">
        {project.map((item) => {
          let cssClass ="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-600";
          if(item.id ===seletedProjectId){
            cssClass += " bg-stone-800 text-stone-200"
          } else{
            cssClass =" text-stone-400"
          }
          return (
            <li key={item.id}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(item.id)}
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectsSide;

