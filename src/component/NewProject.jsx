// NewProject.js
import React, { useRef, useState } from 'react';
import Input from './Input';
import ErrorModal from './Modal';
const NewProject = ({ onAdd , onDelete}) => {
  const titleref = useRef();
  const descref = useRef();
  const dateref = useRef();
  const [showError, setShowError] = useState(false);
//handle the error modal 
  const handleCloseError = () => {
    setShowError(false);
  };

  const HandleSave = () => {
    const enteredTitle = titleref.current.value;
    const enteredDesc = descref.current.value;
    const eneterddate = dateref.current.value;

    // Validation
    if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || eneterddate.trim() === '') {
      // Show the error modal
      setShowError(true);
      return;
    }

    onAdd({
      title: enteredTitle,
      desc: enteredDesc,
      dueDate: eneterddate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950" onClick={ onDelete}>Cancel</button>
        </li>
        <li>
          <button
            className="py-4 px-4 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950"
            onClick={HandleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" type="text" ref={titleref} />
        <Input label="Description" textarea ref={descref} />
        <Input label="Due Date" type="date" ref={dateref} />
      </div>

      {/* ErrorModal */}
      {showError && <ErrorModal onClose={handleCloseError} />}
    </div>
  );
};

export default NewProject;
