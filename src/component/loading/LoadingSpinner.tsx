import React from "react";

function LoadingSpinner() {
  return (
    <div
      className="flex  flex-col  justify-center fixed top-0 right-0 bottom-0 left-0 z-10"
      style={{
        backgroundColor: "rgb(115 115 115 / 0.3)",
      }}
    >
      <div className="flex  justify-center">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
