import ProjectsSide from "./component/ProjectsSide";
import NewProject from "./component/NewProject";
import { useState } from "react";
import NoProjectSelected from "./component/NoProjectSelected";
import SelectedProjects from "./component/SelectedProjects";
function App() {
  const [projectState, setprojectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const Handlestartproject = () => {
    setprojectState((prestate) => {
      return {
        ...prestate,
        selectedProjectId: null,
      };
    });
  };

  const HandleSlectProject = (id) => {
    setprojectState((prestate) => {
      return {
        ...prestate,
        selectedProjectId: id,
      };
    });
  };

  //here we are doing lift up sate an we ll get a form data as a props from input component

  const handleAddProject = (projectData) => {
    const newProjects = {
      ...projectData,
      id: Math.random(),
    };
    setprojectState((prestate) => {
      return {
        ...prestate,
        projects: [...prestate.projects, newProjects],
      };
    });
  };

  console.log(projectState.projects, "inside app");


//Delete Handler

const HanleDelete=()=>{
  setprojectState((prestate) => {
    return {
      ...prestate,
      selectedProjectId: undefined,
      projects:prestate.projects.filter((item)=> item.id !==prestate.selectedProjectId)
    };
  });
}

  console.log(projectState, "only");
//will check which project is selected by the user  by id
  const seletedProjects = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  //then we render the seleted Component on the basics on id 
  let content =<SelectedProjects project ={seletedProjects} onDelete ={HanleDelete}/>;

  if (projectState.selectedProjectId === null) {

    content = <NewProject onAdd={handleAddProject}  onDelete={HanleDelete}/>;

  } else if (projectState.selectedProjectId === undefined) {
    
    content = <NoProjectSelected onstartAddProject={Handlestartproject} />;
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSide
          onstartAddProject={Handlestartproject}
          project={projectState.projects}
          onSelectProject={HandleSlectProject}
        />
        {content}
      </main>
    </>
  );
}

export default App;
