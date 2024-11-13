import React from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel }) => (
    <div className="fixed inset-0 flex items-center justify-center ">
    <div className="bg-white p-6 rounded shadow-lg w-80 text-center">
      <h2 className="text-lg font-semibold mb-4">Submit Survey</h2>
      <p className="mb-6">Are you sure you want to submit your answers?</p>
      <div className="flex justify-center gap-4">
        <button 
          onClick={onConfirm} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
        >
          Yes
        </button>
        <button 
          onClick={onCancel} 
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
        >
          No
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmationDialog;
