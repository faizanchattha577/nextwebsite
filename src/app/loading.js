import React from "react";

const Loading = () => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative p-8 bg-white rounded-md shadow-lg">
          <svg
            className="absolute top-0 left-0 z-40 w-16 h-16 m-2 text-blue-500 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v3a5 5 0 110 10V12z"
            ></path>
          </svg>
          <p className="text-lg font-medium text-gray-900">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
