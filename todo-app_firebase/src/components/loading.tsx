import React from "react";

export const Loading = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-200 border-t-blue-500"></div>
    </div>
  );
};
