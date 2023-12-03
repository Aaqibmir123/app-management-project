// ErrorModal.js
import React from 'react';

const ErrorModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Error</h2>
        <p className="text-red-600">Please fill in all fields.</p>
        <button
          className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
