import React from 'react'
import noProjectImage from "../assets/no-projects.png";
import Button from './Button';
const NoProjectSelected = ({onstartAddProject}) => {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img src={noProjectImage} alt='An empty task list' className='w-16 h-16 object-contain mx-auto'/>
      <h2 className='text-xl font-boldtext-stone-900 my-4'>No Project Selected</h2>
      <p>Select a project or get started with new project </p>
      <p className='text-stone-400 mb-8'>
        <Button onClick={onstartAddProject}>Create new project </Button>
      </p>
    </div>
  )
}

export default NoProjectSelected
